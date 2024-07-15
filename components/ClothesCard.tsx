import Image from "next/image";
import Rating from "./Rating";

interface ClothesProps {
    id: number;
    name: string;
    image: string;
    score: number;
    price: number;
    discount: {
        has: boolean;
        newprice: number;
        percentage?: number;
    };
}

interface ClothesCardProps {
    clothes_props: ClothesProps[];
}

function ClothesCard({clothes_props}: ClothesCardProps) {
  return (
    <div className='w-full flex justify-center gap-5'>
    {/* <div className='w-[300px] h-[300px] bg-[#F0EEED] rounded-3xl'></div> - Reference from this */}
    {clothes_props.map((clothes) => (
      <div key={clothes.id} className="flex flex-col items-start justify-start">
        <div className='w-[300px] h-[300px] bg-[#F0EEED] rounded-3xl flex items-center justify-center overflow-hidden'>
          <Image src={clothes.image} alt={clothes.name} width={150} height={150} className="w-fit h-fit" />
        </div>
        <p className="font-bold p-2">{clothes.name}</p>
        {/* Stars Rating */}
        <Rating rating={clothes.score} />
        {clothes.discount.has ? (
          <div className="flex items-center">
            <p className="font-bold p-2">${clothes.discount.newprice}</p>
            <p className="font-bold line-through opacity-40 p-2">${clothes.price}</p>
            <div className="w-12 h-6 bg-opacity-10 bg-[#FF3333] rounded-[62px] text-sm text-center text-[#FF3333]">-{clothes.discount.percentage}%</div>
          </div>
        ) : (
          <p className="font-bold p-2">${clothes.price}</p>
        )}
      </div>
    ))}
  </div>
  )
}

export default ClothesCard