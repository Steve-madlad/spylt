import FlavorSlider from './FlavorSlider';
import FlavorTitle from './FlavorTitle';

export default function FlavorSection() {
  return (
    <section className="flavor-section">
      <div className="col-center relative h-full lg:grow lg:flex-row! gap-20">
        <div className="h-80 flex-none md:mt-20 lg:h-full lg:w-[57%] xl:mt-0">
          <FlavorTitle />
        </div>
        <div className="h-full">
          <FlavorSlider />
        </div>
      </div>
    </section>
  );
}
