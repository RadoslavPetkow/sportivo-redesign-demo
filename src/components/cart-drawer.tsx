"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { eurToBgnRate, formatCurrency, products } from "@/data/products";
import { SafeImage } from "@/components/safe-image";

const demoItem = products[0];

export function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasItem, setHasItem] = useState(true);
  const total = demoItem.priceEur;
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
        <div className="shrink-0 bg-white">
          <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-4 sm:px-6 sm:py-5">
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

        {hasItem ? (
          <>
            <div className="flex-1 overflow-y-auto bg-white px-4 py-4 sm:px-6 sm:py-6">
              <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex gap-3 sm:gap-4">
                  <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-md bg-slate-100 sm:h-28 sm:w-24">
                    <SafeImage
                      src={demoItem.image}
                      alt={demoItem.name}
                      fill
                      sizes="96px"
                      fallbackLabel={demoItem.name}
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                      <div>
                        <h3 className="font-semibold leading-5 tracking-tight text-slate-950">
                          {demoItem.name}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-slate-600">
                          Размер M · Черно
                        </p>
                      </div>
                      <div className="text-left sm:text-right">
                        <p className="font-mono text-sm font-bold text-slate-950">
                          {formatCurrency(demoItem.priceEur, "EUR")}
                        </p>
                        <p className="mt-0.5 font-mono text-xs font-semibold text-slate-500">
                          {formatCurrency(demoItem.priceEur * eurToBgnRate, "BGN")}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-3 sm:mt-5">
                      <div className="flex h-10 items-center rounded-full border border-slate-200 bg-slate-50">
                        <button className="h-10 w-10 text-slate-600" type="button">
                          -
                        </button>
                        <span className="w-7 text-center font-mono text-sm font-semibold">
                          1
                        </span>
                        <button className="h-10 w-10 text-slate-600" type="button">
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => setHasItem(false)}
                        className="text-sm font-semibold text-slate-500 transition hover:text-slate-950"
                      >
                        Премахни
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="shrink-0 border-t border-slate-200 bg-white px-4 py-5 shadow-[0_-12px_24px_rgba(15,23,42,0.04)] sm:px-6">
              <div className="flex items-center justify-between text-sm font-semibold text-slate-600">
                <span>Междинна сума</span>
                <span className="font-mono text-xl font-bold text-slate-950">
                  {formatCurrency(total, "EUR")}
                </span>
              </div>
              <p className="mt-1 text-right font-mono text-xs text-slate-500">
                {formatCurrency(total * eurToBgnRate, "BGN")}
              </p>
              <button className="mt-5 h-12 w-full rounded-md bg-teal-700 text-sm font-bold text-white shadow-sm transition hover:bg-slate-950 hover:shadow-md">
                Към поръчка
              </button>
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
                Добави продукт и ще видиш ясна сума, доставка и следваща
                стъпка за поръчка.
              </p>
            </div>
            <div className="shrink-0 border-t border-slate-200 bg-white px-4 py-5 sm:px-6">
              <button
                type="button"
                onClick={() => setHasItem(true)}
                className="h-11 w-full rounded-md bg-slate-950 px-5 text-sm font-bold text-white transition hover:bg-teal-700"
              >
                Върни примерен продукт
              </button>
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
        className="relative h-11 rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-950 shadow-sm transition hover:border-slate-950"
        aria-label="Отвори количката"
      >
        Количка
        {hasItem ? (
          <span className="ml-2 rounded-full bg-teal-700 px-2 py-0.5 font-mono text-xs text-white">
            1
          </span>
        ) : null}
      </button>

      {canUseDom ? createPortal(drawer, document.body) : null}
    </>
  );
}
