import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollSmoother, ScrollTrigger } from 'gsap/all';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import BenefitSection from './components/sections/BenefitSection.tsx';
import FlavorSection from './components/sections/FlavorsSection.tsx';
import HeroSection from './components/sections/HeroSection.tsx';
import MessageSection from './components/sections/MessageSection.tsx';
import NutritionSection from './components/sections/NutritionSection.tsx';
import TestimonialSection from './components/sections/TestimonialSection.tsx';

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
