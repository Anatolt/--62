import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-primary/5 py-12">
      <div className="container max-w-4xl">
        <h3 className="font-display text-2xl text-center mb-8">Поддержка</h3>
        <div className="flex flex-col items-center gap-4 text-lg">
          <a 
            href="https://t.me/yavskazke_community" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Поддержка в Telegram
          </a>
          <a 
            href="mailto:help@yavskazke.site"
            className="hover:text-primary transition-colors"
          >
            Поддержка по электронной почте
          </a>
        </div>
      </div>
    </footer>
  );
};