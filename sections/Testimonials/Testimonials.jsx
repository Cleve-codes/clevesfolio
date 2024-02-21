import * as React from "react";
import './Testimonials.css'

const testimonials = [
  {
    text: '"Working with Cleve was an absolute delight. Their creativity and technical expertise transformed our project into a masterpiece. Highly recommended!"',
    name: "Jeffers Abaga",
    job: "Startup Founder",
  },
  {
    text: '"Exceptional work! Cleve brings a unique blend of innovation and precision to every project. A true professional in the field."',
    name: "Maureen Wambui",
    job: "UX Designer",
  },
  {
    text: '"Wagwan! Cleve\'s FrontEnd skills are unparalleled. They not only meet but exceed expectations. Looking forward to future collaborations."',
    name: "Sarah Kinyua",
    job: "Software Engineer",
  },
  {
    text: '"Cleve is a creative genius! Their UI/UX designs are not just visually stunning but also incredibly user-friendly. A pleasure to work with."',
    name: "Michael Oliver",
    job: "Graphic Designer",
  },
  {
    text: '"Incredible SEO and Digital Marketing expertise! Cleve knows how to boost online visibility and drive results. Highly satisfied with the outcomes."',
    name: "Wendy Williams",
    job: "Marketing Specialist",
  },
];

// Now your testimonials array is populated with dummy data for 5 items.

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
      <div className="testimonials-section">
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
