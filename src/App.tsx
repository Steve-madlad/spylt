import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollSmoother, ScrollTrigger } from 'gsap/all';
import Navbar from './components/Navbar';
import BenefitSection from './components/Sections/BenefitSection';
import FlavorSection from './components/Sections/FlavorsSection';
import HeroSection from './components/Sections/HeroSection';
import MessageSection from './components/Sections/MessageSection';
import NutritionSection from './components/Sections/NutritionSection';
import TestimonialSection from './components/Sections/TestimonialSection';
import Footer from './components/Footer';

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
          <Footer/>
        </div>
      </div>
    </main>
  );
}
