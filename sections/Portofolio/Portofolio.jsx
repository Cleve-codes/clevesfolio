"use client";

import ExperiencesCard from "@/components/ui/Card";
// import Card from "@/components/ui/Card";
import HorizontalSeparator from "@/components/ui/HorizontalSeparator";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { useState, useRef, useEffect } from "react";

import "./Portofolio.css";

const Portofolio = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const [initialRender, setInitialRender] = useState(true);
  const tabRefs = {
    experience: useRef(null),
    education: useRef(null),
    skills: useRef(null),
  };

  const applyStylesToActiveTab = () => {
    Object.keys(tabRefs).forEach((tab) => {
      const isTabActive = tab === activeTab;
      const tabRef = tabRefs[tab].current;

      if (tabRef) {
        tabRef.style.color = isTabActive ? "#987750" : "inherit";
        tabRef.style.borderBottom = isTabActive ? "2px solid #987750" : "none";
        tabRef.style.marginBottom = isTabActive ? "1em" : "0";
        tabRef.classList.toggle("activeTabText", isTabActive);
      }
    });
  };

  // Use useEffect to apply styles when the activeTab state changes
  useEffect(() => {
    const setTab = applyStylesToActiveTab();
    setInitialRender(false);
  }, [activeTab]);

  useEffect(() => {
    applyStylesToActiveTab();
    setActiveTab("experience");
  }, []);

  return (
    <div className="portofolio-section">
      <div>
        <Tabs defaultValue="experience" className="tab">
          <TabsList className="flex items-center justify-between bg-inherit">
            <TabsTrigger
              ref={tabRefs.experience}
              value="experience"
              onClick={() => setActiveTab("experience")}
            >
              <span
                className={`p ${
                  activeTab === "experience" ? "activeTabText" : ""
                }`}
              >
                Experience
              </span>
            </TabsTrigger>
            <HorizontalSeparator />
            <TabsTrigger
              ref={tabRefs.education}
              value="education"
              onClick={() => setActiveTab("education")}
            >
              <span
                className={`p ${
                  activeTab === "education" ? "activeTabText" : ""
                }`}
              >
                Education
              </span>
            </TabsTrigger>
            <HorizontalSeparator />
            <TabsTrigger
              ref={tabRefs.skills}
              value="skills"
              onClick={() => setActiveTab("skills")}
            >
              <span
                className={`p ${activeTab === "skills" ? "activeTabText" : ""}`}
              >
                Skills
              </span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="experience" className="tab-content">
            {(initialRender || activeTab === "experience") && (
              <>
                <ExperiencesCard
                  company="PENDEZA ONLINE STORE"
                  date="2023 November - Today"
                  jobTitle="Sr. Frontend Developer"
                  description="I am currently working at Pendeza Online Store as the Lead Frontend Developer where
              I am responsible for the development of the company's website and also the company's mobile app"
                />

                <ExperiencesCard
                  company="SMS DIGITAL"
                  date="2024 Jan - Today "
                  jobTitle="Web Developer"
                  description="I am currently working at SMS Digital as a web developer where I work on various projects
              and also do the SEO as part of my job description"
                />

                <ExperiencesCard
                  company="ANDELA"
                  date="2023 Apr - Oct "
                  jobTitle="Intern"
                  description="Interned at Andela for 6 months where I worked on various projects and also
              learned a lot about web development and design and also got to work with a lot of experienced"
                />
              </>
            )}
          </TabsContent>

          <TabsContent value="education" className="tab-content">
            {activeTab === "education" && (
              <>
                {/* <ExperiencesCard
                  company="MURANG'A UNIVERSITY OF TECHNOLOGY"
                  date="2021 - Today"
                  jobTitle="Bsc. Computer Science"
                  description="Currently studying Computer Science at MUT, I specilize in web development and design but
               also
              have a passion for machine learning and AI and maybe later on Cyber Security"
                /> */}
                <ExperiencesCard
                  company="MURANG'A UNIVERSITY OF TECHNOLOGY"
                  date="2021 - Today"
                  jobTitle="Bsc. Computer Science"
                  description="Pursuing Bsc. Computer Science at Murang'a University of Technology since 2021, I specialize in web development and design. Beyond the code, my passion extends to machine learning, AI, and a future interest in Cyber Security."
                />

                <ExperiencesCard
                  company="SELF TAUGHT"
                  date="2020 - Today"
                  jobTitle="Web Development and Design"
                  description="Pioneer of my own coding odyssey since 2020, I've been crafting the digital realm through self-taught web development and design. Every line of code tells a story, and each project is a canvas where creativity meets functionality, my journey unfolds in the ever-evolving landscape of web development, where innovation knows no bounds."
                />

                <ExperiencesCard
                  company="THE MACHAKOS SCHOOL"
                  date="2017 - 2020"
                  jobTitle="High School Education"
                  description="Thrived at The Machakos School from 2017 to 2020, excelling in KCSE exams. Fueled by a passion for Computer Science and IT, I paved the way for my journey in university education."
                />
              </>
            )}
          </TabsContent>

          <TabsContent value="skills" className="tab-content">
            {activeTab === "skills" && (
              <>
                <div className="skills">
                  <div className="skill">
                    <Label htmlFor="design" className="skill-label">
                      UI/UX DESIGN
                    </Label>
                    <Slider
                      className="slider"
                      defaultValue={[95]}
                      max={100}
                      step={1}
                    />
                  </div>
                  <div className="skill">
                    <Label htmlFor="html" className="skill-label">
                      HTML5 & CSS3
                    </Label>
                    <Slider
                      className="slider"
                      defaultValue={[89]}
                      max={100}
                      step={1}
                    />
                  </div>
                  <div className="skill">
                    <Label htmlFor="javascript" className="skill-label">
                      JAVASCRIPT (es6)
                    </Label>
                    <Slider
                      className="slider"
                      defaultValue={[90]}
                      max={100}
                      step={1}
                    />
                  </div>
                  <div className="skill">
                    <Label htmlFor="react" className="skill-label">
                      REACT / NEXT.JS
                    </Label>
                    <Slider
                      className="slider"
                      defaultValue={[92]}
                      max={100}
                      step={1}
                    />
                  </div>
                  <div className="skill">
                    <Label htmlFor="typescript" className="skill-label">
                      TYPESCRIPT
                    </Label>
                    <Slider
                      className="slider"
                      defaultValue={[80]}
                      max={100}
                      step={1}
                    />
                  </div>
                  <div className="skill">
                    <Label htmlFor="git" className="skill-label">
                      VERSION CONTROL
                    </Label>
                    <Slider
                      className="slider"
                      defaultValue={[92]}
                      max={100}
                      step={1}
                    />
                  </div>
                </div>

                <div className="skill-desc">
                  <p className="p">
                    A creative frontend developer with a love for
                    {/* <br /> */}
                    minimal design, clean typography and well-written code,
                    {/* <br /> */}
                    located in Nairobi, Kenya. Provide high quality and cost
                    {/* <br /> */}
                    effective offshore web and software development services.
                    {/* <br /> */}
                    Wide range of web and software development services
                    {/* <br /> */}
                    across the world.
                  </p>
                </div>
              </>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Portofolio;
