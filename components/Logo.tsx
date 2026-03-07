import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

export const Logo: React.FC<LogoProps> = ({ className = "h-8", variant = 'dark' }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative shrink-0">
        {!imgError ? (
          <img 
            src="https://lh3.googleusercontent.com/d/1WG8bsoVkEWP7T7J-zpXuHx3vQq74z9xJ" 
            alt="Arenate Logo" 
            className="h-8 w-auto object-contain drop-shadow-sm transition-transform group-hover:scale-110"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
          />
        ) : (
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
            <path d="M20 4L4 36H12L20 20L28 36H36L20 4Z" fill="#84cc56" />
            <path d="M20 20L15 30H25L20 20Z" fill="#6da846" />
          </svg>
        )}
      </div>
      <span className={`font-bold text-lg tracking-tight leading-none ${variant === 'light' ? 'text-white' : 'text-slate-900'}`}>
        Arenate
      </span>
    </div>
  );
};