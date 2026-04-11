import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Flavors from './components/Flavors';
import Hero from './components/Hero';
import MessageSection from './components/MessageSection';
import Navbar from './components/Navbar';

gsap.registerPlugin(ScrollTrigger);
export default function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <MessageSection />
      <Flavors />
      <div className="bg-mid-brown h-screen overflow-hidden"></div>
    </main>
  );
}
