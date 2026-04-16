import { nutrientLists } from '@/lib/constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

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
        trigger: '.nutrition-section',
        start: 'top 15%',
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

      <div className="col-between mt-14 px-5 md:mt-0 md:flex-row! md:px-10">
        <div className="relative inline-block md:translate-y-20">
          <div className="general-title col-full-center relative gap-24">
            <div className="place-self-start overflow-hidden">
              <h1 className="nutrition-title">It still Does</h1>
            </div>

            <div
              style={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100% )' }}
              className="nutrition-text-scroll place-self-start"
            >
              <div className="bg-yellow-brown inline-block px-3 pt-3 pb-5 md:px-5 md:pt-0">
                <h2 className="text-milk-yellow">you good</h2>
              </div>
            </div>
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

        <div className="nutrition-box">
          <div className="list-wrapper">
            {nutrientList.map((nutrient, index) => (
              <div key={index} className="col-full-center relative flex-1">
                <div>
                  <p className="font-paragraph md:text-lg">{nutrient.label}</p>
                  <p className="font-paragraph mt-2 text-sm">up to</p>
                  <p className="text-2xl font-bold tracking-tighter md:text-4xl">
                    {nutrient.amount}
                  </p>
                </div>

                {index !== nutrientList.length - 1 && <div className="spacer-border"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
