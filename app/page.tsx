"use client";

import { useEffect, useState } from "react";
import { Input } from "./components/Input";
import { ListBox } from "./components/ListBox";
import { ShirtCard } from "./components/ShirtCard";
import { Shirt, fetchShirts } from "./mock/shirts";

const priceFilter = [
  { name: "Selecione o filtro...", value: "null" },
  { name: "Menor preço", value: "low" },
  { name: "Maior preço", value: "high" },
];

const colorFilter = [
  { name: "Selecione a cor...", value: "null" },
  { name: "Vermelho", value: "red" },
  { name: "Azul", value: "blue" },
  { name: "Branco", value: "white" },
  { name: "Preto", value: "black" },
];

const sizeFilter = [
  { name: "Selecione o tamanho...", value: "null" },
  { name: "P", value: "p" },
  { name: "M", value: "m" },
  { name: "G", value: "g" },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const [shirts, setShirts] = useState<Shirt[]>();
  async function getShirts() {
    const response = await fetchShirts();
    setIsLoading(false);
    setShirts(response);
  }
  useEffect(() => {
    getShirts();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-6">
      {selectedPrice}
      {selectedColor}
      <div className="shadow flex rounded-lg bg-slate-200 p-6">
        <div className="flex gap-4 h-full items-end">
          <ListBox
            label="Ordenar preço por"
            options={priceFilter}
            onSelect={setSelectedPrice}
          />
          <ListBox
            label="Cor"
            options={colorFilter}
            onSelect={setSelectedColor}
          />
          <ListBox
            label="Tamanho"
            options={sizeFilter}
            onSelect={setSelectedSize}
          />
          <Input />
          <button className="p-4 bg-slate-900 hover:border hover:border-slate-900 transition-all text-white hover:bg-white hover:text-slate-900  rounded-lg h-10 flex items-center justify-center">
            Aplicar filtros
          </button>
        </div>
      </div>
      <section className="grid grid-cols-3 gap-6">
        {isLoading ? (
          <div className="text-2xl">Carregando...</div>
        ) : (
          <>
            {shirts?.map((shirt) => {
              return (
                <ShirtCard
                  image={shirt.image}
                  key={shirt.id}
                  id={shirt.id}
                  color={shirt.color}
                  name={shirt.name}
                  price={shirt.price}
                  size={shirt.size}
                />
              );
            })}
          </>
        )}
      </section>
    </main>
  );
}
