import * as React from "react";
import './Testimonials.css'
import { testimonials } from "@/constants/data";


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ExperiencesCard from "@/components/ui/Card";
import TestimonialsCard from "@/components/ui/TestimonialsCard";

export function Testimonials() {
  return (
      <div className="testimonials-section" id="testimonials" >
        <Carousel
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
          dragThreshold: 2,
          watchDrag: true,
        }}
         className="testimonials-carousel">
        <div className="testimonial-carousel-buttons">
            <CarouselPrevious usage="testimonials" />
            <CarouselNext usage="testimonials" />
          </div>
          <div className="testimonials-carousel-text" >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} usage="testimonials" className="testimonials-carousel-item" >
                  <div className="testimonials-content">
                    <TestimonialsCard
                      text={testimonials[index].text}
                      name={testimonials[index].name}
                      job={testimonials[index].job}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </Carousel>
      </div>
  );
}
