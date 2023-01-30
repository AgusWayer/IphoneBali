import React from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Footer from "../components/Footer";
import News from "../components/News";

const Body = ({ dark, breakpoint }) => {
  return (
    <div className="dark:bg-black dark:text-white">
      <Hero breakpoint={breakpoint} />
      <Products breakpoint={breakpoint} />
      <News />
      <Footer />
    </div>
  );
};

export default Body;
