import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex text-base justify-center light bg-white p-3 mt-10">
      <div className="flex flex-col justify-evenly">
        <div className="flex justify-center gap-2 mb-2">
          <a
            href="https://github.com/chetankansal04"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="size-6" />
          </a>
          <a
            href="https://www.instagram.com/chetankansal__/"
            className=""
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="size-6" />
          </a>
        </div>
        © 2024 Chetan Kansal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
