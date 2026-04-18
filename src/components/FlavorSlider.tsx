import { flavorlists } from '@/lib/constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function FlavorSlider() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const isTablet = useMediaQuery({ query: '(min-width: 1024px)' });

  useGSAP(() => {
    if (!carouselRef.current) return;

    if (isTablet) {
      gsap.to('.flavor-section', {
        x: `-${carouselRef.current.scrollWidth - 200}px`,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.flavor-section',
          start: 'top top',
          end: '+=500',
          scrub: true,
          pin: true,
        },
      });
    }

    const textTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.flavor-section',
        start: 'top 15%',
        end: '+=200',
        scrub: true,
      },
    });

    textTl
      .to('.first-text-split', {
        xPercent: -30,
        ease: 'power1.inOut',
      })
      .to(
        '.flavor-text-scroll',
        {
          xPercent: -20,
          ease: 'power1.inOut',
        },
        '-=0.3',
      )
      .to(
        '.second-text-split',
        {
          xPercent: -10,
          ease: 'power1.inOut',
        },
        '<',
      );
  });

  return (
    <div className="carousel-wrapper">
      <div ref={carouselRef} className="flavors">
        {flavorlists.map((flavor, i) => {
          return (
            <div
              key={i}
              className={`relative z-30 h-80 w-96 flex-none md:h-[50vh] md:w-[90vh] lg:h-[70vh] lg:w-[50vw] ${flavor.rotation}`}
            >
              <img
                src={`/images/${flavor.color}-bg.svg`}
                alt={flavor.name}
                className="absolute bottom-0"
              />
              <img
                src={`/images/${flavor.color}-drink.webp`}
                alt={flavor.name}
                className="drinks"
              />
              <img
                src={`/images/${flavor.color}-elements.webp`}
                alt={flavor.name}
                className="elements"
              />

              <h1>{flavor.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
