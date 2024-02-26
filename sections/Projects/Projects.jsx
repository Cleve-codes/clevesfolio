import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import CarouselImg from "@/components/ui/carouselImg";
import "./Projects.css";
import Link from "next/link";

import { projects } from "@/constants/data";

const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
          dragThreshold: 2,
          watchDrag: true,
        }}
        className="projects-carousel"
      >
        <div>
          <h1 className="span">Portofolio</h1>
          <div className="about-header">
            <div className="portofolio-header">

              <div className="head">
                <div className="projects-header">
                  <h1 className="h1">Featured Projects</h1>
                </div>
                <div>

              <CarouselContent className="carousel-btn">
                  <CarouselPrevious variant='ghost' />
                  <CarouselNext variant="ghost" />
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
                {projects.map((project, index) => (
                  <CarouselItem key={index} className="carousel-item">
                    <Link href={project.url} target="_blank" >
                    <CarouselImg img={project.img} tech={project.tech} title={project.title} />
                    </Link>
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
