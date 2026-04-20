import FlavorSlider from '../FlavorSlider';
import FlavorTitle from '../FlavorTitle';

export default function FlavorSection() {
  return (
    <section className="flavor-section">
      <div className="col-center relative h-full gap-17 md:gap-30 lg:grow lg:flex-row! lg:gap-17">
        <div className="h-80 flex-none md:mt-20 lg:mt-0 lg:h-full lg:w-[57%]">
          <FlavorTitle />
        </div>
        <div className="h-full">
          <FlavorSlider />
        </div>
      </div>
    </section>
  );
}
