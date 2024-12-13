import React from 'react';
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-20">
      <h1 className="font-display text-5xl md:text-7xl text-center mb-8">ЯвСказке</h1>
      <p className="text-lg md:text-xl text-center max-w-2xl mb-12">
        Представьте восторг вашего ребенка, когда он узнает, что стал героем своей любимой сказки!
      </p>
      <a 
        href="https://t.me/neiroskazki_god_bot" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <Button className="text-xl px-8 py-6 rounded-full bg-primary hover:bg-primary/90 transition-all transform hover:scale-105">
          Создать сказку!
        </Button>
      </a>
    </div>
  );
};