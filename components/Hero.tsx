import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="bg-[#f2f0f1] w-full h-[663px] flex flex-row items-center justify-center overflow-hidden mt-[105px]">
      <div className="flex max-w-[1240px]">
        <div className="flex flex-col items-start justify-center gap-8 w-[52%]" >
          <h1 className="text-6xl font-bold text-start max-w-[75%] w-full">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-base font-light text-start">
            Browse through our diverse range of meticulously crafted garments,
            <br />
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Link
            href={"#"}
            className="bg-black text-white rounded-[62px] px-12 py-4 max-w-[210px] w-full"
          >
            <p className="mx-auto w-full text-center">Shop Now</p>
          </Link>
          <div className="flex flex-row gap-6">
            <div>
              <h2 className="text-5xl font-bold">200+</h2>
              <p className="text-base text-[#00000099]">International Brands</p>
            </div>
            <div className="w-[1px] h-[68px] bg-[#0000001A]"></div>
            <div>
              <h2 className="text-5xl font-bold">2,000+</h2>
              <p className="text-base text-[#00000099]">
                High-Quality Products
              </p>
            </div>
            <div className="w-[1px] h-[68px] bg-[#0000001A]"></div>
            <div>
              <h2 className="text-5xl font-bold">30,000+</h2>
              <p className="text-base text-[#00000099]">Happy Customers</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-[49%] relative">
          <div className="flex items-center justify-center object-cover">
            <Image
              src="https://s3-alpha-sig.figma.com/img/b26f/ea69/ccfd8aa5825862cdb9604a4fb4930464?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZywyPvG~0-SNmCzufGtyEjRq~cROHBqXnFxTaqJ5XJ5KZQ3jOKVzMIjMQKDPjzM7OSwBjEAII2MT7tGwRIq3lWsfMIgOSWhkORXRa2-SkIRx0L7HcehBfq7JrfrBDJ8-d2h3EPjWQ8L-4-sU7OSvpMqQxKHvToncmesJLL7wl6ra80DgKqx~Wvut2Tlwd~SM8NWRvE~OrKpDFgaB6zvJlpRuCk1F18KWaSWXLQDQcmei7N7JzclBbIFIOgbIis0a81Oht8vp4aJ-~8DuNxeTXOuduGd5WnjGO4-E82EkM2OsWrxfuUFeHBcQDCXBsdaH11n4RG~d5xCvVr-Urofx-Q__"
              alt="Clothes showcase"
              width={700}
              height={800}
              className="min-w-[640px] absolute ml-[50px] mt-[270px] select-none "
            />
          </div>
          <svg
            width="609"
            height="267"
            viewBox="0 0 609 267"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="bottom-[43%]  ml-[50px] absolute select-none pointer-events-none"
          >
            <path
              d="M557 0C558.765 27.955 581.045 50.2347 609 52C581.045 53.7654 558.765 76.0448 557 104C555.235 76.0448 532.955 53.7654 505 52C532.955 50.2347 555.235 27.955 557 0Z"
              fill="black"
            />
            <path
              d="M28 211C28.9506 226.053 40.9472 238.049 56 239C40.9472 239.951 28.9506 251.947 28 267C27.0495 251.947 15.0527 239.951 0 239C15.0527 238.049 27.0495 226.053 28 211Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Hero;
