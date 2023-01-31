import Header from "../src/container/Header";
import "../styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [dark, setDark] = useState(false);
  const handleDark = () => {
    setDark((prev) => !prev);
  };
  return (
    <div className={`${dark ? "dark" : ""}`}>
      <Header dark={dark} setDark={setDark} handleDark={handleDark} />
      <Component {...pageProps} dark={dark} setDark={setDark} handleDark={handleDark} />
    </div>
  );
}
