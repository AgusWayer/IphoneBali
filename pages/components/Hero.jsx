import { useEffect, useState } from "react";
import imgMobile from "../../public/iphone-mobile.png";
import useBreakpoint from "use-breakpoint";
import Link from "next/link";
const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 };
const Hero = () => {
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS, "mobile");
  const [image, setImage] = useState("/public/iphone-hero.png");
  useEffect(() => {
    if (breakpoint == "mobile") {
      return setImage("/iphone-mobile.png");
    }
    return setImage("/iphone-hero.png");
  }, [breakpoint]);

  return (
    <div className=" flex justify-center pt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-10/12 ">
        <div className="text-center md:text-start mb-4">
          <h1 className=" text-4xl md:text-8xl font-bold  mb-10">iPhone 14 Pro Max</h1>
          <Link
            href="/product/buy"
            className="dark:border-white border-black border-2 px-8 py-3 rounded-full md:text-2xl mt-10 dark:hover:bg-white text-lg dark:hover:text-black hover:bg-black hover:text-white dark:active:bg-black dark:active:text-white active:bg-white active:text-black"
          >
            BUY NOW
          </Link>
        </div>
        <div className="p-5 flex justify-center">
          <img src={image} alt="" className="w-5/6 md:w-full h-full " />
        </div>
      </div>
    </div>
  );
};

export default Hero;
