"use client";
import React from "react";
import { useState, useRef, useEffect } from "react";
import "./Portofolio.css";

import ExperiencesCard from "@/components/ui/Card";
import HorizontalSeparator from "@/components/ui/HorizontalSeparator";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { experience, education, skills, tabHeaders } from "@/constants/data";

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
    <div className="portofolio-section" id="portofolio">
      <div>
        <Tabs defaultValue="experience" className="tab">
          <TabsList className="tablist">
            {tabHeaders.map((tab, index) => (
              <>
                <TabsTrigger
                  key={index}
                  ref={tabRefs[tab.value]}
                  value={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                >
                  <span
                    className={`p ${
                      activeTab === tab.value ? "activeTabText" : ""
                    }`}
                  >
                    {tab.title}
                  </span>
                </TabsTrigger>
                {index < tabHeaders.length - 1 && <HorizontalSeparator />}
              </>
            ))}
          </TabsList>
          <TabsContent value="experience" className="tab-content">
            {(initialRender || activeTab === "experience") && (
              <>
                {experience.map((exp, index) => (
                  <ExperiencesCard
                    key={index}
                    company={exp.company}
                    date={exp.date}
                    jobTitle={exp.jobTitle}
                    description={exp.description}
                  />
                ))}
              </>
            )}
          </TabsContent>

          <TabsContent value="education" className="tab-content">
            {activeTab === "education" && (
              <>
                {education.map((edu, index) => (
                  <ExperiencesCard
                    key={index}
                    company={edu.school}
                    date={edu.date}
                    jobTitle={edu.degree}
                    description={edu.description}
                  />
                ))}
              </>
            )}
          </TabsContent>

          <TabsContent value="skills" className="tab-content">
            {activeTab === "skills" && (
              <>
                <div className="skills">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill">
                      <Label htmlFor={skill} className="skill-label">
                        {skill.skill}
                      </Label>
                      <Slider
                        className="slider"
                        defaultValue={[skill.percentage]}
                        max={100}
                        step={1}
                      />
                    </div>
                  ))}
                </div>

                <div className="skill-desc">
                  <p className="p">
                    A passionate Full Stack Developer with a strong focus on
                    frontend development. I craft intuitive, high-performance
                    web solutions with clean design and efficient code. Based in
                    Nairobi, Kenya, I offer high-quality and cost-effective web
                    and software development services to clients worldwide.
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
