import React from "react";
import pic1 from ".././image/picture/Group 11.png";
import pic2 from ".././image/picture/Group 12.png";

const Picture = () => {
  return (
    <div className="bg-black py-10 space-y-5 ">
      <div className="w-[1300px] mx-auto">
        <img src={pic1} alt="" />
        <img src={pic2} alt="" />
      </div>
    </div>
  );
};

export default Picture;
