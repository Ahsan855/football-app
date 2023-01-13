import React from "react";
import coute from ".././image/“.png";
import vector from ".././image/Vector.png";
import shape1 from "../image/shape/Ellipse 4.png";
const Sport = () => {
  return (
    <div className="bg-black">
      <img className="w-[58px] mx-auto" src={vector} alt="" />
      <div className="mt-20 relative">
        <h1 className="text-4xl font-extrabold text-white text-center">
          A Sports collection built with utility and <br />{" "}
          <span className="text-[#CCF300]">community at its foundation</span>{" "}
          <br /> <br />
          Once inside, you will have exclusive access to FAFC <br /> related
          drops, meetups and IRL events, and access <br /> to upcoming projects!
        </h1>
        <div>
          <img
            src={shape1}
            className="absolute bottom-[-200%] right-[0%]"
            alt=""
          />
        </div>
      </div>
      <div className="container w-[950px] mx-auto py-20 px-5 space-y-3">
        <div
          tabIndex={1}
          className="collapse collapse-plus border-gray-700 rounded-box"
        >
          <div className="collapse-title text-white text-xl font-medium">
            What Is the Mint Date for FAFC?
          </div>
          <div className="collapse-content">
            <p>tabIndex={1} TBA</p>
          </div>
        </div>
        <hr className="border-gray-700" />
        <div
          tabIndex={2}
          className="collapse collapse-plus  border-gray-700 rounded-box"
        >
          <div className="collapse-title text-white text-xl font-medium">
            What intellectual property rights do FAFC holders receive?
          </div>
          <div className="collapse-content">
            <p>tabIndex={2} attribute is necessary to make the div focusable</p>
          </div>
        </div>
        <hr className="border-gray-700" />
        <div
          tabIndex={3}
          className="collapse collapse-plus  border-gray-700 rounded-box"
        >
          <div className="collapse-title text-white text-xl font-medium">
            Will the Football Ape Fan Club NFT be revealed right away?
          </div>
          <div className="collapse-content">
            <p>tabIndex={3} attribute is necessary to make the div focusable</p>
          </div>
        </div>
      </div>
      <div className="bg-[#CCF300] relative px-4 py-10 rounded-lg md:w-[1000px] mx-auto">
        <p className="text-4xl text-center text-black font-extrabold">
          Football is not just a game, but an <br /> emotion for billion of
          people!
        </p>
        <img className="absolute top-[-25px] left-14" src={coute} alt="" />
      </div>
    </div>
  );
};

export default Sport;
