"use client";

import { useEffect, useState } from "react";
import { ShirtCard } from "./components/ShirtCard";
import { Shirt, fetchShirts } from "./mock/shirts";

export default function Home() {
  const [shirts, setShirts] = useState<Shirt[]>();
  async function getShirts() {
    const response = await fetchShirts();
    setShirts(response);
  }
  useEffect(() => {
    getShirts();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-6">
      <h1 className="shadow flex rounded-lg bg-slate-200 w-3/4 p-6"></h1>
      <section className="grid grid-cols-4 gap-6">
        {shirts?.map((shirt) => {
          return (
            <ShirtCard
              key={shirt.id}
              id={shirt.id}
              color={shirt.color}
              name={shirt.name}
              price={shirt.price}
              size={shirt.size}
            />
          );
        })}
      </section>
    </main>
  );
}
