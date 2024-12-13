import React from 'react';

const steps = [
  "Опишите своего ребенка",
  "Выберите спутника своему ребенку",
  "Загрузите фото ребенка",
  "Выберите мораль или создайте свою!",
  "Расскажите про интересы ребенка"
];

export const HowItWorks = () => {
  return (
    <div className="py-20 bg-secondary/30">
      <div className="container max-w-4xl">
        <h2 className="font-display text-4xl text-center mb-12">Как это работает?</h2>
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-white/80 rounded-lg shadow-sm">
              <span className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0">
                {index + 1}
              </span>
              <p className="text-lg">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};