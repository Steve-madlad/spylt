import { cards } from "@/lib/constants";

export default function TestimonialSection() {
  return(
    <section className="testimonials-section">
      <div className="absolute size-full col-center pt-[5vw] ">
        <h1 className="text-black first-title">Whats</h1>
        <h1 className="text-light-brown first-title">Everyone</h1>
        <h1 className="text-yellow first-title">Saying</h1>

        <div className="pin-box">{
          cards.map((card, index) => (
            <div></div>
          ))}
        </div>
      </div>
    </section>
  )
}