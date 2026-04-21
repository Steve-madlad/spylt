import { flavorlists } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const FooterSection = () => {
  return (
    <footer className="footer-section">
      <img src="/images/footer-dip.png" alt="waving background" />
      <h2 className="text-milk mt-10 text-center text-5xl font-bold tracking-tight uppercase sm:text-7xl md:mt-15 lg:mt-0 md:text-8xl">
        #chugresponsibly
      </h2>

      <div className="relative px-8 pb-5">
        <div className="just-end mb-40 gap-6 pt-20 sm:justify-center!">
          <Button className="cursor hover:bg-mid-brown flex-center border-milk size-15 rounded-full border bg-transparent">
            <img src="/images/tiktok.svg" alt="tiktok" />
          </Button>
          <Button className="cursor hover:bg-mid-brown flex-center border-milk size-15 rounded-full border bg-transparent">
            <img src="/images/insta.svg" alt="instagram" />
          </Button>
          <Button className="cursor hover:bg-mid-brown flex-center border-milk size-15 rounded-full border bg-transparent">
            <img src="/images/yt.svg" alt="youtube" />
          </Button>
        </div>

        <div className="col gap-15 lg:flex-row! lg:items-end lg:justify-between lg:gap-0">
          <div className="text-milk font-paragraph just-between gap-5 sm:justify-normal!">
            <ul className="col gap-1">
              <li className="text-light-brown mb-2 font-semibold">SPYLT Flavors</li>
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
              <li className="text-light-brown mb-2 font-semibold">Chug Club</li>
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
              <li className="text-light-brown mb-2 font-semibold">About SPYLT</li>
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

          <video
            src="/videos/splash.mp4"
            className="pointer-events-none absolute right-0 bottom-27 hidden w-2/3 object-cover mix-blend-lighten md:block lg:-bottom-30 lg:left-0 lg:w-full lg:scale-100 xl:-bottom-90"
            playsInline
            autoPlay
            muted
          />
          <img
            className="pointer-events-none absolute top-0 block w-1/2 max-w-64.25 object-cover sm:top-40 sm:right-4 sm:max-w-max sm:-scale-x-[1] md:hidden"
            src="/images/footer-drink.png"
            alt="spylt drink"
          />

          <div className="text-milk lg:max-w-1/3">
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

        <div className="text-milk font-paragraph col mt-8 flex gap-5 border-t border-zinc-600 pt-8 sm:flex-row! sm:justify-between">
          <p className="font-paragraph">
            Copyright © {new Date().getFullYear()} Spylt - All Rights Reserved
          </p>

          <ul className="flex gap-4">
            <li className="hover:text-light-brown cursor hover:underline">Privacy Policy</li>
            <b className="sm:hidden">•</b>
            <li className="hover:text-light-brown cursor hover:underline">Terms of Service</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
