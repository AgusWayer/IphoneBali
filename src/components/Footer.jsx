import React from "react";
import { AiOutlineInstagram, AiOutlineMail, AiOutlineLinkedin } from "react-icons/ai";
import Link from "next/link";
import { aboutUs } from "../data";
import { Input, Button } from "@material-tailwind/react";

const Footer = () => {
  const socmeds = [
    {
      el: <AiOutlineInstagram />,
      url: "https://instagram.com/flextech.id",
    },
    {
      el: <AiOutlineMail />,
      url: "https://instagram.com/flextech.id",
    },
    {
      el: <AiOutlineLinkedin />,
      url: "https://instagram.com/flextech.id",
    },
  ];
  return (
    <div>
      <div className="grid md:grid-cols-3 grid-cols-1 p-5 md:mr-8 ">
        <div className="text-center">
          <h1 className="font-semibold text-2xl md:text-3xl">Contact Us</h1>
          <ul className="flex my-4 justify-center">
            {socmeds.map((sosmed, index) => (
              <li key={sosmed.el} className={`text-xl md:text-3xl mx-3 ${index == 0 ? "md:mr-3" : "md:mx-3"}`}>
                {sosmed.el}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <div className="text-center md:text-start">
            <h1 className="font-semibold text-2xl">About Us</h1>
            <ul className=" my-4 ">
              {aboutUs.map((about) => (
                <li key={about.url} className={`text-md md:text-lg my-3 hover:text-slate-400 transition-all`}>
                  <Link href={about.url}>{about.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 justify-end text-center md:text-start mt-5 md:mt-0">
          <div>
            <h1 className="font-semibold text-xl md:text-3xl">Follow Us</h1>
            <p className="my-3">Follow us to keep update about our news and discount every week</p>
            <form className="grid md:grid-cols-2 grid-cols-1  justify-between">
              <div className="md:mr-5 my-5 md:my-0">
                <Input label="Your Email" className="" />
              </div>
              <div>
                <Button>SUBSCRIBE</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
