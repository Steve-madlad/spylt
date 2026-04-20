import { cards } from '@/lib/constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Play, VolumeOff } from 'lucide-react';
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
    const mm = gsap.matchMedia();

    mm.add('(max-width: 768px)', () => {
      gsap.set('.testimonials-section', {
        marginTop: '0',
      });
    });
    mm.add('(min-width: 769px)', () => {
      gsap.set('.testimonials-section', {
        marginTop: '-130vh',
      });
    });

    mm.add('(min-width: 970px)', () => {
      gsap.set('.testimonials-section h1', {
        fontSize: '190px',
      });
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
      yPercent: 200,
    });
    pinTl.to('.vd-card', {
      ease: 'power1.inOut',
      stagger: 0.2,
      yPercent: -24,
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
              className={`vd-card group ${card.translation} ${card.rotation}`}
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
              <Play
                className="absolute right-4 bottom-4 opacity-0 duration-200 group-hover:opacity-100"
                fill="white"
                color="white"
                size={30}
              />
              <VolumeOff
                className="absolute bottom-4 left-4 fill-zinc-400 text-zinc-400 opacity-0 duration-200 group-hover:opacity-100"
                size={30}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
