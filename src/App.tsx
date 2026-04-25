import BenefitSection from '@/components/sections/BenefitSection';
import { useGSAP } from '@gsap/react';
import FlavorSection from '@sections/FlavorsSection';
import HeroSection from '@sections/HeroSection';
import MessageSection from '@sections/MessageSection';
import NutritionSection from '@sections/NutritionSection';
import TestimonialSection from '@sections/TestimonialSection';
import gsap from 'gsap';
import { ScrollSmoother, ScrollTrigger } from 'gsap/all';
import { useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
export default function App() {
  const [isFinished, setIsFinished] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const smoother = useRef<ScrollSmoother>(null);

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useGSAP(() => {
    ScrollTrigger.config({
      ignoreMobileResize: true,
    });

    if (ScrollTrigger.isTouch === 1) {
      ScrollTrigger.normalizeScroll(true);
    }

    smoother.current = ScrollSmoother.create({
      smooth: isMobile ? 2.5 : 3,
      effects: true,
      smoothTouch: false,
    });

    smoother.current.paused(true);

    const criticalAssets = isMobile
      ? ['/images/hero-bg.webp', '/images/hero-img.webp']
      : ['/videos/hero-bg.mp4'];

    let loadedCount = 0;
    const total = criticalAssets.length;
    const progressProxy = { value: 0 };

    const updateProgress = () => {
      loadedCount++;
      const targetPercent = Math.round((loadedCount / total) * 100);

      if (loadedCount === total) {
        setIsFinished(true);
      }

      gsap.to(progressProxy, {
        value: targetPercent,
        duration: 0.8,
        ease: 'power1.out',
        onUpdate: () => {
          const currentPercent = Math.round(progressProxy.value);
          setPercentage(currentPercent);

          gsap.set('#progress-bar', { width: `${currentPercent}%` });
        },
        onComplete: () => {
          if (loadedCount === total) {
            handleExit();
          }
        },
      });
    };

    const handleExit = () => {
      const tl = gsap.timeline({
        onComplete: () => {
          smoother.current?.paused(false);
        },
      });

      tl.to('#splash-screen', {
        yPercent: -100,
        y: -150,
        delay: 0.2,
        duration: 1.2,
        ease: 'sine.inOut',
      }).set('#splash-screen', {
        display: 'none',
      });
    };

    criticalAssets.forEach((url) => {
      if (url.endsWith('.mp4')) {
        const v = document.createElement('video');
        v.src = url;
        v.oncanplaythrough = updateProgress;
        v.load();
      } else {
        const img = new Image();
        img.src = url;
        img.onload = updateProgress;
        img.onerror = updateProgress;
      }
    });
  }, [isMobile]);

  return (
    <main>
      <div id="splash-screen" className="col fixed top-0 z-100 flex w-full">
        <div className="bg-red-brown col-full-center h-screen gap-2">
          <img
            src="/images/splash-logo.svg"
            width={200}
            height={120}
            className="w-50"
            alt="spylt logo"
          />

          <p className="text-milk text-4xl font-bold uppercase">{percentage}%</p>
          <div className="bg-milk/20 h-2 w-60 overflow-hidden rounded-full">
            <div className="bg-milk h-full w-0" id="progress-bar"></div>
          </div>
        </div>
        <img
          className="h-37.5 w-full"
          width={1400}
          height={150}
          src="/images/splash-dip.png"
          alt="wavy background"
        />
      </div>

      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection isReady={isFinished} />
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
