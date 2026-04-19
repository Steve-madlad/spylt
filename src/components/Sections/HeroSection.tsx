import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { useMediaQuery } from 'react-responsive';
import AnimatedTitle from '../AnimatedTitle';
import { Button } from '../ui/button';

export default function Hero() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

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
        {isTablet ? (
          <>
            {isMobile && (
              <img
                src="/images/hero-bg.png"
                className="absolute size-full object-cover"
                alt="spylt drinks"
              />
            )}
            <img
              src="/images/hero-img.png"
              className="abs-center-x object-auto bottom-0"
              alt="spylt drinks"
            />
          </>
        ) : (
          <video
            autoPlay
            playsInline
            muted
            className="absolute inset-0 size-full object-cover"
            src="/videos/hero-bg.mp4"
          />
        )}

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
            <AnimatedTitle
              animateDirection="ltr"
              background="mid-brown"
              border="milk-white"
              color="milk-white"
              tilt="3-ccw"
              title="Protien * Caffine"
              className="mb-8 "
            />

          <h2 className='font-paragraph text-dark-brown mt-3 max-w-sm px-5 text-center leading-[115%] md:max-w-lg md:text-lg'>
            Live life to the fullest Owith SPYLT: Shatter boredom and embrace your inner kid with
            every deliciously smooth chug.
          </h2>

          <Button className="text-dark-brown cursor bg-light-brown mt-10 rounded-full py-5! px-10 text-base md:text-lg font-bold uppercase md:mt-16 md:py-7! md:px-16">
            Chug a SPYLT
          </Button>
        </div>
      </div>
    </section>
  );
}
