import { cn } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

type ColorVariants =
  | 'dark'
  | 'dark-light'
  | 'dark-brown'
  | 'mid-brown'
  | 'light-brown'
  | 'red-brown'
  | 'milk-white'
  | 'milk-yellow'
  | 'yellow';

type TiltOptions = '2-cw' | '2-ccw' | '3-cw' | '3-ccw' | '6-cw' | '6-ccw';
type AnimateDirection = 'ltr' | 'rtl' | 'center';

export interface AnimatedTitleProps {
  title: string;
  color: ColorVariants;
  background: ColorVariants;
  border: ColorVariants;
  animateDirection: AnimateDirection;
  overrideAnimation?: boolean;
  paddingSmall?: boolean;
  tilt?: TiltOptions;
  className?: string;
}

const tiltMap: Record<TiltOptions, string> = {
  '2-cw': 'rotate-2',
  '2-ccw': '-rotate-2',
  '3-cw': 'rotate-3',
  '3-ccw': '-rotate-3',
  '6-cw': 'rotate-6',
  '6-ccw': '-rotate-6',
};

const backgroundVariantClasses: Record<ColorVariants, string> = {
  dark: 'bg-black',
  'dark-light': 'bg-main-bg',
  'dark-brown': 'bg-dark-brown',
  'mid-brown': 'bg-mid-brown',
  'light-brown': 'bg-light-brown',
  'red-brown': 'bg-red-brown',
  'milk-white': 'bg-milk',
  'milk-yellow': 'bg-milk-yellow',
  yellow: 'bg-yellow',
};

const colorVariantClasses: Record<ColorVariants, string> = {
  dark: 'text-black',
  'dark-light': 'text-main-bg',
  'dark-brown': 'text-dark-brown',
  'mid-brown': 'text-mid-brown',
  'light-brown': 'text-light-brown',
  'red-brown': 'text-red-brown',
  'milk-white': 'text-milk',
  'milk-yellow': 'text-milk-yellow',
  yellow: 'text-yellow',
};

const clipPathMap: Record<AnimateDirection, Record<'open' | 'close', string>> = {
  ltr: {
    open: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    close: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
  },
  rtl: {
    open: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    close: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
  },
  center: {
    open: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    close: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
  },
};

export default function AnimatedTitle({
  title,
  color,
  background,
  border,
  animateDirection,
  paddingSmall = false,
  overrideAnimation = false,
  tilt,
  className,
}: AnimatedTitleProps) {
  const animatedTitleRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!overrideAnimation) {
      gsap.to(animatedTitleRef.current, {
        scrollTrigger: {
          trigger: animatedTitleRef.current,
          start: 'bottom 90%',
          toggleActions: 'play reverse complete reverse',
        },
        ease: 'power1.inOut',
        clipPath: clipPathMap[animateDirection].open,
      });
    }
  });
  return (
    <div
      ref={animatedTitleRef}
      style={{
        clipPath: clipPathMap[animateDirection].close,
      }}
      className={cn(
        paddingSmall ? 'p-[.2vw]' : 'p-[.5vw]',
        backgroundVariantClasses[border],
        tilt && tiltMap[tilt],
        className,
      )}
    >
      <div className={cn(`general-title ease-in-out`, backgroundVariantClasses[background])}>
        <div className="px-7 pt-1 pb-4 md:pb-5 2xl:pb-7">
          <h2 className={cn(colorVariantClasses[color], 'text-nowrap')}>{title}</h2>
        </div>
      </div>
    </div>
  );
}
