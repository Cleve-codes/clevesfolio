'use client'
import Home from "@/sections/Home/Home";
import About from "@/sections/About/About";
import Right from "@/sections/RightSection/Right";
import SectionsSeparator from "@/components/SectionsSeparator/SectionsSeparator";
import Portofolio from "@/sections/Portofolio/Portofolio";
import Projects from "@/sections/Projects/Projects";
import Services from "@/sections/Services/Services";


export default function Page() {
  return (
    <main className="flex px-24 bg-[#1d1b19]">
      {/* Left Section */}
      <div className="flex flex-col min-w-[1/2]">
        <div className="min-h-screen  w-full flex flex-row" >
          <Home />
        </div>
        <About />
        <Portofolio />
        <Projects />
        <Services />
      </div>

      {/* <Separator /> */}
      <SectionsSeparator />

      {/* Right section */}
      <Right />
    </main>
  );
}
