import React from "react";

const Progress = () => {
  return (
    <div>
      <section className="bg-[#1E1E1E] body-font text-white">
        <div className="container px-5 py-24 mx-auto flex justify-between items-center">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <h1 className="text-[51px] text-white leading-[55px]">
              What Is Football <br />
              <span className="text-[#CCF300]">Ape Fan Club?</span>
            </h1>
            <p className="py-7">
              A NFT collection consisting of <b>7,910 NFTs</b> on the <br />{" "}
              Ethereum blockchain. There are numerous benefits to <br /> owning
              a Football Ape Fan Club NFT. By owning a <br /> Football Ape Fan
              Club NFT
            </p>
            <div className="flex justify-start py-3">
              <p>
                <span>SUOOLY</span> <br />
                <b>7,910</b>
              </p>
              <p className="ml-36">
                <span>PRICE</span> <br />
                <b>O.04ETH </b> (First Phase)
              </p>
            </div>
            <button className="bg-[#CCF300] text-black px-3 py-2 rounded-lg mt-3">
              Buy FAFC
            </button>
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col pb-3">
              <h2 className="text-[#CCF300]">Phase I</h2>
              <label htmlFor="">2500 FAFC NFTs, 0.04 ETH Each - TBA</label>
              <progress
                className="progress progress-primary bg-gray-400 w-56 mt-3"
                value="60"
                max="100"
              ></progress>
            </div>
            <div className="flex flex-col pb-3">
              <h2 className="text-[#CCF300]">Phase II</h2>
              <label htmlFor="">2500 FAFC NFTs, 0.06 ETH Each - Upcoming</label>
              <progress
                className="progress progress-primary bg-gray-400 w-56 mt-3"
                value="70"
                max="100"
              ></progress>
            </div>
            <div className="flex flex-col pb-3">
              <h2 className="text-[#CCF300]">Phase III</h2>
              <label htmlFor="">955 FAFC NFTs, 0.08 ETH Each - Upcoming</label>
              <progress
                className="progress progress-primary bg-gray-400 w-56 mt-3"
                value="40"
                max="100"
              ></progress>
            </div>
            <div className="flex flex-col pb-3">
              <h2 className="text-[#CCF300]">Phase IV</h2>
              <label htmlFor="">955 FAFC NFTs, 0.1 ETH Each - Upcoming</label>
              <progress
                className="progress progress-primary bg-gray-400 w-56 mt-3"
                value="60"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Progress;
