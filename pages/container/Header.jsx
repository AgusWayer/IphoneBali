import React from "react";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";

const Header = ({ dark, setDark, handleDark }) => {
  return (
    <div className="dark:bg-black">
      <Topbar dark={dark} setDark={setDark} handleDark={handleDark} />
      <Navbar dark={dark} setDark={setDark} handleDark={handleDark} />
    </div>
  );
};

export default Header;
