import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";
import Image1 from "/home/cleve/Documents/Javascript/React/clevefolio/public/assets/asset 9.jpeg";
import Image2 from "/home/cleve/Documents/Javascript/React/clevefolio/public/assets/asset 10.jpeg";
import Image3 from "/home/cleve/Documents/Javascript/React/clevefolio/public/assets/asset 11.jpeg";
import Image4 from "/home/cleve/Documents/Javascript/React/clevefolio/public/assets/asset 12.jpeg";
import Image5 from "/home/cleve/Documents/Javascript/React/clevefolio/public/assets/asset 13.jpeg";

const Images = [Image1, Image2, Image3, Image4, Image5];

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Carousel
        opts={{
          align: "start",
        }}
        className="carousel"
      >
        <div>
          <h1 className="span">Portofolio</h1>
          <div className="about-header">
            <div className="portofolio-header">

              <div className="head flex justify-between items-center">
                <div>
                  <h1 className="h1">Featured Projects</h1>
                </div>
                <div className="carousel-btn">

              <CarouselContent >
                  <CarouselPrevious />
                  <CarouselNext />
              </CarouselContent>
                </div>
              </div>
            </div>

            <div className="opacity-[.5]">
              <div className="separator"></div>
            </div>
          </div>
          <div className="">
            {/* <Carousel

            > */}
            <div className="carousel-content">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="carousel-item">
                    <div className="p-1">
                      <Image
                        alt="carousel"
                        className="carousel-img"
                        src={Images[index]}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>
            {/* </Carousel> */}
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Projects;