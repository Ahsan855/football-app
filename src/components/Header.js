import React from "react";
import logo from "./../image/image 1.svg";

const Header = () => {
  return (
    <div className="bg-[#CCF300]">
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <img src={logo} className="h-[75px] w-[75px]" alt="" />
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
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
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Before they sold out readymade gluten
            </h1>
            <p class="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
