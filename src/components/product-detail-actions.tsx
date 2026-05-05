"use client";

import { useState } from "react";
import { useCart } from "@/components/cart-provider";
import type { Product } from "@/types/product";

export function ProductDetailActions({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState("");
  const [message, setMessage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  function handleAdd() {
    if (!selectedSize) {
      setMessage("Избери размер");
      return;
    }

    Array.from({ length: quantity }).forEach(() => addItem(product, selectedSize));
    setMessage("Добавено в количката");
  }

  return (
    <>
      <div className="mt-8">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold">Размер</h2>
          <button className="text-sm font-semibold text-teal-700" type="button">
            Таблица с размери
          </button>
        </div>
        <div className="mt-3 grid grid-cols-4 gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => {
                setSelectedSize(size);
                setMessage("");
              }}
              className={`h-12 rounded-md border text-sm font-semibold transition ${
                selectedSize === size
                  ? "border-slate-950 bg-slate-950 text-white"
                  : "border-slate-200 bg-white text-slate-950 hover:border-teal-700"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <div className="flex h-12 items-center rounded-md border border-slate-200 bg-white">
          <button
            className="h-12 w-11"
            type="button"
            onClick={() => setQuantity((current) => Math.max(1, current - 1))}
          >
            -
          </button>
          <span className="w-7 text-center font-mono text-sm">{quantity}</span>
          <button
            className="h-12 w-11"
            type="button"
            onClick={() => setQuantity((current) => current + 1)}
          >
            +
          </button>
        </div>
        <button
          type="button"
          onClick={handleAdd}
          className="h-12 flex-1 rounded-md bg-teal-700 px-6 text-sm font-bold text-white transition hover:bg-slate-950"
        >
          Добави в количката
        </button>
      </div>
      {message ? (
        <p
          className={`mt-3 text-sm font-semibold ${
            selectedSize ? "text-teal-700" : "text-slate-950"
          }`}
        >
          {message}
        </p>
      ) : null}
    </>
  );
}
