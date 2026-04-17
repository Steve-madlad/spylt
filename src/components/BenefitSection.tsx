import AnimatedTitle, { type AnimatedTitleProps } from './AnimatedTitle';

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
    className: 'relative z-3',
    animateDirection: 'rtl',
    tilt: '2-ccw',
  },
  {
    title: 'completely recyclable',
    color: 'milk-white',
    border: 'dark-light',
    background: 'red-brown',
    className: 'relative z-2 -translate-y-2',
    animateDirection: 'center',
    tilt: '2-cw',
  },
  {
    title: 'lactose free',
    color: 'dark-light',
    border: 'dark-light',
    background: 'yellow',
    className: 'relative z-1 -translate-y-4',
    animateDirection: 'ltr',
    tilt: '3-ccw',
  },
];

export default function BenefitSection() {
  return (
    <section className="benefit-section">
      <div className="container mx-auto pt-20">
        <div className="col-full-center py-5">
          <p>
            Unlock the Advantages: <br />
            Explore the key benefits of choosing SPYLT
          </p>

          <div className="col-full-center my-20">
            {animatedTitles.map((props, idx) => (
              <AnimatedTitle key={props.title + idx} {...props} />
            ))}
          </div>

          <p>And much more...</p>
        </div>
      </div>
    </section>
  );
}
