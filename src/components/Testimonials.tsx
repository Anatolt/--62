import React from 'react';
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  { author: "Арина", text: "Сказка сыну понравилась, очень он удивился, что про Мишу мы не писали, а в сказке он есть, у него именно Миша друг в школе." },
  { author: "Татьяна", text: "Спасибо за такие волшебные сказки! Я с удовольствием их читаю и делюсь с родными!" },
  { author: "Мария", text: "Я бабушка. Случайно наткнулась на этот канал. Решила узнать, что это. Очень довольна. Послала маме. Прочитает ребёнку на ночь. Спасибо большое." },
  { author: "Елена", text: "Сказка очень получилась увлекательная 🔥👌. Ребёнок был в восторге!!! Спасибо ❤️." },
  { author: "Ксения", text: "Напечатаем, заламинируем и сошьем каждую сказку, и будут у нас книжки 😊." },
  { author: "Алевтина", text: "Благодарю, потратили время с вашей девочкой, но приятный результат." },
  { author: "Алёна", text: "Вау!!! Сказка очень понравилась, осталось только дать прочитать её дочке 😊." },
  { author: "Алёна", text: "Спасибо! Отличная сказка! Разнообразили вечер какой-то новой историей, очень необычно, мы с ребёнком в восторге 😊." }
];

export const Testimonials = () => {
  return (
    <div className="py-20">
      <div className="container">
        <h2 className="font-display text-4xl text-center mb-12">Отзывы</h2>
        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="testimonial-card p-6 h-full">
                  <p className="mb-4">{testimonial.text}</p>
                  <p className="font-semibold">— {testimonial.author}</p>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};