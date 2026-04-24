import type { AnimatedTitleProps } from '@/components/AnimatedTitle';

const flavorlists = [
  {
    name: 'Chocolate Milk',
    color: 'brown',
    rotation: 'md:rotate-[-8deg] rotate-0',
  },
  {
    name: 'Stawberry Milk',
    color: 'red',
    rotation: 'md:rotate-[8deg] rotate-0',
  },
  {
    name: 'Cookies & Cream',
    color: 'blue',
    rotation: 'md:rotate-[-8deg] rotate-0',
  },
  {
    name: 'Peanut Butter Chocolate',
    color: 'orange',
    rotation: 'md:rotate-[8deg] rotate-0',
  },
  {
    name: 'Vanilla Milkshake',
    color: 'white',
    rotation: 'md:rotate-[-8deg] rotate-0',
  },
  {
    name: 'Max Chocolate Milk',
    color: 'black',
    rotation: 'md:rotate-[8deg] rotate-0',
  },
];

const animatedTitles: AnimatedTitleProps[] = [
  {
    title: 'Shelf Stable',
    color: 'milk-white',
    border: 'dark-light',
    background: 'light-brown',
    className: 'relative z-4',
    animateDirection: 'ltr',
    tilt: '3-cw',
  },
  {
    title: 'Protien * Caffeine',
    color: 'dark',
    border: 'dark-light',
    background: 'milk-white',
    className: 'relative z-2',
    animateDirection: 'rtl',
    tilt: '2-ccw',
  },
  {
    title: 'fully recyclable',
    color: 'milk-white',
    border: 'dark-light',
    background: 'red-brown',
    className: 'relative z-3 -translate-y-2',
    animateDirection: 'center',
    tilt: '2-cw',
  },
  {
    title: 'lactose free',
    color: 'dark-light',
    border: 'dark-light',
    background: 'yellow',
    className: 'relative z-3 -translate-y-4',
    animateDirection: 'ltr',
    tilt: '3-ccw',
  },
];

const nutrientLists = [
  { label: 'Potassium', amount: '245mg' },
  { label: 'Calcium', amount: '500mg' },
  { label: 'Vitamin A', amount: '176mcg' },
  { label: 'Iron', amount: '1mg' },
  { label: 'Vitamin D', amount: '5mcg' },
];

const cards = [
  {
    src: '/videos/f1.mp4',
    rotation: 'rotate-z-[-10deg]',
    name: 'Madison',
    img: '/images/p1.webp',
    translation: 'translate-y-[-5%]',
  },
  {
    src: '/videos/f2.mp4',
    rotation: 'rotate-z-[4deg]',
    name: 'Alexander',
    img: '/images/p2.webp',
  },
  {
    src: '/videos/f3.mp4',
    rotation: 'rotate-z-[-4deg]',
    name: 'Andrew',
    img: '/images/p3.webp',
    translation: 'translate-y-[-5%]',
  },
  {
    src: '/videos/f4.mp4',
    rotation: 'rotate-z-[4deg]',
    name: 'Bryan',
    img: '/images/p4.webp',
    translation: 'translate-y-[5%]',
  },
  {
    src: '/videos/f5.mp4',
    rotation: 'rotate-z-[-10deg]',
    name: 'Chris',
    img: '/images/p5.webp',
  },
  {
    src: '/videos/f6.mp4',
    rotation: 'rotate-z-[4deg]',
    name: 'Devante',
    img: '/images/p6.webp',
    translation: 'translate-y-[5%]',
  },
  {
    src: '/videos/f7.mp4',
    rotation: 'rotate-z-[-3deg]',
    name: 'Melisa',
    img: '/images/p7.webp',
    translation: 'translate-y-[10%]',
  },
];

export { animatedTitles, cards, flavorlists, nutrientLists };
