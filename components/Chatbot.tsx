import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ARENATE_CONTEXT = `
You are Nexus, a helpful AI assistant embedded in the Arenate website. Your role is to answer user questions based on the provided context document and assist visitors with information about this project.

Core Behavior Rules:
- Context-First Responses: Always prioritize information from the provided context document.
- Scope Limitations: Only answer questions related to the website, project, or topics covered in the context document. If a question is outside scope, politely redirect: "I'm Nexus, specifically designed to help with Arenate. For that question, I'd recommend checking out related student resources or contacting our team."
- Accuracy & Honesty: If you're unsure or information is missing, say: "I don't have that specific information in my knowledge base." Never make up information.
- Tone: Conversational, friendly, and professional.
- Format: Use bullet points for lists. Keep responses concise.

Context Document:
Arenate is a comprehensive ecosystem designed to empower colleges with smarter competition and event management. It serves as a centralized "College Space" where multiple student organizations can host and manage their events seamlessly, replacing fragmented workflows involving scattered Google Forms and WhatsApp groups.
The Arenate portal is free of cost forever for colleges and student organizations.

Core Problems Solved:
- Manual Setup: No more building custom forms from scratch.
- Redundant Data: Students use one-click registration.
- Communication Chaos: Replaces scattered WhatsApp with a unified dashboard.
- Resource Loss: Prevents files from disappearing in chat histories.
- Hard Reset: Preserves history to accelerate future growth.

For Organizers:
- Instant Listing: Publish activities instantly.
- Activity Types: "Events" (short-term, participation-focused) and "Competitions" (multi-phase, outcome-driven).
- Team Continuity: Information is centralized for all organization members.

Contact:
- Email: arenate.competitionsphere@gmail.com
- LinkedIn: linkedin.com/in/akshat-agarwal-ecell
- Calendly: calendly.com/arenate-competitionsphere/30min
`;

const FormattedMessage: React.FC<{ text: string }> = ({ text }) => {
  const lines = text.split('\n');
  
  return (
    <div className="space-y-1.5">
      {lines.map((line, i) => {
        let content = line;
        const isBullet = content.trim().startsWith('* ');
        
        if (isBullet) {
          content = content.trim().substring(2);
        }

        // Handle bolding: **text**
        const parts = content.split(/(\*\*.*?\*\*)/g);
        const rendered = parts.map((part, j) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={j} className="font-bold">{part.slice(2, -2)}</strong>;
          }
          return part;
        });

        if (isBullet) {
          return (
            <div key={i} className="flex gap-2 ml-1 items-start">
              <span className="shrink-0 text-arenate-green font-bold">•</span>
              <span className="leading-relaxed">{rendered}</span>
            </div>
          );
        }

        if (line.trim() === '') {
          return <div key={i} className="h-2" />;
        }

        return (
          <p key={i} className="leading-relaxed">
            {rendered}
          </p>
        );
      })}
    </div>
  );
};

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hi! I'm Nexus, your Arenate assistant. How can I help you today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: ARENATE_CONTEXT,
        },
        history: history
      });

      const response = await chat.sendMessage({ message: userMessage });
      const botText = response.text || "I'm sorry, I couldn't process that. Please try again.";
      
      setMessages(prev => [...prev, { role: 'model', text: botText }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: "Sorry, I'm having trouble connecting right now. Please try again later or contact us directly." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[calc(100vw-32px)] sm:w-[420px] h-[600px] max-h-[85vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200/50 backdrop-blur-xl"
          >
            {/* Header */}
            <div className="bg-arenate-green p-4 flex items-center justify-between text-white shadow-lg shrink-0">
              <div className="flex items-center gap-2">
                <div className="bg-white/20 p-1.5 rounded-lg">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-sm leading-tight">Nexus</h3>
                  <p className="text-[10px] text-white/80">Online & ready to help</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-black/10 p-1.5 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50"
            >
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[90%] p-4 rounded-2xl text-sm shadow-sm ${
                      msg.role === 'user' 
                        ? 'bg-arenate-green text-white rounded-br-none' 
                        : 'bg-white border border-slate-100 text-slate-800 rounded-bl-none'
                    }`}
                  >
                    <FormattedMessage text={msg.text} />
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-2 text-slate-400">
                    <Loader2 size={16} className="animate-spin text-arenate-green" />
                    <span className="text-xs font-medium">Writing response...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Footer / Input */}
            <div className="p-4 bg-white border-t border-slate-100">
              <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-2xl border border-slate-200 focus-within:border-arenate-green transition-all">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-transparent border-none focus:ring-0 text-sm px-3 py-2 text-slate-800 outline-none"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="bg-arenate-green hover:bg-green-600 disabled:opacity-50 text-white p-2 rounded-xl transition-all shadow-md active:scale-95 shrink-0"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-[10px] text-slate-400 mt-3 text-center flex items-center justify-center gap-1">
                Powered by Gemini AI <span className="text-arenate-green">●</span> Developed by Arenate
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-arenate-green text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-colors group relative"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        
        {!isOpen && (
          <div className="absolute right-full mr-4 bg-slate-900 text-white text-xs py-2 px-3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
            Questions? Chat with Nexus!
          </div>
        )}
      </motion.button>
    </div>
  );
};