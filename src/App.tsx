import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollSmoother, ScrollTrigger } from 'gsap/all';
import BenefitSection from './components/BenefitSection';
import FlavorSection from './components/FlavorsSection';
import HeroSection from './components/HeroSection';
import MessageSection from './components/MessageSection';
import Navbar from './components/Navbar';
import NutritionSection from './components/NutritionSection';

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
          <div className="bg-mid-brown h-screen overflow-hidden"></div>
        </div>
      </div>
    </main>
  );
}
