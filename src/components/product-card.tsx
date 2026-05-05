"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/cart-provider";
import { SafeImage } from "@/components/safe-image";
import { formatCurrency } from "@/data/products";
import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
  compact?: boolean;
};

export function ProductCard({ product, compact = false }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState("");
  const [message, setMessage] = useState("");
  const { addItem } = useCart();
  const badge = product.badge?.toLocaleUpperCase("bg-BG");
  const conversionNotes = compact
    ? ["Плащане при доставка", "Преглед и тест"]
    : ["Плащане при доставка", "Остават 5 броя", "Преглед и тест"];

  function handleAdd() {
    if (!selectedSize) {
      setMessage("Избери размер");
      return;
    }

    addItem(product, selectedSize);
    setMessage("Добавено в количката");
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-slate-950/10">
      <Link
        href={`/products/${product.slug}`}
        className="block overflow-hidden bg-slate-100"
      >
        <div
          className={
            compact
              ? "relative aspect-[4/5] overflow-hidden"
              : "relative aspect-[3/4] overflow-hidden"
          }
        >
          <SafeImage
            src={product.image}
            alt={product.title}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            fallbackLabel={product.title}
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-x-3 top-3 flex items-start justify-between gap-3">
            {badge ? (
              <span className="rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-950 shadow-sm ring-1 ring-slate-200/80">
                {badge}
              </span>
            ) : (
              <span />
            )}
            {product.compareAtEur ? (
              <span className="rounded-full bg-teal-700 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-sm">
                -{Math.round((1 - product.priceEUR / product.compareAtEur) * 100)}%
              </span>
            ) : null}
          </div>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex flex-1 items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
              {product.label}
            </p>
            <h3 className="mt-1 min-h-11 text-sm font-semibold leading-5 tracking-tight text-slate-950 sm:text-base">
              <Link href={`/products/${product.slug}`}>{product.title}</Link>
            </h3>
          </div>
          <div className="shrink-0 text-right">
            <p className="font-mono text-base font-bold tabular-nums text-slate-950">
              {formatCurrency(product.priceEUR, "EUR")}
            </p>
            <p className="mt-0.5 font-mono text-xs font-semibold tabular-nums text-slate-500">
              {formatCurrency(product.priceBGN, "BGN")}
            </p>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.sizes.slice(0, compact ? 4 : 6).map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => {
                setSelectedSize(size);
                setMessage("");
              }}
              className={`h-8 min-w-9 rounded-md border px-2 text-xs font-bold transition ${
                selectedSize === size
                  ? "border-slate-950 bg-slate-950 text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-teal-700"
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5 border-t border-slate-100 pt-3">
          {conversionNotes.map((note) => (
            <span
              key={note}
              className="rounded-full bg-slate-50 px-2.5 py-1 text-[11px] font-semibold leading-none text-slate-600 ring-1 ring-slate-200"
            >
              {note}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={handleAdd}
          className="mt-4 h-11 w-full rounded-md bg-slate-950 px-4 text-sm font-bold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-teal-700 hover:shadow-md"
        >
          Бързо добавяне
        </button>
        {message ? (
          <p
            className={`mt-2 text-xs font-semibold ${
              selectedSize ? "text-teal-700" : "text-slate-950"
            }`}
          >
            {message}
          </p>
        ) : null}
      </div>
    </article>
  );
}
