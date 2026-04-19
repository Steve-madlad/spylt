import { cards } from '@/lib/constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export default function TestimonialSection() {
  const vidRef = useRef<HTMLVideoElement[]>([]);

  const handlePlay = (index: number) => {
    vidRef.current[index]?.play();
  };

  const handlePause = (index: number) => {
    vidRef.current[index]?.pause();
  };

  useGSAP(() => {
    gsap.set('.testimonials-section', {
      marginTop: '-130vh',
    });

    const titlesTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.testimonials-section',
        start: '-65% bottom',
        end: '200% top',
        scrub: true,
      },
    });
    titlesTl.to(
      '.first-title',
      {
        ease: 'power1.inOut',
        xPercent: 70,
      },
      0,
    );
    titlesTl.to(
      '.second-title',
      {
        ease: 'power1.inOut',
        xPercent: 10,
      },
      0,
    );
    titlesTl.to(
      '.third-title',
      {
        ease: 'power1.inOut',
        xPercent: -50,
      },
      0,
    );

    const pinTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.testimonials-section',
        start: 'top top',
        end: '200% top',
        scrub: true,
        pin: true,
      },
    });

    pinTl.set('.vd-card', {
      yPercent: 200
    })
    pinTl.to('.vd-card', {
      ease: 'power1.inOut',
      stagger: 0.2,
      yPercent: -18,
    });
  });

  return (
    <section className="testimonials-section">
      <div className="col-center absolute size-full pt-[5vw]">
        <h1 className="first-title text-black">What's</h1>
        <h1 className="text-light-brown second-title">Everyone</h1>
        <h1 className="text-red-brown third-title">Saying?</h1>

        <div className="pin-box">
          {cards.map((card, index) => (
            <div
              onMouseOver={() => handlePlay(index)}
              onMouseLeave={() => handlePause(index)}
              key={index}
              className={`vd-card ${card.translation} ${card.rotation}`}
            >
              <video
                ref={(el) => {
                  if (el) vidRef.current[index] = el;
                }}
                src={card.src}
                className="size-full object-cover"
                muted
                playsInline
                loop
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
