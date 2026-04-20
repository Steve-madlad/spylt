import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive';
import AnimatedTitle, { type AnimatedTitleProps } from '../AnimatedTitle';
import VideoPinSection from '../VideoSection';
import { SplitText } from 'gsap/all';

const animatedTitles: AnimatedTitleProps[] = [
  {
    title: 'Shelf Stable',
    color: 'milk-white',
    border: 'dark-light',
    background: 'light-brown',
    className: 'relative z-4',
    animateDirection: 'ltr',
    tilt: '3-cw',
  },
  {
    title: 'Protien * Caffeine',
    color: 'dark',
    border: 'dark-light',
    background: 'milk-white',
    className: 'relative z-2',
    animateDirection: 'rtl',
    tilt: '2-ccw',
  },
  {
    title: 'completely recyclable',
    color: 'milk-white',
    border: 'dark-light',
    background: 'red-brown',
    className: 'relative z-3 -translate-y-2',
    animateDirection: 'center',
    tilt: '2-cw',
  },
  {
    title: 'lactose free',
    color: 'dark-light',
    border: 'dark-light',
    background: 'yellow',
    className: 'relative z-3 -translate-y-4',
    animateDirection: 'ltr',
    tilt: '3-ccw',
  },
];

export default function BenefitSection() {
  const isTablet = useMediaQuery({ query: '(max-width: 820px)' });

  useGSAP(() => {
    const textSplit = SplitText.create('.bottom-text', {
      type: 'words, chars',
    });

    gsap.from(textSplit.chars, {
      scrollTrigger: {
        trigger: '.bottom-text',
        start: 'top 80%',
      },
      yPercent: 200,
      rotate: 3,
      stagger: 0.02,
    });
  });

  return (
    <section className="benefit-section">
      <div className="container mx-auto pt-20">
        <div className="col-full-center py-5">
          <p>
            Unlock the Advantages: <br />
            Explore the key benefits of choosing SPYLT
          </p>

          <div className="col-full-center my-20">
            {animatedTitles.map((props, idx) => (
              <AnimatedTitle
                {...props}
                key={props.title + idx}
                animationEnd={isTablet ? 'top 20%' : undefined}
                titleContainerClassName={`${isTablet ? 'text-[3.3rem] px-7! pt-1! pb-4! leading-15 tracking-tighter' : ''}`}
              />
            ))}
          </div>

          <div className="bottom-text overflow-hidden">
            <p>And much more...</p>
          </div>
        </div>
      </div>

      <div className="overlay-box relative">
        <VideoPinSection />
      </div>
    </section>
  );
}
