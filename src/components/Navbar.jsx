import { useEffect, useState } from "react";
import { topbarContents } from "../data/index";
import Link from "next/link";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { HiSearch } from "react-icons/hi";
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import { BsFillPersonFill, BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
const scrolledClass = "fixed top-0 z-10 bg-white  dark:bg-black ";
const unScrolledClass = "relative md:mt-5";
const Navbar = ({ dark, setDark, handleDark }) => {
  const [offCanvas, setOffCanvas] = useState(false);
  const [scroll, setScroll] = useState(false);
  const handleOffCanvas = () => {
    setOffCanvas((prev) => !prev);
  };
  const handleCloseOffcanvas = () => {
    setOffCanvas((prev) => !prev);
  };
  useEffect(() => {
    const scrolling = () => {
      if (scrollY > 30) {
        return setScroll(true);
      }
      return setScroll(false);
    };
    window.addEventListener("scroll", scrolling);
  }, [scroll]);

  return (
    <div className={` flex justify-center  shadow-md md:shadow-none md:border-0 dark:text-white transition-all ${scroll ? scrolledClass : unScrolledClass} w-full`}>
      <div className={`w-full  md:w-10/12  pb-3 flex justify-between py-4 md:border-b-4 md:border-b-black md:dark:border-b-white mx-4  items-center`}>
        <div className="text-4xl md:hidden cursor-pointer ">
          <HiBars3BottomLeft onClick={handleOffCanvas} />
        </div>
        <div className="md:mx-2 ">
          <Link href="/" className="text-2xl sm:text-3xl">
            iPhoneBali
          </Link>
        </div>
        <div className="flex text-3xl  ">
          <Link href="/content/sercha" className="hover:text-4xl transition-all mx-3 hidden md:block">
            <HiSearch />
          </Link>
          <Link href="/content/shopping" className="hover:text-4xl transition-all mx-3 hidden md:block">
            <AiOutlineShoppingCart />
          </Link>
          <Link href="/account/login" className="hover:text-4xl transition-all mx-3 hidden md:block">
            <BsFillPersonFill />
          </Link>
          <div className="md:hidden cursor-pointer">{dark ? <BsFillSunFill onClick={handleDark} /> : <BsFillMoonFill onClick={handleDark} />}</div>
        </div>
      </div>

      <div className={`absolute top-0 ${offCanvas ? "-translate-x-[15%] " : "-translate-x-[999px]"} w-4/5 md:hidden bg-white dark:bg-black shadow-lg min-h-screenz transition-all p-2 z-10`}>
        <div className="p-4">
          <div className="flex justify-between items-center border-b-2 border-black dark:border-white pb-3">
            <h1 className="text-xl sm:text-2xl ">Menu</h1>
            <AiOutlineClose onClick={handleCloseOffcanvas} className="text-2xl cursor-pointer" />
          </div>
          <div className="mt-5">
            <ul>
              {topbarContents.map((content) => (
                <Link href={content.url} key={content.title} className="capitalize my-5 text-md sm:text-xl flex justify-between ">
                  <span>{content.title}</span>
                  <span>{`>`}</span>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
