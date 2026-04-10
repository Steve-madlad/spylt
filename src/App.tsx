import Hero from './components/Hero';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="bg-mid-brown h-screen overflow-hidden"></div>
    </main>
  );
}
