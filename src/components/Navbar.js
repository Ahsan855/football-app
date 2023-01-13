import React from "react";
import logo from "./../image/image 1.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font bg-[#CCF300]">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <img src={logo} className="h-[75px] w-[75px]" alt="" />
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-black justify-center">
            <Link to="/" className="mr-5 hover:font-bold text-[18px]">
              Home
            </Link>
            <Link to="About" className="mr-5 hover:font-bold text-[18px]">
              About us
            </Link>
            <Link to="Nfts" className="mr-5 hover:font-bold text-[18px]">
              Nfts
            </Link>
            <Link to="Roadmap" className="mr-5 hover:font-bold text-[18px]">
              Roadmap
            </Link>
            <Link to="Faqs" className="mr-5 hover:font-bold text-[18px]">
              Faqs
            </Link>
          </nav>
          <button className="inline-flex items-center text-white bg-black border-0 py-1 px-3 rounded mt-4 md:mt-0">
            Join Discord
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
