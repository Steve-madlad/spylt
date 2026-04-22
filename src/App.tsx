import { useGSAP } from '@gsap/react';
import BenefitSection from '@/components/sections/BenefitSection';
import FlavorSection from '@sections/FlavorsSection';
import HeroSection from '@sections/HeroSection';
import MessageSection from '@sections/MessageSection';
import NutritionSection from '@sections/NutritionSection';
import TestimonialSection from '@sections/TestimonialSection';
import gsap from 'gsap';
import { ScrollSmoother, ScrollTrigger } from 'gsap/all';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
export default function App() {
  // useGSAP(() => {
  //   ScrollSmoother.create({
  //     smooth: 3,
  //     effects: true,
  //   });
  // });

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
