import React from "react";
import logo from "./../image/image 1.svg";
import headerlogo from "./../image/Group 7.png";
import headerfooter from "./../image/pngwing 1.png";

const Header = () => {
  return (
    <>
      <div className="bg-[#CCF300]">
        <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <img src={logo} className="h-[75px] w-[75px]" alt="" />
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-black justify-center">
              <a className="mr-5 hover:font-bold text-[18px]">Home</a>
              <a className="mr-5 hover:font-bold text-[18px]">About us</a>
              <a className="mr-5 hover:font-bold text-[18px]">Nits</a>
              <a className="mr-5 hover:font-bold text-[18px]">Roadmap</a>
              <a className="mr-5 hover:font-bold text-[18px]">Faqs</a>
            </nav>
            <button className="inline-flex items-center text-white bg-black border-0 py-1 px-3 rounded mt-4 md:mt-0">
              Join Discord
            </button>
          </div>
        </header>
        {/* image and header section */}
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h2 className="text-lg text-black">Welcome to the</h2>
              <h1 className="title-font sm:text-4xl mb-4 font-extrabold text-[67px] text-black leading-[80px]">
                Football Ape <br /> Fan Club (FAFC)
              </h1>
              <p className="mb-8 leading-relaxed text-black">
                <b>“The Football World Cup”</b> is one of the most anticipated
                sporting events in the world, and we are incredibly excited to
                announce launch of Football Ape Fan Club. We are launching
                collection consisting of <b>7,910 NFTs.</b> Our collection is
                inspired by our legendary footballers of all time.
              </p>
              <div className="flex justify-center">
                <button className="inline-flex items-center text-white bg-black border-0 py-1 px-3 rounded mt-4 md:mt-0">
                  Join Discord
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src={headerlogo}
              />
            </div>
          </div>
          <img src={headerfooter} alt="" className="mt-[-480px]" />
        </section>
      </div>
    </>
  );
};

export default Header;
