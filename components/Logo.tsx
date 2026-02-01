import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

export const Logo: React.FC<LogoProps> = ({ className = "h-8", variant = 'dark' }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {!imgError ? (
        <img 
          // Using lh3.googleusercontent.com is often more reliable for direct embedding
          src="https://lh3.googleusercontent.com/d/1WG8bsoVkEWP7T7J-zpXuHx3vQq74z9xJ" 
          alt="Arenate Logo" 
          className="h-10 w-auto object-contain drop-shadow-md"
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
        />
      ) : (
        /* Fallback SVG Logo if the image fails to load */
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
          <path d="M20 4L4 36H12L20 20L28 36H36L20 4Z" fill="#84cc56" />
          <path d="M20 20L15 30H25L20 20Z" fill="#6da846" />
          <path d="M20 4L26 16L32 30H36L20 4Z" fill="#a3d982" fillOpacity="0.5" />
        </svg>
      )}
      <span className={`font-bold text-xl tracking-tight ${variant === 'light' ? 'text-white' : 'text-slate-900'}`}>
        Arenate
      </span>
    </div>
  );
};