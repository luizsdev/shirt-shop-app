import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Shirt } from "../mock/shirts";

export function ShirtCard({ color, image, id, name, price, size }: Shirt) {
  return (
    <Link
      href={`/shirt/${id}`}
      className="rounded-md border border-slate-500 shadow-md  w-[300px] overflow-hidden [&_img]:hover:scale-[1.08] p-4"
    >
      <div className="flex flex-col justify-start items-center h-full gap-2">
        <Image
          src={image}
          className="object-cover transition-transform duration-200 max-h-[200px]"
          alt="camisa"
          width={200}
          height={200}
        />
        <div className="flex flex-col text-xl items-center">
          <span>{name}</span>
          <span className="font-bold">R${price},00</span>

          <div className="flex gap-3 w-full pt-6">
            <button className="p-2 text-md border border-black rounded-lg hover:bg-black hover:text-white transition-all">
              Comprar
            </button>
            <span className="p-3 bg-black rounded-lg hover:bg-white transition-all group hover:border hover:border-black flex items-center justify-center w-[44px]">
              <ShoppingCart
                color="white"
                size={20}
                className="group-hover:stroke-black"
              />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
