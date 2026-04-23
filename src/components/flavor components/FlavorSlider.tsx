import { flavorlists } from '@/lib/constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function FlavorSlider() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  useGSAP(() => {
    if (!carouselRef.current) return;

    if (isDesktop) {
      const horizontalTween = gsap.to('.flavor-section', {
        x: `-${carouselRef.current.scrollWidth - 200}px`,
        ease: 'none',
        scrollTrigger: {
          trigger: '.flavor-section',
          start: 'top top',
          end: '+=3000',
          scrub: true,
          pin: true,
        },
      });

      gsap.utils.toArray('.card').forEach((card: any) => {
        const elementImg = card.querySelector('.elements');
        const drinksImg = card.querySelector('.drinks');

        if (elementImg) {
          gsap.fromTo(
            elementImg,
            { y: 0 },
            {
              y: -40,
              x: -30,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                containerAnimation: horizontalTween,
                start: 'left 100%',
                end: 'left 0%',
                scrub: true,
              },
            },
          );
        }

        if (drinksImg) {
          gsap.fromTo(
            drinksImg,
            { y: 20, x: '-50%' },
            {
              y: 0,
              x: '-70%',
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                containerAnimation: horizontalTween,
                start: 'left 100%',
                end: 'left 0%',
                scrub: true,
              },
            },
          );
        }
      });
    }

    if (isTablet && !isDesktop) {
      const textTabletTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.flavor-section',
          start: 'top 15%',
          end: '+=800',
          scrub: true,
        },
      });

      textTabletTl
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

      gsap.to('.flavor-title', {
        scrollTrigger: {
          trigger: '.flavor-title',
          start: 'bottom 20%',
          end: '+=3000',
          pin: true,
        },
      });

      gsap.set('.carousel-wrapper', {
        x: 1800,
      });
      const horizontalTween = gsap.to('.carousel-wrapper', {
        x: `-${carouselRef.current.scrollWidth - carouselRef.current.scrollWidth / 1.75}px`,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.carousel-wrapper',
          start: '18% center',
          end: '+=3000',
          scrub: true,
          pin: true,
        },
      });

      gsap.utils.toArray('.card').forEach((card: any) => {
        const elementImg = card.querySelector('.elements');
        const drinksImg = card.querySelector('.drinks');

        if (elementImg) {
          gsap.fromTo(
            elementImg,
            { y: 0 },
            {
              y: -50,
              x: -40,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                containerAnimation: horizontalTween,
                start: 'left 140%',
                markers: true,
                end: 'left -50%',
                scrub: true,
              },
            },
          );
        }

        if (drinksImg) {
          gsap.fromTo(
            drinksImg,
            { y: 30, x: '-50%' },
            {
              y: 0,
              x: '-70%',
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                containerAnimation: horizontalTween,
                start: 'left 140%',
                end: 'left -50%',
                scrub: true,
              },
            },
          );
        }
      });
    }

    const textDesktopTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.flavor-section',
        start: 'top 15%',
        end: '+=200',
        scrub: true,
      },
    });

    if (isDesktop) {
      textDesktopTl
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

    if (isMobile) {
      gsap.to('.carousel-wrapper', {
        scrollTrigger: {
          trigger: '.carousel-wrapper',
          start: 'top bottom',
          toggleActions: 'play none none reverse',
        },
        duration: 1,
        y: -60,
        ease: 'power1.inOut',
      });

      gsap.utils.toArray('.card').forEach((card: any) => {
        const elementImg = card.querySelector('.elements');
        const drinksImg = card.querySelector('.drinks');

        if (elementImg) {
          gsap.fromTo(
            elementImg,
            { y: 40 },
            {
              scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                scrub: true,
              },
              ease: 'none',
              y: -40,
            },
          );
        }

        if (drinksImg) {
          gsap.fromTo(
            drinksImg,
            {
              y: 40,
              x: '-35%',
            },
            {
              scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                scrub: true,
              },
              ease: 'none',
              y: 0,
              x: '-50%',
            },
          );
        }
      });
    }
  }, [isDesktop, isTablet, isMobile]);

  return (
    <div className="carousel-wrapper">
      <div ref={carouselRef} className="flavors">
        {flavorlists.map((flavor, i) => {
          return (
            <div
              key={i}
              className={`card relative z-30 h-80 max-w-136.5 md:max-w-6xl w-[90vw] flex-none md:h-[50vh] md:w-[90vh] lg:h-[70vh] lg:w-[50vw] ${flavor.rotation}`}
            >
              <img
                src={`/images/${flavor.color}-bg.svg`}
                alt={flavor.name}
                className="absolute bottom-0"
              />
              <div className="relative size-full overflow-hidden">
                <img
                  src={`/images/${flavor.color}-drink.webp`}
                  alt={flavor.name}
                  className="drinks"
                />
              </div>
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
