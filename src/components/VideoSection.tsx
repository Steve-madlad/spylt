import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive';

export default function VideoSection() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useGSAP(() => {
    if (!isMobile) {
      gsap.to('.video-box', {
        scrollTrigger: {
          trigger: '.vd-pin-section',
          start: '-10% top',
          end: '200% top',
          scrub: 1.5,
          pin: true,
        },
        ease: 'power1.inOut',
        clipPath: 'circle(75% at 50% 50%)',
      });
    } else {
      gsap.set('.video-box', { clipPath: 'circle(100% at 50% 50%)' });
    }
  });
  return (
    <section className="vd-pin-section h-dvh">
      <div className="video-box size-full" style={{ clipPath: 'circle(6% at 50% 50%)' }}>
        <video src="/videos/pin-video.mp4" muted loop autoPlay playsInline />
        <div className="abs-center scale-200 md:scale-100">
          <img
            src="/images/chug-spylt.webp"
            alt="circle text"
            className="animate-spin-circle"
          />
          <div className="play-btn">
            <img
              width={80}
              height={80}
              src="/images/spylt-drink.webp"
              alt="soda"
              className="size-[5vw]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
