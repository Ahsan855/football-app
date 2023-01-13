import React from "react";
import about from "../image/Group 44.png";
import shape1 from "../image/Vector (2).png";

const About = () => {
  return (
    <div>
      <section className="bg-[#1E1E1E] body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={about}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h2 className="text-[#CCF300] text-xl">About</h2>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Our Fan <span className="text-[#CCF300]">Club</span>
            </h1>
            <p className="mb-8 leading-relaxed text-[#FFFFFF]">
              <b>7,910 Football Ape Fan Club</b> NFT Collection | Ethereum
              blockchain | FAFC Gholders will able to Claim Baby FAFC and Mutant
              FAFC for free (Only Gas Fee will be charged) <br /> <br />
              Holder of FAFC will get 4 or more High-Quality Sports related{" "}
              <b>NFT Projects Accessible for Free,</b> These 4 plus projects
              will be launched by Football Ape Fan Club team in a span of one
              year. We will create a Sport Metaverse. <br /> <br />
              Every FAFC holder will able to claim NFTs in multiple Upcoming
              NFTs project like Baby FAFC, Mutant FAFC, NFL NFTs and NBA NFTs
              and More in a period of one year <b>2022-2023.</b> <br /> <br />
              These are upcoming project from Football Ape Fan Club.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-black bg-[#CCF300] border-0 py-2 px-6 focus:outline-none hover:bg-[#a7c50f] rounded text-lg">
                Register on Permint
              </button>
              <button className="ml-4 inline-flex text-[#CCF300] hover:text-black border-2 border-[#CCF300] py-2 px-6 hover:bg-[#CCF300] rounded text-lg">
                Linktree
              </button>
            </div>
          </div>
        </div>
        <img className="w-[134px] mx-auto" src={shape1} alt="" />
      </section>
    </div>
  );
};

export default About;
