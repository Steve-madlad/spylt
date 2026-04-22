import { cn } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import { cva } from 'class-variance-authority';
import gsap from 'gsap';
import { useRef } from 'react';

const BORDER_VARIANTS = {
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

const BG_VARIANTS = {
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

const TEXT_VARIANTS = {
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

const THEMES = {
  'brown-white': {
    border: BORDER_VARIANTS['milk-white'],
    background: BG_VARIANTS['mid-brown'],
    color: TEXT_VARIANTS['milk-white'],
  },
};

const layoutVariants = cva('w-fit', {
  variants: {
    tilt: {
      '2-cw': 'rotate-2',
      '2-ccw': '-rotate-2',
      '3-cw': 'rotate-3',
      '3-ccw': '-rotate-3',
      '6-cw': 'rotate-6',
      '6-ccw': '-rotate-6',
    },
    padding: {
      small: 'p-[.2vw]',
      normal: 'p-[.5vw]',
    },
  },
  defaultVariants: {
    padding: 'normal',
  },
});

type ColorKey = keyof typeof BORDER_VARIANTS;
type ThemeKey = keyof typeof THEMES;

export interface AnimatedTitleProps {
  title: string;
  animateDirection: 'ltr' | 'rtl' | 'center';
  variant?: ThemeKey;
  color?: ColorKey;
  background?: ColorKey;
  border?: ColorKey;
  overrideAnimation?: boolean;
  animationEnd?: string;
  paddingSmall?: boolean;
  tilt?: '2-cw' | '2-ccw' | '3-cw' | '3-ccw' | '6-cw' | '6-ccw';
  className?: string;
  titleContainerClassName?: string;
}

const clipPathMap = {
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
  variant,
  animateDirection,
  paddingSmall = false,
  overrideAnimation = false,
  animationEnd = undefined,
  tilt,
  className,
  titleContainerClassName,
}: AnimatedTitleProps) {
  const animatedTitleRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!overrideAnimation && animatedTitleRef.current) {
      gsap.to(animatedTitleRef.current, {
        scrollTrigger: {
          trigger: animatedTitleRef.current,
          start: 'bottom 90%',
          end: animationEnd,
          toggleActions: 'play none none reverse',
        },
        ease: 'power1.inOut',
        clipPath: clipPathMap[animateDirection].open,
      });
    }
  }, [animateDirection, overrideAnimation, animationEnd]);

  const activeTheme = variant ? THEMES[variant] : null;
  const finalBorder = activeTheme ? activeTheme.border : BORDER_VARIANTS[border as ColorKey];
  const finalBg = activeTheme ? activeTheme.background : BG_VARIANTS[background as ColorKey];
  const finalColor = activeTheme ? activeTheme.color : TEXT_VARIANTS[color as ColorKey];

  return (
    <div
      ref={animatedTitleRef}
      style={{ clipPath: clipPathMap[animateDirection].close }}
      className={cn(
        layoutVariants({ padding: paddingSmall ? 'small' : 'normal', tilt }),
        finalBorder,
        className,
      )}
    >
      <div className={cn('general-title ease-in-out', finalBg)}>
        <div className={cn('px-7 pt-1 pb-4 md:pb-5 2xl:pb-7', titleContainerClassName)}>
          <h2 className={cn(finalColor, 'text-nowrap')}>{title}</h2>
        </div>
      </div>
    </div>
  );
}
