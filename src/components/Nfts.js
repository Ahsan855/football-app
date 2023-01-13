import React from "react";
import shape from "../image/Screenshot_8.png";
import shape2 from "../image/Vector (1).png";

const Nfts = () => {
  return (
    <div>
      <section className="bg-[#1E1E1E] body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="md:w-full mx-auto flex flex-wrap justify-center items-center">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h1 className="text-white text-3xl title-font font-bold mb-4">
                <span className="text-[#CCF300]">FAFC NFTs</span> are more than
                just an avatar!
              </h1>

              <p className="leading-relaxed my-8 text-[#ffffff] pb-5">
                Football Ape Fan Club is an NFT collection consisting of{" "}
                <b>7,910 FootballApeFC NFT</b> on the Ethereum blockchain. We
                will create an NFT Metaverse. We will bring more utility for
                every NFT project.
                <br /> <br />
                Every FAFC holder will able to Claim a Mutant Football Ape and
                Baby Football Ape NFT for free. Only gas fees will be charged.
              </p>
              <div className="h-[133px] sm:w-full md:w-[480px] px-2 mb-24 relative ">
                <p className="text-[#ffffff] bg-[#302d2d] border-2 p-3 border-gray-600 rounded-xl">
                  If you hold 1 FAFC you can claim <b>1 Mutant</b> and{" "}
                  <b>1 BFAFC</b> Nft <br /> for free. If you hold <b>50 FAFC</b>{" "}
                  you can claim <b>50 Mutants</b> and <br />{" "}
                  <b>50 BFAFC Nft for free.</b> (Only Gas Fees will be Charged)
                </p>
                <button className="bg-[#CCF300] absolute top-[-25px] left-6 px-5 py-2 rounded-full">
                  {" "}
                  <span className="bg-black text-black h-[17px] w-[17px] rounded-full mr-1">
                    00
                  </span>
                  Example
                </button>
              </div>
            </div>
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-60 object-cover object-center rounded-3xl"
              src={shape}
            />
          </div>
        </div>
        <img className="w-[134px] mx-auto" src={shape2} alt="" />
      </section>
    </div>
  );
};

export default Nfts;
