import React from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Footer from "../components/Footer";

const Body = ({ dark }) => {
  return (
    <div className="dark:bg-black dark:text-white">
      <Hero />
      <Products />
      <Footer />
    </div>
  );
};

export default Body;
