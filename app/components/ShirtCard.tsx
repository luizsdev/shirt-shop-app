import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Shirt } from "../mock/shirts";

export function ShirtCard({ color, id, name, price, size }: Shirt) {
  return (
    <Link
      href={`/shirt/${id}`}
      className="rounded-md border border-slate-500 shadow-md  w-[300px] h-[350px] overflow-hidden [&_img]:hover:scale-[1.08] p-4"
    >
      <div className="flex flex-col justify-start items-center h-full gap-2">
        <Image
          src={
            "https://dw0jruhdg6fis.cloudfront.net/producao/24866653/G/camisa_branca.jpg"
          }
          className="object-cover transition-transform duration-200"
          alt="camisa"
          width={200}
          height={200}
        />
        <div className="flex flex-col text-xl items-center">
          <span>{name}</span>
          <span className="font-bold">R${price},00</span>
          <div className="flex gap-3 w-full">
            <button className="p-2 border border-black rounded-lg">
              Comprar
            </button>
            <span className="p-3 bg-black rounded-lg">
              <ShoppingCart color="white" size={20} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
