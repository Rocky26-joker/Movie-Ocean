import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="p-2 text-white absolute left-0 w-full bg-black text-center">
        Made by{" "}
        <a
          href="https://sangramrout.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-purple-900"
        >
          Sangram Rout
        </a>
      </div>
    </footer>
  );
};

export default Footer;
