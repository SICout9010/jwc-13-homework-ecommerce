'use client'
import { useState } from 'react';
import { getCookie } from 'cookies-next';
import { setCookie } from 'cookies-next';
import { RxCross1 } from "react-icons/rx";

function Promotion() {
    const [acceptPromotion, setAcceptPromotion] = useState(getCookie('acceptPromotion'));
    if (acceptPromotion === undefined) {
        setCookie('acceptPromotion', "true");
        setAcceptPromotion('true');
    }

    const onAcceptPromotion = () => {
        console.log(getCookie('acceptPromotion'));
        setCookie('acceptPromotion', "false");
        setAcceptPromotion('false');
    }

  return (
    acceptPromotion === "true" ? <div className="w-full h-10 flex items-center justify-center bg-black text-white gap-4 px-[100px]">
        <p className="">Sign up and get 20% off to your first order.</p>
        <p className='underline cursor-pointer'>Sign Up Now</p>
        <RxCross1 onClick={onAcceptPromotion} className='cursor-pointer' />
    </div> : null
  )
}

export default Promotion