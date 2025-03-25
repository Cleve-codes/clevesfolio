import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import CarouselImg from "@/components/ui/carouselImg";
import ViewMoreCard from "@/components/ui/ViewMoreCard";
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
          <div className="carousel-wrapper">
            <div className="carousel-content">
              <CarouselContent className="carousel-inner-content">
                {projects.map((project, index) => (
                  <CarouselItem key={index} className="carousel-item">
                    {project.isViewMore ? (
                      <Link href={project.url} target="_blank" style={{ width: '100%', display: 'block' }}>
                        <ViewMoreCard url={project.url} />
                      </Link>
                    ) : (
                      <Link href={project.url} target="_blank" style={{ width: '100%', display: 'block' }}>
                        <CarouselImg img={project.img} tech={project.tech} title={project.title} />
                      </Link>
                    )}
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Projects;
