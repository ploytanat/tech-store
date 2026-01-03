// components/ProductCard.tsx
import Image from "next/image";
import { Product } from "@/data/mockProducts";
import { CircleCheck, Ban, Heart, ShoppingCart } from "lucide-react";

const ProductCard: React.FC<Product> = ({ id, status, name, originalPrice,review, discountPrice, image,  }) => {
  return (
    <div className=" flex flex-col relative  p-2  hover:shadow-lg  transition duration-100 ease-in-out transform  cursor-pointer w-full">
      <span
        className={`text-xs  rounded-full ${
          status === "in stock" ? "text-lime-700 " : "text-red-500"
        }`}
      >
         {status === "in stock" ? <div className="flex text-xs gap-2 items-center"><CircleCheck color="#ffffff" fill="#859F3D" size={16}  /> in stock</div> :  <div className="flex text-xs gap-2 items-center"><Ban color="#ffffff" fill="#E50046" size={16}  />out of stock</div>}
      </span>
      <div className=" p-1  rounded-full w-fit absolute  right-0 shadow-sm shadow-black/20 ">
        <Heart size={10} />
      </div>
      <Image
        src={image}
        alt={name}
        width={150}
        height={150}
        className="rounded-md hover:-translate-y-1 hover:scale-105"
      />
      <span className=" text-xs text-gray-500">⭐⭐⭐⭐⭐ reviews({review})</span>
      <h3 className="mt-2 ">{name}</h3>
      <p className="text-gray-600 text-sm line-through">
        ฿{originalPrice.toLocaleString()}
      </p>
      <p className="text-black  font-medium text-xl">
        ฿{discountPrice.toLocaleString()}
      </p>
       <div className="flex justify-center mt-3 py-1 space-x-2 rounded-full text-blue-600 ring-2  hover:bg-blue-600 hover:text-white cursor-pointer">
         <ShoppingCart size={20} />
        <button className="">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
