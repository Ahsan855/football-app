import React from "react";
import logo from "./../image/image 1.svg";
import headerlogo from "./../image/Group 7.png";
import headerfooter from "./../image/pngwing 1.png";

const Header = () => {
  return (
    <>
      <div className="bg-[#CCF300]">
        <header class="text-gray-600 body-font">
          <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <img src={logo} className="h-[75px] w-[75px]" alt="" />
            <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-black justify-center">
              <a class="mr-5 hover:font-bold text-[18px]">Home</a>
              <a class="mr-5 hover:font-bold text-[18px]">About us</a>
              <a class="mr-5 hover:font-bold text-[18px]">Nits</a>
              <a class="mr-5 hover:font-bold text-[18px]">Roadmap</a>
              <a class="mr-5 hover:font-bold text-[18px]">Faqs</a>
            </nav>
            <button class="inline-flex items-center text-white bg-black border-0 py-1 px-3 rounded mt-4 md:mt-0">
              Join Discord
            </button>
          </div>
        </header>
        {/* image and header section */}
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h2 className="text-lg text-black">Welcome to the</h2>
              <h1 class="title-font sm:text-4xl mb-4 font-extrabold text-[67px] text-black leading-[80px]">
                Football Ape <br /> Fan Club (FAFC)
              </h1>
              <p class="mb-8 leading-relaxed text-black">
                <b>“The Football World Cup”</b> is one of the most anticipated
                sporting events in the world, and we are incredibly excited to
                announce launch of Football Ape Fan Club. We are launching
                collection consisting of <b>7,910 NFTs.</b> Our collection is
                inspired by our legendary footballers of all time.
              </p>
              <div class="flex justify-center">
                <button class="inline-flex items-center text-white bg-black border-0 py-1 px-3 rounded mt-4 md:mt-0">
                  Join Discord
                </button>
              </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                class="object-cover object-center rounded"
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
