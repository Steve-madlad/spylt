import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

export default function MessageSection() {
  useGSAP(() => {
    const firstSplit = SplitText.create('.first-message', {
      type: 'words',
    });
    const secondSplit = SplitText.create('.second-message', {
      type: 'words',
    });
    const paragraphSlit = SplitText.create('.message-content p', {
      type: 'words, lines',
      linesClass: 'paragraph-line',
    });

    gsap.to(firstSplit.words, {
      scrollTrigger: {
        trigger: '.first-message',
        start: 'top 80%',
        end: 'bottom center',
        scrub: true,
      },
      color: 'var(--milk)',
      ease: 'power1.in',
      stagger: 0.1,
    });

    gsap.to('.msg-text-scroll', {
      scrollTrigger: {
        trigger: '.msg-text-scroll',
        start: 'top 70%',
        end: 'bottom 75%',
        scrub: true,
      },
      clipPath: 'polygon(0% 0%,100% 0%,100% 100%,0% 100%)',
      duration: 1,
      ease: 'circ.out',
    });

    gsap.to(secondSplit.words, {
      scrollTrigger: {
        trigger: '.second-message',
        start: 'top 90%',
        end: 'bottom center',
        scrub: true,
      },
      color: 'var(--milk)',
      ease: 'power1.in',
      stagger: 0.01,
    });

    gsap.from(paragraphSlit.words, {
      scrollTrigger: {
        trigger: '.message-content p',
        start: 'top bottom',
        end: 'bottom 30%',
        toggleActions: 'play pause resume reset'
      },
      yPercent: 300,
      opacity: 0,
      rotate: 3,
      ease: 'power1.out',
      stagger: 0.01,
    });
  });
  return (
    <section className="message-content">
      <div className="flex-center relative container mx-auto py-28">
        <div className="size-full">
          <div className="msg-wrapper">
            <h1 className="first-message">Stir up your fearless past and</h1>

            <div className="msg-text-scroll" style={{ clipPath: 'polygon(0 0,0 0,0 100%,0 100%)' }}>
              <div className="bg-light-brown px-5 pb-3 md:pb-5">
                <h2 className="text-red-brown">Fuel Up</h2>
              </div>
            </div>

            <h1 className="second-message">your future with every gulp of Perfect Protien</h1>
          </div>

          <div className="flex-center mt-10 md:mt-20">
            <div className="flex-center max-w-md overflow-hidden px-10">
              <p>
                Rev up your rebel spirit and feed the adventure of life with SPYLT, where you're one
                chug away from epic nostalgia and fearless fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
