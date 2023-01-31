import React from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Footer from "../components/Footer";

const Body = ({ dark, breakpoint }) => {
  return (
    <div className="dark:bg-black dark:text-white">
      <Hero breakpoint={breakpoint} />
      <Products breakpoint={breakpoint} />

      <Footer />
    </div>
  );
};

export default Body;
