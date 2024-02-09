import ExperiencesCard from "@/components/ui/Card";
import Card from "@/components/ui/Card";
import HorizontalSeparator from "@/components/ui/HorizontalSeparator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const Portofolio = () => {
  return (
    <div className="min-h-screen">
      <div>
        <Tabs className="w-[890px]">
          <TabsList className="flex items-center justify-between bg-inherit">
            <TabsTrigger value="experience" className="p">
              Experience
            </TabsTrigger>
            <HorizontalSeparator />
            <TabsTrigger value="education" className="p">
              Education
            </TabsTrigger>
            <HorizontalSeparator />
            <TabsTrigger value="skills" className="p">
              Skills
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
              company="SAFARICOM PLC"
              date="2022"
              jobTitle="Sr. Frontend Developer"
              description="I coded every day"
            />
          </TabsContent>
          <TabsContent value="skills" className="tab-content" >
            <ExperiencesCard
              company="FRENIFY LLC"
              date="2018"
              jobTitle="Sr. Frontend Developer"
              description="I coded every day"
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Portofolio;
