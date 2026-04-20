import { nutrientLists } from '@/lib/constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import AnimatedTitle from '../AnimatedTitle';

export default function NutritionSection() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [nutrientList, setNutrientList] = useState<Record<string, string>[]>(nutrientLists);

  useEffect(() => {
    if (isMobile) setNutrientList(nutrientLists.slice(0, 3));
    else setNutrientList(nutrientLists);
  }, [isMobile]);

  useGSAP(() => {
    const splitTitle = SplitText.create('.nutrition-title', { type: 'chars' });
    const splitparagraph = SplitText.create('.nutrient-description', { type: 'words, lines' });

    const textTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.nutrition-title',
        start: 'top 80%',
      },
    });

    textTl
      .from(splitTitle.chars, {
        stagger: 0.02,
        yPercent: 100,
        ease: 'power2.out',
      })
      .from(splitparagraph.words, {
        rotate: 3,
        yPercent: 300,
        stagger: 0.01,
        ease: 'power1.inOut',
      });

    gsap.to('.nutrition-text-scroll', {
      scrollTrigger: {
        trigger: '.nutrition-text-scroll',
        start: 'bottom bottom',
      },
      ease: 'power1.inOut',
      opacity: 1,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100% )',
    });
  });
  return (
    <section className="nutrition-section">
      <img src="/images/slider-dip.png" alt="" className="w-full object-cover" />
      <img src="/images/big-img.png" alt="" className="big-img" />

      <div className="col-center mt-14 px-5 sm:justify-between md:mt-0 md:-translate-y-10 md:flex-row! md:px-10">
        <div className="relative inline-block">
          <div className="general-title col-full-center relative gap-24">
            <div className="place-self-start overflow-hidden">
              <h1 className="nutrition-title pr-1">It still Does</h1>
            </div>

            <AnimatedTitle
              title="you good"
              color="milk-yellow"
              border="milk-white"
              background="mid-brown"
              animateDirection="ltr"
              tilt="3-ccw"
              className="nutrition-text-scroll -translate-y-2 place-self-start md:-translate-y-4 lg:translate-y-0"
              titleContainerClassName="md:text-[5rem] lg:text-[6rem] xl:text-[7.5rem] 2xl:text-[8.5rem] 2xl:pb-6! md:px-4 md:pb-3! xl:pt-4! xl:pb-8! md:pt-0! px-3 pt-0 pb-3"
              overrideAnimation
            />
          </div>
        </div>

        <div className="align-center translate-y-5 md:justify-center">
          <div className="max-w-md md:max-w-xs">
            <p className="nutrient-description paragraph-line font-paragraph text-lg text-balance md:text-right">
              Milk contains a wide array of nutrients, including vitamins, minerals, and protein,
              and this is lactose free
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
