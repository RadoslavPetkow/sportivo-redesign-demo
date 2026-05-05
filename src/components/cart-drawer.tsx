"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useCart } from "@/components/cart-provider";
import { SafeImage } from "@/components/safe-image";
import { formatCurrency } from "@/data/products";

export function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const { items, itemCount, totalEUR, totalBGN, removeItem, updateQuantity } =
    useCart();
  const canUseDom = typeof document !== "undefined";

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  const drawer = isOpen ? (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <button
        type="button"
        aria-label="Затвори количката"
        className="fixed inset-0 bg-black/45"
        onClick={() => setIsOpen(false)}
      />
      <aside className="fixed right-0 top-0 z-[101] flex h-full w-full max-w-[420px] flex-col overflow-hidden border-l border-slate-200 bg-white shadow-2xl sm:w-[420px]">
        <div className="shrink-0 border-b border-slate-200 bg-white px-4 py-4 sm:px-6 sm:py-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
                Твоята поръчка
              </p>
              <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-950">
                Количка
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="h-10 w-10 rounded-full border border-slate-200 bg-white text-xl leading-none text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
              aria-label="Затвори"
            >
              ×
            </button>
          </div>
        </div>

        {items.length ? (
          <>
            <div className="flex-1 overflow-y-auto bg-white px-4 py-4 sm:px-6 sm:py-6">
              <div className="grid gap-3">
                {items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.size}`}
                    className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <div className="flex gap-3 sm:gap-4">
                      <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-md bg-slate-100 sm:h-28 sm:w-24">
                        <SafeImage
                          src={item.product.image}
                          alt={item.product.title}
                          fill
                          sizes="96px"
                          fallbackLabel={item.product.title}
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                          <div>
                            <h3 className="font-semibold leading-5 tracking-tight text-slate-950">
                              {item.product.title}
                            </h3>
                            <p className="mt-1 text-sm font-medium text-slate-600">
                              Размер {item.size}
                            </p>
                          </div>
                          <div className="text-left sm:text-right">
                            <p className="font-mono text-sm font-bold text-slate-950">
                              {formatCurrency(item.product.priceEUR, "EUR")}
                            </p>
                            <p className="mt-0.5 font-mono text-xs font-semibold text-slate-500">
                              {formatCurrency(item.product.priceBGN, "BGN")}
                            </p>
                          </div>
                        </div>
                        <div className="mt-4 flex items-center justify-between gap-3 sm:mt-5">
                          <div className="flex h-10 items-center rounded-full border border-slate-200 bg-slate-50">
                            <button
                              className="h-10 w-10 text-slate-600"
                              type="button"
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.size,
                                  item.quantity - 1,
                                )
                              }
                            >
                              -
                            </button>
                            <span className="w-7 text-center font-mono text-sm font-semibold">
                              {item.quantity}
                            </span>
                            <button
                              className="h-10 w-10 text-slate-600"
                              type="button"
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.size,
                                  item.quantity + 1,
                                )
                              }
                            >
                              +
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeItem(item.product.id, item.size)}
                            className="text-sm font-semibold text-slate-500 transition hover:text-slate-950"
                          >
                            Премахни
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="shrink-0 border-t border-slate-200 bg-white px-4 py-5 shadow-[0_-12px_24px_rgba(15,23,42,0.04)] sm:px-6">
              <div className="flex items-center justify-between text-sm font-semibold text-slate-600">
                <span>Междинна сума</span>
                <span className="font-mono text-xl font-bold text-slate-950">
                  {formatCurrency(totalEUR, "EUR")}
                </span>
              </div>
              <p className="mt-1 text-right font-mono text-xs text-slate-500">
                {formatCurrency(totalBGN, "BGN")}
              </p>
              <Link
                href="/checkout"
                onClick={() => setIsOpen(false)}
                className="mt-5 flex h-12 w-full items-center justify-center rounded-md bg-teal-700 text-sm font-bold text-white shadow-sm transition hover:bg-slate-950 hover:shadow-md"
              >
                Към поръчка
              </Link>
              <p className="mt-3 text-center text-xs font-medium text-slate-500">
                Плащане при доставка и безплатна замяна на размер.
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-1 flex-col items-center justify-center overflow-y-auto bg-white px-8 text-center">
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-slate-200 bg-slate-50 font-mono text-2xl font-bold text-slate-950">
                0
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                Количката е празна
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-slate-600">
                Избери размер и добави продукт, за да видиш сумата и следващата
                стъпка за поръчка.
              </p>
            </div>
            <div className="shrink-0 border-t border-slate-200 bg-white px-4 py-5 sm:px-6">
              <Link
                href="/products"
                onClick={() => setIsOpen(false)}
                className="flex h-11 w-full items-center justify-center rounded-md bg-slate-950 px-5 text-sm font-bold text-white transition hover:bg-teal-700"
              >
                Продължи пазаруването
              </Link>
            </div>
          </>
        )}
      </aside>
    </div>
  ) : null;

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="relative h-11 rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-950 shadow-sm transition hover:border-slate-950 sm:px-5"
        aria-label="Отвори количката"
      >
        Количка
        {itemCount ? (
          <span className="ml-2 rounded-full bg-teal-700 px-2 py-0.5 font-mono text-xs text-white">
            {itemCount}
          </span>
        ) : null}
      </button>

      {canUseDom ? createPortal(drawer, document.body) : null}
    </>
  );
}
