import React from "react";
import headerlogo from "./../image/Group 7.png";
import headerfooter from "./../image/pngwing 1.png";

const Header = () => {
  return (
    <>
      <div className="bg-[#CCF300]">
        {/* image and header section */}
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-5 md:py-10 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h2 className="text-lg md:text-3xl text-black">Welcome to the</h2>
              <h1 className="title-font text-3xl md:text-[67px] mb-10 md:mb-5 font-extrabold text-black md:leading-[80px]">
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
          <img
            src={headerfooter}
            alt=""
            className="mt-[-106px] md:mt-[-450px] lg:mt-[-480px] 2xl:mt-[-620px] w-full"
          />
        </section>
      </div>
    </>
  );
};

export default Header;
