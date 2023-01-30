import React from "react";
import Link from "next/link";
import { topbarContents } from "../data/index";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const Topbar = ({ dark, setDark, handleDark }) => {
  return (
    <div className="dark:bg-[#1B1B1B] dark:text-white text-xl px-5 py-3 hidden md:block">
      <div className="flex justify-center ">
        <ul className=" flex items-center">
          {topbarContents.map((content) => (
            <li className="mx-5 uppercase hover:-mt-2 transition-all active:mt-0" key={content.title}>
              <Link href={content.url}>{content.title}</Link>{" "}
            </li>
          ))}
          <li className="cursor-pointer">{dark ? <BsFillSunFill onClick={handleDark} /> : <BsFillMoonFill onClick={handleDark} />}</li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
