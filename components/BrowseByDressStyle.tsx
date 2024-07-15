import React from "react";
import Image from "next/image";
import man1 from "/public/images/Frame_61.png";
import man2 from "/public/images/Frame_62.png";
import man3 from "/public/images/Frame_63.png";
import woman from "/public/images/Frame_64.png";

function BrowseByDressStyle() {
  return (
    <main className="my-20 flex items-center justify-center">
      <div className="p-16 flex flex-col items-center justify-center rounded-[40px] text-black bg-[#f0f0f0]">
        <h1 className="text-center text-[48px] font-bold w-full pb-16">
          BROWSE BY DRESS STYLE
        </h1>
        <div className="flex flex-col gap-4 ">
          <div className="flex gap-4">
            <Image src={man1} alt="test" />
            <Image src={man2} alt="test" />
          </div>
          <div className="flex gap-4">
            <Image src={woman} alt="test" />
            <Image src={man3} alt="test" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default BrowseByDressStyle;
