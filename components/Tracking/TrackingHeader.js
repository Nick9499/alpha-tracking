import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

const TrackingHeader = () => {
  const router = useRouter();
  return (
    <div className="p-4">
      <img
        onClick={() => router.push("/")}
        className="cursor-pointer"
        src="https://static.wixstatic.com/media/3846c8_4c398fc4758e4c08aa523b4cb60e2abd~mv2.png/v1/fill/w_70,h_103,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ALPHA%20WOLF%20SOLO.png"
      />
      <h3 className=" font-medium ">Alpha Tracking</h3>
    </div>
  );
};

export default TrackingHeader;
