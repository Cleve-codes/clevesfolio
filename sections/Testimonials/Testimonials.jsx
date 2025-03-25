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
            <CarouselContent className="testimonials-content">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} usage="testimonials" className="testimonials-carousel-item" >
                  <div className="testimonials-content">
                    <TestimonialsCard
                      text={testimonial.text}
                      name={testimonial.name}
                      job={testimonial.job}
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
