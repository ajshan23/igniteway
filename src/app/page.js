
import About from "@/components/About/About";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/Hero";
import SubHero from "@/components/hero/SubHero";
import Navbar from "@/components/Navbar/Navbar";

import Offer from "@/components/Offers/Offer";
import { AnimatedTestimonialsDemo } from "@/components/pre/Pre";
import Scroll from "@/components/scroller/Scroll";
import Service from "@/components/services/Service";
import Show from "@/components/show/Show";
import TestiMonial from "@/components/testimonials/TestiMonial";
import dynamic from "next/dynamic";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
    <Navbar/>
      <Hero id="Home"/>
      
      <div className="w-full flex justify-center" id="About">
        <About />
      </div>
      <div id="Projects">
        <Show />
        </div>
        {/* <SubHero /> */}
        <Scroll />
        {/* <Service /> */}
        <AnimatedTestimonialsDemo />
      <TestiMonial />
      <Offer />
      <div className="mt-auto" id="Contact">
        <Footer />
      </div>
    </div>
  );
}
