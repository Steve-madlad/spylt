import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollSmoother, ScrollTrigger } from 'gsap/all';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import BenefitSection from  '@comps/sections/BenefitSection'
import FlavorSection from '@comps/sections/FlavorsSection';
import HeroSection from '@comps/sections/HeroSection';
import MessageSection from '@comps/sections/MessageSection';
import NutritionSection from '@comps/sections/NutritionSection';
import TestimonialSection from '@comps/sections/TestimonialSection';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
export default function App() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return (
    <main>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavorSection />
          <NutritionSection />
          <BenefitSection />
          <TestimonialSection />
          <Footer />
        </div>
      </div>
    </main>
  );
}
