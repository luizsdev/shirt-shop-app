"use client";

import { useEffect, useState } from "react";
import { Input } from "./components/Input";
import { ListBox } from "./components/ListBox";
import { ShirtCard } from "./components/ShirtCard";
import { Skeleton } from "./components/Skeleton";
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
  const [clearSelection, setClearSelection] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [search, setSearch] = useState("");

  const [shirts, setShirts] = useState<Shirt[]>();
  async function getShirts() {
    const response = await fetchShirts();
    setIsLoading(false);
    setShirts(response);
  }

  async function filterItems() {
    setIsLoading(true);
    const response = await fetchShirts();
    let filteredShirts = response;
    if (selectedPrice === "low") {
      filteredShirts = filteredShirts.sort((a, b) => a.price - b.price);
    } else if (selectedPrice === "high") {
      filteredShirts = filteredShirts.sort((a, b) => b.price - a.price);
    }

    if (selectedColor !== "") {
      filteredShirts = filteredShirts.filter(
        (shirt) => shirt.color === selectedColor
      );
    }

    if (selectedSize !== "") {
      filteredShirts = filteredShirts.filter(
        (shirt) => shirt.size === selectedSize
      );
    }

    if (search !== "") {
      filteredShirts = filteredShirts.filter((shirt) =>
        shirt.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    setShirts(filteredShirts);
    setIsLoading(false);
  }
  function clearFilter() {
    setSelectedPrice("");
    setSelectedColor("");
    setSelectedSize("");
    setClearSelection(!clearSelection);
    setSearch("");
    getShirts();
  }

  function setSearchValue(e: any) {
    setSearch(e.target.value);
    console.log(search);
  }

  useEffect(() => {
    getShirts();
  }, []);
  return (
    <main className="flex flex-col items-center p-6 md:p-12 lg:p-24 gap-6 overflow-hidden flex-wrap">
      <div className="shadow flex flex-col md:flex-row rounded-lg bg-slate-200 p-6">
        <div className="flex gap-2 flex-col md:flex-row lg:gap-4 h-full md:items-end flex-wrap">
          <ListBox
            clearSelection={clearSelection}
            label="Ordenar preço por"
            options={priceFilter}
            onSelect={setSelectedPrice}
          />
          <ListBox
            clearSelection={clearSelection}
            label="Cor"
            options={colorFilter}
            onSelect={setSelectedColor}
          />
          <ListBox
            clearSelection={clearSelection}
            label="Tamanho"
            options={sizeFilter}
            onSelect={setSelectedSize}
          />
          <Input onChange={setSearchValue} value={search} />
          <button
            onClick={filterItems}
            type="button"
            className="p-4 bg-slate-900 hover:border hover:border-slate-900 transition-all text-white hover:bg-white hover:text-slate-900  rounded-lg h-10 flex items-center justify-center"
          >
            Aplicar filtros
          </button>
          <button
            onClick={clearFilter}
            type="button"
            className="p-4 bg-slate-900 hover:border hover:border-slate-900 transition-all text-white hover:bg-white hover:text-slate-900  rounded-lg h-10 flex items-center justify-center"
          >
            Limpar filtros
          </button>
        </div>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {isLoading ? (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
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
