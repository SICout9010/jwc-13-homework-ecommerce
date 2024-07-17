"use client";
import { useState } from "react";
import { getCookie } from "cookies-next";
import { setCookie } from "cookies-next";
import { RxCross1 } from "react-icons/rx";

function Promotion() {
  const [acceptPromotion, setAcceptPromotion] = useState(
    getCookie("acceptPromotion")
  );
  if (acceptPromotion === undefined) {
    setCookie("acceptPromotion", "true");
    setAcceptPromotion("true");
  }

  const onAcceptPromotion = () => {
    console.log(getCookie("acceptPromotion"));
    setCookie("acceptPromotion", "false");
    setAcceptPromotion("false");
  };

  return acceptPromotion === "true" ? (
    <div className="w-full h-10 flex bg-black items-center justify-center text-white px-[100px]">
      <div className="min-w-[1220px] flex items-center justify-center">
        <div className="flex gap-2">
          <p className="">Sign up and get 20% off to your first order.</p>
          <p className="underline cursor-pointer">Sign Up Now</p>
        </div>
      </div>
      <div className="flex justify-items-end">
          <RxCross1
            onClick={onAcceptPromotion}
            className="cursor-pointer scale-100"
          />
      </div>
    </div>
  ) : null;
}

export default Promotion;
