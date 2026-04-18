// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { SplitText } from 'gsap/all';
// import { Play } from 'lucide-react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Play } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';

// export default function VideoSection() {
//   useGSAP(() => {
//     const split = SplitText.create('.text-wrapper', { type: 'chars' });
//     const chars = split.chars;

//     const radius = 77;
//     const angleStep = 360 / chars.length;

//     gsap.set(chars, {
//       position: 'absolute',
//       left: '50%',
//       top: '50%',
//       xPercent: -50,
//       yPercent: -50,
//     });

//     chars.forEach((char, i) => {
//       const angle = i * angleStep;

//       gsap.set(char, {
//         rotate: angle,
//         transformOrigin: `0 ${radius}px`,
//       });
//     });

//     gsap.to('.video', {
//       scrollTrigger: {
//         trigger: '.vid-section',
//         start: 'top top',
//         end: '+=300px',
//         pin: true,
//         scrub: true,
//       },
//       clipPath: 'circle(100% at 50% 50%)'
//     })
//   });
//   return (
//     <section className="bg-main-bg vid-section relative h-dvh">
//       <div className="overlay bg-main-bg flex-center relative size-full">
//         <div className="abs-center text-container col-full-center z-1">
//           <p className="text-wrapper absolute top-0 translate-x-1.25 uppercase -translate-y-3 tracking-widest text-white">Bitch ass nigga. man</p>
//           <div className="flex-center rounded-full p-10 backdrop-blur-md">
//             <Play color="white"fill='white'/>
//           </div>
//         </div>
//         <video
//           src="/videos/pin-video.mp4"
//           style={{ clipPath: 'circle(8% at 50% 50%)' }}
//           className="size-full video object-cover"
//           muted
//           autoPlay
//           loop
//           playsInline
//         />
//       </div>
//     </section>
//   );
// }

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
          <img src="/images/circle-text.svg" alt="circle text" className="animate-spin-circle" />
          <div className="play-btn">
            <Play fill="white" color="white" className="ml-[.5vw] size-[3vw]" />
          </div>
        </div>
      </div>
    </section>
  );
}
