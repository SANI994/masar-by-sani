"use client";
import About from "@/sections/About";
import Callout from "@/sections/Callout/Callout";
import FAQ from "@/sections/faq";
import Footer from "@/sections/footer";
import Goals from "@/sections/Goals";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar"
import Partners from "@/sections/Partners";
import Paths from "@/sections/Paths";
import PathsDetails from "@/sections/PathsDetails";
import Sponsers from "@/sections/sponsers";
import Timeline from "@/sections/TimeLine";
import TOC from "@/sections/toc";



export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Navbar/>
      <Hero/>
      <Sponsers/>
      <About/>
      <Goals/>
      <Paths/>
      <PathsDetails/>
      <Timeline/>
      <FAQ/>
      <TOC/>
      <Sponsers/>
      <Partners/>
      <Callout/>
      <Footer/>
    </div>
  );
}
