import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollBrands from "@/components/ScrollBrands";
import ClothesCard from "@/components/ClothesCard";
import clothesdb from "@/lib/clothesdb";
import BrowseByDressStyle from "@/components/BrowseByDressStyle";
import PWcustomer from '@/components/PWcustomer';

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">

      {/* Header */}
      <Header />

      <div className="bg-[#f2f0f1] w-full h-[663px] flex flex-row items-center justify-center overflow-hidden mt-[105px]">
        <div className="flex flex-col items-start justify-center gap-8 p-24">
          <h1 className="text-6xl font-bold text-start max-w-[75%] w-full">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-xl font-light text-start">
            Browse through our diverse range of meticulously crafted garments,
            <br/>designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Link
            href={"#"}
            className="bg-black text-white rounded-[62px] px-12 py-4 max-w-[210px] w-full"
          >
            <p className="mx-auto w-full text-center">Shop Now</p>
          </Link>
          <div className="flex flex-row gap-12">
            <div>
              <h2 className="text-5xl font-bold">200+</h2>
              <p className="opacity-60">International Brands</p>
            </div>
            <div>
              <h2 className="text-5xl font-bold">2,000+</h2>
              <p className="opacity-60">High-Quality Products</p>
            </div>
            <div>
              <h2 className="text-5xl font-bold">30,000+</h2>
              <p className="opacity-60">Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center max-w-[50%] w-full">
          <Image
            src="https://s3-alpha-sig.figma.com/img/b26f/ea69/ccfd8aa5825862cdb9604a4fb4930464?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SJLTPAKiNVsMekgT4eQbFQ5oeorIJvs4qzLzsTu4DTcLO35ZZ2tsinGb6UtgaLmsMev3j5D7Z7CS-x1esf~xYMFaoviK-6dnOb2QBbOvQ7L5baMPL~lKratY9GxVMa94ceocXqwYKnVXOWxg6HuW7PZXPJqEyNo4AQQCb4p9WnqdBQvKtxdI7lAwUnMbHS5S7ULY17cgaNfa5qHzNCiXKiS90Ts1VbPrRG9uUY5yWwciMb-Fcalxg4g0oQ~MpS6JauVcTx3ODYMxeClU5094nYpKHemiZTw8ufd3bp4pGn2A9ZBJTYcZGitKlM13~zjISboHP4MHXt1HWfh8J9H8Lw__"
            alt="Clothes showcase"
            width={500}
            height={700}
            className="w-fit h-fit mt-56 select-none relative"
          />
          <svg width="609" height="267" viewBox="0 0 609 267" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[35%] top-[-1%] right-[6%] h-[663px] absolute select-none pointer-events-none">
            <path d="M557 0C558.765 27.955 581.045 50.2347 609 52C581.045 53.7654 558.765 76.0448 557 104C555.235 76.0448 532.955 53.7654 505 52C532.955 50.2347 555.235 27.955 557 0Z" fill="black"/>
            <path d="M28 211C28.9506 226.053 40.9472 238.049 56 239C40.9472 239.951 28.9506 251.947 28 267C27.0495 251.947 15.0527 239.951 0 239C15.0527 238.049 27.0495 226.053 28 211Z" fill="black"/>
          </svg>
        </div>
      </div>
      {/* Scroll brands */}
      <ScrollBrands />

      {/* New Arrivals and Top Selling */}
      <div className='w-full flex justify-center mt-[70px]'>
        <div className='w-full flex flex-col items-center gap-12 max-w-[1440px]'>
          <h2 className='font-bold text-5xl uppercase'>New Arrivals</h2>
          <ClothesCard clothes_props={clothesdb.newarrivals_clothes} />
          <div className="w-52 h-14 border px-[54px] py-[16px] rounded-[62px] flex justify-center hover:bg-gray-200 hover:cursor-pointer">
            <p>View All</p>
          </div>
          <h2 className='font-bold text-5xl uppercase mt-[126px]'>Top Selling</h2>
          <ClothesCard clothes_props={clothesdb.topselling_clothes} />
          <div className="w-52 h-14 border px-[54px] py-[16px] rounded-[62px] flex justify-center hover:bg-gray-200 hover:cursor-pointer">
            <p>View All</p>
          </div>
        </div>
      </div>

      {/* BROWSE BY DRESS STYLE */}
      <BrowseByDressStyle />

      {/* STAY UP TO DATE */}

      {/* OUR HAPPY CUSTOMERS */}
      <PWcustomer />

      {/* Footer */}
      <Footer />
    </main>
  );
}
