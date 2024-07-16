import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollBrands from "@/components/ScrollBrands";
import ClothesCard from "@/components/ClothesCard";
import clothesdb from "@/lib/clothesdb";
import BrowseByDressStyle from "@/components/BrowseByDressStyle";
import PWcustomer from "@/components/PWcustomer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      <Hero />
      {/* Scroll brands */}
      <ScrollBrands />

      {/* New Arrivals and Top Selling */}
      <div className="w-full flex justify-center mt-[70px]">
        <div className="w-full flex flex-col items-center gap-12 max-w-[1440px]">
          <h2 className="font-bold text-5xl uppercase">New Arrivals</h2>
          <ClothesCard clothes_props={clothesdb.newarrivals_clothes} />
          <div className="w-52 h-14 border px-[54px] py-[16px] rounded-[62px] flex justify-center hover:bg-gray-200 hover:cursor-pointer">
            <p>View All</p>
          </div>
          <h2 className="font-bold text-5xl uppercase mt-[126px]">
            Top Selling
          </h2>
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
