"use client";
import { Shirt, fetchShirts } from "@/app/mock/shirts";
import { Star } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF"];
const sizes = ["P", "M", "G", "GG"];

export default function ShirtDetails() {
  const router = useParams();
  const id = router.id;

  const [shirt, setShirt] = useState<Shirt | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    async function fetchShirt() {
      if (id) {
        const shirts = await fetchShirts();
        const foundShirt = shirts.find((shirt) => shirt.id === Number(id));
        if (!foundShirt) {
          return;
        }
        setShirt(foundShirt);
      }
    }

    fetchShirt();
  }, [id]);

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    console.log("Added to cart:", {
      id: shirt?.id,
      color: selectedColor,
      size: selectedSize,
      quantity: quantity,
    });
  };

  if (!shirt) {
    return <div>Loading...</div>;
  }

  return (
    <div className="px-5 flex w-full items-center justify-center h-full">
      <div className="items-start flex flex-col sm:flex-row justify-center gap-10">
        <div className="flex items-center border rounded-lg border-slate-500 overflow-hidden">
          <Image src={shirt.image} width={500} height={500} alt="CAMISA" />
        </div>
        <div className="h-full flex flex-col justify-start p-4 gap-1">
          <h1 className="text-2xl font-bold">{shirt.name}</h1>
          <div className="flex items-center gap-2">
            <Star className="fill-yellow-500" size={16} />
            <span className="text-xs font-normal">4.95 (1800 reviews)</span>
          </div>
          <span className="bg-black text-white rounded text-xs p-2 max-w-[80px]">
            Best Seller
          </span>
          <p className="text-2xl font-semibold">R$ {shirt.price},00</p>
          <div className="flex flex-col gap-4 mt-4">
            <div>
              <span className="font-semibold">Cor:</span>
              <div className="flex gap-2 mt-1">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    className={`h-8 w-8 rounded-full border border-gray-300 ${
                      selectedColor === color
                        ? "ring ring-offset-2 ring-slate-500"
                        : ""
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorChange(color)}
                  ></button>
                ))}
              </div>
            </div>
            <div>
              <span className="font-semibold">Tamanho:</span>
              <div className="flex gap-2 mt-1">
                {sizes.map((size, index) => (
                  <label
                    key={index}
                    className={`flex items-center justify-center h-8 w-8 rounded-full border border-gray-300 cursor-pointer ${
                      selectedSize === size
                        ? "ring ring-offset-2 ring-slate-500"
                        : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="size"
                      value={size}
                      checked={selectedSize === size}
                      onChange={() => handleSizeChange(size)}
                      className="hidden"
                    />
                    {size}
                  </label>
                ))}
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <span className="font-semibold">Quantidade:</span>
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="border border-gray-300 rounded-md w-20 px-3 py-1"
              />
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
