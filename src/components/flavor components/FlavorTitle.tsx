import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import AnimatedTitle from '../AnimatedTitle';

export default function FlavorTitle() {
  useGSAP(() => {
    const firstTextSplit = SplitText.create('.first-text-split', {
      type: 'chars',
    });
    const secondTextSplit = SplitText.create('.second-text-split', {
      type: 'chars',
    });

    let mm = gsap.matchMedia();

    mm.add('(max-width: 1024px)', () => {
      gsap.from(firstTextSplit.chars, {
        scrollTrigger: {
          trigger: '.flavor-section',
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
        yPercent: 200,
        stagger: 0.02,
        ease: 'power1.out',
      });

      gsap.to('.flavor-text-scroll', {
        scrollTrigger: {
          trigger: '.flavor-section',
          start: 'top 53%',
          toggleActions: 'play none none reverse',
        },
        ease: 'power1.inOut',
        clipPath: 'polygon(0 0,100% 0,100% 100%,0 100%)',
      });

      gsap.from(secondTextSplit.chars, {
        scrollTrigger: {
          trigger: '.flavor-section',
          start: 'top 48%',
          toggleActions: 'play none none reverse',
        },
        yPercent: 200,
        stagger: 0.02,
        ease: 'power1.out',
      });
    });

    mm.add('(min-width: 1025px)', () => {
      gsap.from(firstTextSplit.chars, {
        scrollTrigger: {
          trigger: '.flavor-section',
          start: 'top 55%',
          toggleActions: 'play none none reverse',
        },
        yPercent: 200,
        stagger: 0.02,
        ease: 'power1.out',
      });

      gsap.to('.flavor-text-scroll', {
        scrollTrigger: {
          trigger: '.flavor-section',
          start: 'top 35%',
          toggleActions: 'play none none reverse',
        },
        ease: 'power1.inOut',
        clipPath: 'polygon(0 0,100% 0,100% 100%,0 100%)',
      });

      gsap.from(secondTextSplit.chars, {
        scrollTrigger: {
          trigger: '.flavor-section',
          start: 'top 28%',
          toggleActions: 'play none none reverse',
        },
        yPercent: 200,
        stagger: 0.02,
        ease: 'power1.out',
      });
    });

    return () => mm.revert();
  });

  return (
    <div className="flavor-title general-title col-full-center h-full gap-10 md:gap-24 2xl:gap-32">
      <div className="first-text-split overflow-hidden py-3 2xl:py-0">
        <h1>We have 6</h1>
      </div>

      <AnimatedTitle
        className="flavor-text-scroll"
        animateDirection="ltr"
        title="Exquisitely"
        variant="brown-white"
        overrideAnimation
        paddingSmall
      />

      <div className="second-text-split overflow-hidden py-3 2xl:py-0">
        <h1 className="pr-1 text-nowrap">Delicious Flavors</h1>
      </div>
    </div>
  );
}
