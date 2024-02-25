import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";
import Image1 from "@/public/assets/store.jpg";
import Image2 from "@/public/assets/landing.png";
import Image3 from "@/public/assets/seo.png";
import Image4 from "@/public/assets/expense.png";
import Image5 from "@/public/assets/minimalist.png";
import Image6 from "@/public/assets/geritch.png";
import CarouselImg from "@/components/ui/carouselImg";
import "./Projects.css";
import Link from "next/link";

const Images = [Image1, Image2, Image3, Image4, Image5];

const projects = [
  {
    title: 'Pendeza Online Store',
    tech: 'NextJS, TypeScript, Stripe',
    img: Image1,
    url: 'https://github.com/Cleve-codes/Pendeza-Digital-Store'
  },
  {
    title: 'Pendeza Landing Page',
    tech: 'React, TailwindCSS, GSAP',
    img: Image2,
    url: "https://wibe-studio-seven.vercel.app/",
  },
  {
    title: "SM Digital Agency",
    tech: "React, TailwindCSS",
    img: Image3,
    url: 'https://sms-seo.netlify.app/'
  },
  {
    title: "Expense Tracker App",
    tech: "React, Redux, Tailwind",
    img: Image4,
    url: 'https://react-expense-tracker-9b90o0viy-cleve-codes.vercel.app/'
  },
  {
    title: "Minimalist Portofolio",
    tech: "NextJS, TypeScript, TailwindCSS",
    img: Image5,
    url: "https://jeffsfolio.netlify.app"
  },
  {
    title: "Restaurant Landing Page",
    tech: "ReactJS, TailwindCSS",
    img: Image6,
    url: "https://simple-react-landing-page.vercel.app/"
  }
]

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
