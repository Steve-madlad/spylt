import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollSmoother, SplitText } from 'gsap/all';
import { useMediaQuery } from 'react-responsive';
import AnimatedTitle from '../AnimatedTitle';
import { Button } from '../ui/button';

export default function Hero() {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

  useGSAP(() => {
    const textSplit = SplitText.create('.hero-title', {
      type: 'chars',
    });

    const tl = gsap.timeline({
      delay: isTablet ? 0.4 : 1.2,
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

    gsap.to('.background-image', {
      scrollTrigger: {
        trigger: '.hero-container',
        start: '1% top',
        end: 'bottom top',
        scrub: true,
      },
      delay: 2,
      yPercent: -40,
      ease: 'power1.inOut',
    });
  });
  return (
    <section className="bg-main-bg ">
      <div className="hero-container">
        {isTablet ? (
          <>
            <img
              src="/images/optimized/hero-bg.webp"
              className="background-image absolute size-full sm:size-[120%] object-cover"
              alt="spylt drinks"
            />

            <img
              src="/images/optimized/hero-img.webp"
              className="abs-center-x object-auto bottom-0"
              alt="spylt drinks"
              fetchPriority="high"
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

          <AnimatedTitle
            animateDirection="center"
            variant="brown-white"
            tilt="3-ccw"
            title="Protien * Caffine"
            className="hero-text-scroll mb-8"
            paddingSmall
            overrideAnimation
          />

          <h2 className="font-paragraph text-dark-brown mt-3 max-w-sm px-5 text-center leading-[115%] md:max-w-lg md:text-lg">
            Live life to the fullest Owith SPYLT: Shatter boredom and embrace your inner kid with
            every deliciously smooth chug.
          </h2>

          <Button
            onClick={(e) => {
              e.preventDefault();
              ScrollSmoother.get()?.scrollTo('#message', true);
            }}
            className="text-dark-brown cursor bg-light-brown! mt-10 rounded-full px-10 py-5! text-base font-bold uppercase md:mt-16 md:px-16 md:py-7! md:text-lg"
          >
            Chug a SPYLT
          </Button>
        </div>
      </div>
    </section>
  );
}
