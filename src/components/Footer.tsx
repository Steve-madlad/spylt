import { flavorlists } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const FooterSection = () => {
  return (
    <footer className="footer-section">
      <img src="/images/footer-dip.png" alt="waving background" />
      <h2 className="text-milk text-center text-8xl font-bold tracking-tight uppercase">
        #chugresponsibly
      </h2>

      <div className="px-8 pb-5 relative">
        <div className="just-center mb-40 gap-6 pt-20">
          <Button className="cursor hover:bg-mid-brown flex-center border-milk size-15 rounded-full border bg-transparent">
            <img src="/images/tiktok.svg" alt="" />
          </Button>
          <Button className="cursor hover:bg-mid-brown flex-center border-milk size-15 rounded-full border bg-transparent">
            <img src="/images/insta.svg" alt="" />
          </Button>
          <Button className="cursor hover:bg-mid-brown flex-center border-milk size-15 rounded-full border bg-transparent">
            <img src="/images/yt.svg" alt="" />
          </Button>
        </div>

        <div className="just-between items-end">
          <div className="text-milk font-paragraph flex gap-5">
            <ul className="col gap-1">
              <li className="mb-2 font-semibold">SPYLT Flavors</li>
              {flavorlists.map((flavor) => (
                <li
                  className="col cursor hover:text-light-brown capitalize hover:underline"
                  key={flavor.name}
                >
                  {flavor.name}
                </li>
              ))}
            </ul>
            <ul className="col gap-1">
              <li className="mb-2 font-semibold">Chug Club</li>
              <li className="cursor hover:text-light-brown capitalize hover:underline">
                Join the Club
              </li>
              <li className="cursor hover:text-light-brown capitalize hover:underline">
                Rewards &amp; Perks
              </li>
              <li className="cursor hover:text-light-brown capitalize hover:underline">
                Exclusive Drops
              </li>
            </ul>
            <ul className="col gap-1">
              <li className="mb-2 font-semibold">About SPYLT</li>
              <li className="cursor hover:text-light-brown capitalize hover:underline">
                Our Story
              </li>
              <li className="cursor hover:text-light-brown capitalize hover:underline">
                Ingredients
              </li>
              <li className="cursor hover:text-light-brown capitalize hover:underline">
                Sustainability
              </li>
              <li className="cursor hover:text-light-brown capitalize hover:underline">Careers</li>
            </ul>
          </div>

          <video src="/videos/splash.mp4" className='object-cover w-full mix-blend-lighten absolute left-0 -bottom-90' playsInline autoPlay muted/>

          <div className="text-milk max-w-1/3">
            <p className="font-paragraph text-lg">
              Get Exclusive Early Access and Stay Informed About Product Updates, Events, and More!
            </p>
            <div className="border-milk group focus-within:border-light-brown -brown relative border-b-2 duration-200">
              <Input
                className="focus:placeholder:text-light-brown/40 h-auto rounded-none border-0 px-2 py-4! text-3xl! ring-0! duration-200 placeholder:text-3xl"
                placeholder="Enter Your Email"
              />
              <ArrowRight
                className="abs-center-y top group-focus-within:text-light-brown right-2 duration-200"
                type="email"
                size={30}
              />
            </div>
          </div>
        </div>

        <div className='flex-between text-milk font-paragraph mt-8 border-t border-zinc-600 pt-8'>
          <p className="font-paragraph">Copyright © {new Date().getFullYear()} Spylt - All Rights Reserved</p>

          <ul className='flex gap-4'>
            <li className='hover:text-light-brown hover:underline cursor'>Privacy Policy</li>
            <li className='hover:text-light-brown hover:underline cursor'>Terms of Service</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
