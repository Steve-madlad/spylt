import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

export default function FlavorTitle() {
  useGSAP(() => {
    const firstTextSplit = SplitText.create('.first-text-split', {
      type: 'chars',
    });
    const secondTextSplit = SplitText.create('.second-text-split', {
      type: 'chars',
    });

    gsap.from(firstTextSplit.chars, {
      scrollTrigger: {
        trigger: '.flavor-section',
        start: 'top 30%',
      },
      yPercent: 200,
      stagger: 0.02,
      ease: 'power1.out',
    });

    gsap.to('.flavor-text-scroll', {
      scrollTrigger: {
        trigger: '.flavor-section',
        start: 'top 23%',
      },
      ease: 'power1.inOut',
      clipPath: 'polygon(0 0,100% 0,100% 100%,0 100%)',
    });

    gsap.from(secondTextSplit.chars, {
      scrollTrigger: {
        trigger: '.flavor-section',
        start: 'top 18%',
      },
      yPercent: 200,
      stagger: 0.02,
      ease: 'power1.out',
    });
  });
  return (
    <div className="general-title col-full-center h-full gap-16 xl:gap-24 2xl:gap-32">
      <div className="first-text-split overflow-hidden py-3 2xl:py-0">
        <h1>We have 6</h1>
      </div>

      <div style={{ clipPath: 'polygon(0 0,0 0,0 100%,0 100%)' }} className="flavor-text-scroll">
        <div className="bg-mid-brown px-3 pt-3 pb-5 2xl:px-5 2xl:pt-0">
          <h2 className="text-milk">Exquisitely</h2>
        </div>
      </div>

      <div className="second-text-split overflow-hidden py-3 2xl:py-0">
        <h1>Delicious Flavors</h1>
      </div>
    </div>
  );
}
