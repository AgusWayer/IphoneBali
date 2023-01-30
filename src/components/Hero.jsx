import { useEffect, useState } from "react";
import { heroProduct } from "../data/index";

import Link from "next/link";

const Hero = ({ breakpoint }) => {
  const [image, setImage] = useState("");
  const [int, setInt] = useState(0);
  const [caption, setCaption] = useState(" ");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setInt(int + 1);
    }, 8000);
    return () => clearInterval(intervalId);
  }, [int]);

  useEffect(() => {
    if (int > 2) {
      setInt(0);
    } else {
      const handleImage = () => {
        setImage(heroProduct[int].img);
        setCaption(heroProduct[int].title);
      };
      handleImage();
    }
  }, [int]);
  useEffect(() => {
    if (image == "/iphone-hero.png") {
      if (breakpoint == "mobile") {
        return setImage("/iphone-mobile.png");
      }
      return setImage("/iphone-hero.png");
    }
    console.log(breakpoint);
  }, [breakpoint, image]);

  return (
    <div className=" flex justify-center pt-12  md:h-screen overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-10/12 ">
        <div className="text-center md:text-start mb-4 md:h-screen">
          <div className="h-3/6 md:h-2/6 overflow-hidden">
            <h1 className=" text-4xl md:text-8xl font-bold  mb-10 animate-fading px-5 md:px-0">{caption}</h1>
          </div>
          <div className="h-3/6  pt-5">
            <Link
              href="/product/buy"
              className="dark:border-white border-black border-2 px-8 py-3 rounded-full md:text-2xl mt-10 dark:hover:bg-white text-lg dark:hover:text-black hover:bg-black hover:text-white dark:active:bg-black dark:active:text-white active:bg-white active:text-black z-10"
            >
              BUY NOW
            </Link>
          </div>
        </div>
        <div className="p-5 flex justify-center h-96 md:h-fit animate-fading">
          <img src={image} alt="" className="w-5/6 md:w-full h-fit md:h-full " />
        </div>
      </div>
    </div>
  );
};

export default Hero;
