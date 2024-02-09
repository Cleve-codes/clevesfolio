'use client'
import Home from "@/sections/Home/Home";
import About from "@/sections/About/About";
import Right from "@/sections/RightSection/Right";
import SectionsSeparator from "@/components/SectionsSeparator/SectionsSeparator";


export default function Page() {
  return (
    <main className="flex px-24 bg-[#1d1b19]">
      {/* Left Section */}
      <div className="flex flex-col min-w-[1/2]">
        <Home />
        <About />
      </div>

      {/* <Separator /> */}
      <SectionsSeparator />

      {/* Right section */}
      <Right />
    </main>
  );
}
