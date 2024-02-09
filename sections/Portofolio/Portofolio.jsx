'use client'

import ExperiencesCard from "@/components/ui/Card";
// import Card from "@/components/ui/Card";
import HorizontalSeparator from "@/components/ui/HorizontalSeparator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { useState, useRef, useEffect } from "react";


const Portofolio = () => {

  const [activeTab, setActiveTab] = useState("experience");
  const tabRefs = {
    experience: useRef(null),
    education: useRef(null),
    skills: useRef(null),
  };

  const applyStylesToActiveTab = () => {
    Object.keys(tabRefs).forEach(tab => {
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
  //  setTab();
  }, [activeTab]);




  return (
    <div className="min-h-screen">
      <div>
        <Tabs className="w-[890px]">
          <TabsList className="flex items-center justify-between bg-inherit">
            <TabsTrigger ref={tabRefs.experience} value="experience" onClick={() => setActiveTab("experience")} >
              <span className={`p ${activeTab === "experience" ? "activeTabText" : ""}`}>
                Experience
              </span>
            </TabsTrigger>
            <HorizontalSeparator />
            <TabsTrigger ref={tabRefs.education} value="education" onClick={() => setActiveTab("education")} >
            <span className={`p ${activeTab === "education" ? "activeTabText" : ""}`}>Education</span>
            </TabsTrigger>
            <HorizontalSeparator />
            <TabsTrigger ref={tabRefs.skills} value="skills" onClick={() => setActiveTab("skills")}>
              <span className={`p ${activeTab === "skills" ? "activeTabText" : ""}`}>Skills</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="experience" className="tab-content">
            <ExperiencesCard
              company="FRENIFY LLC"
              date="2018 - Today"
              jobTitle="Sr. Frontend Developer"
              description="I coded every day"
            />

            <ExperiencesCard
              company="FRENIFY LLC"
              date="2018"
              jobTitle="Sr. Frontend Developer"
              description="I coded every day"
            />

            <ExperiencesCard
              company="FRENIFY LLC"
              date="2018"
              jobTitle="Sr. Frontend Developer"
              description="I coded every day"
            />
          </TabsContent>
          <TabsContent value="education" className='tab-content'>
            <ExperiencesCard
              company="MURANG'A UNIVERSITY OF TECHNOLOGY"
              date="2021 - Today"
              jobTitle="Bsc. Computer Science"
              description="Currently studying Computer Science at MUT, I specilize in web development and design but
               also
              have a passion for machine learning and AI and maybe later on Cyber Security"
            />
            <ExperiencesCard
              company="THE MACHAKOS SCHOOL"
              date="2017 - 2020"
              jobTitle="High School Education"
              description="I attended my highschool education at The Machakos School where
              I passed well in my KCSE exams and with my passion for Computer Science and IT,
              I decided to pursue it in my university education"
            />
            <ExperiencesCard
              company="PLAINSVIEW PRI. SCHOOL"
              date="2010 - 2016"
              jobTitle="Primary School Education"
              description="I studied at The Machakos School for my high school education,
              I passed well in my KCSE exams and with my passion for Computer Science and IT,
              I decided to pursue it in my university education"
            />
          </TabsContent>
          <TabsContent value="skills" className="tab-content" >
            <ExperiencesCard
              company="THE MACHAKOS SCHOOL"
              date="2017 - 2020"
              jobTitle="High School Education"
              description="I studied at The Machakos School for my high school education,
              I passed well in my KCSE exams and with my passion for Computer Science and IT,
              I decided to pursue it in my university education"
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Portofolio;
