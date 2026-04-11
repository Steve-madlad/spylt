import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

export default function Hero() {
  useGSAP(() => {
    const textSplit = SplitText.create('.hero-title', {
      type: 'chars',
    });

    const tl = gsap.timeline({
      delay: 1,
    });

    tl.to('.hero-content', {
      opacity: 1,
      y: 0,
      ease: 'power1.inOut',
    })
      .to(
        '.hero-text-scroll',
        {
          clipPath: 'polygon(0% 0%,100% 0%,100% 100%,0% 100%)',
          duration: 1,
          ease: 'circ.out',
        },
        '-=0.5',
      )
      .from(
        textSplit.chars,
        {
          yPercent: 200,
          ease: 'power2.out',
          stagger: 0.02,
        },
        '-=0.7',
      );

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-container',
        start: '1% top',
        end: 'bottom top',
        scrub: true,
      },
    });

    heroTl.to('.hero-container', {
      rotate: 7,
      scale: 0.9,
      yPercent: 30,
      ease: 'power1.inOut',
    });
  });
  return (
    <section className="bg-main-bg overflow-hidden">
      <div className="hero-container">
        <img
          src="/images/hero-img.png"
          alt="hero image"
          className="abs-center-x object-auto bottom-0 scale-100 md:scale-150"
        />

        <div className="hero-content opacity-0">
          <div className="overflow-hidden">
            <h1 className="hero-title">irresistibly delicious</h1>
          </div>

          <div
            className="hero-text-scroll"
            style={{ clipPath: 'polygon(50% 0,50% 0,50% 100%,50% 100%)' }}
          >
            <div className="hero-subtitle">
              <h1>Protien * Caffine</h1>
            </div>
          </div>

          <h2>
            Live life to the fullest Owith SPYLT: Shatter boredom and embrace your inner kid with
            every deliciously smooth chug.
          </h2>

          <div className="hero-button">
            <p>Chug a SPYLT</p>
          </div>
        </div>
      </div>
    </section>
  );
}
