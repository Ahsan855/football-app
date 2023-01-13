import React from "react";
import line from ".././image/Line.png";

const Tiger = () => {
  return (
    <div className="bg-black text-white py-20 relative">
      <img className="absolute top-[-80px] right-10" src={line} alt="" />
      <h1 className="text-center text-3xl  mb-10 font-extrabold">
        Football Ape Fan Club NFT Holder Tier Reward System
      </h1>
      <p className="p-5 md:px-[360px] px-5">
        Holders with three or more Football Ape Fan Club NFTs will be eligible
        for an exclusive <br /> giveaway of 79 Football Ape Fan Club NFTs{" "}
        <span className="text-[#CCF300] underline">
          {" "}
          (1 FAFC NFT per Holder)
        </span>{" "}
        to 79 Holders!
      </p>
      <p className="p-5 md:px-[360px] px-5">
        The top{" "}
        <span className="text-[#CCF300] underline">
          9 Football Ape Fan Club NFT
        </span>{" "}
        holders will be able to work closely with the Football Ape Fan Club Team
        and our metaverse development team. These 9 holders will get priority
        updates and have exclusive discord in-chat access with Football Ape Fan
        Club founders. It’s Your Ticket to Elite-Level Networking Events with
        Business Leaders, Entrepreneurs. On the contingency that all Football
        Ape Fan Club NFTs have been minted.
      </p>
    </div>
  );
};

export default Tiger;
