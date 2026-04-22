import { flavorlists } from '@/lib/constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function FlavorSlider() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const isTablet = useMediaQuery({ query: '(min-width: 1024px)' });
  const isSmallTablet = useMediaQuery({ query: '(min-width: 768px)' });

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

    if (isSmallTablet && !isTablet) {
      gsap.to('.flavor-title', {
        scrollTrigger: {
          trigger: '.flavor-title',
          start: 'bottom 20%',
          end: '+=500',
          pin: true,
        },
      });

      gsap.set('.carousel-wrapper', {
        x: 1800,
      });
      gsap.to('.carousel-wrapper', {
        x: `-${carouselRef.current.scrollWidth - carouselRef.current.scrollWidth / 1.75}px`,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.carousel-wrapper',
          start: '18% center',
          end: '+=500',
          scrub: true,
          pin: true,
        },
      });
    }

    const textTabletTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.flavor-section',
        start: 'top 15%',
        end: '+=200',
        scrub: true,
      },
    });

    const textSmallTabletTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.flavor-section',
        start: 'top 15%',
        end: '+=800',
        scrub: true,
      },
    });

    if (isTablet) {
      textTabletTl
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
    }

    if (isSmallTablet && !isTablet) {
      textSmallTabletTl
        .to('.first-text-split', {
          xPercent: 70,
          ease: 'power1.inOut',
        })
        .to(
          '.flavor-text-scroll',
          {
            xPercent: 50,
            ease: 'power1.inOut',
          },
          '-=0.4',
        )
        .to(
          '.second-text-split',
          {
            xPercent: -30,
            ease: 'power1.inOut',
          },
          '<',
        );
    }
  }, [isTablet, isSmallTablet]);

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
