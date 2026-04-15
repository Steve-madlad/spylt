import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollSmoother, ScrollTrigger } from 'gsap/all';
import Flavors from './components/Flavors';
import Hero from './components/Hero';
import MessageSection from './components/MessageSection';
import Navbar from './components/Navbar';

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
          <Hero />
          <MessageSection />
          <Flavors />
          <div className="bg-mid-brown h-screen overflow-hidden"></div>
        </div>
      </div>
    </main>
  );
}
