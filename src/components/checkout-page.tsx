"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/cart-provider";
import { SafeImage } from "@/components/safe-image";
import { formatCurrency } from "@/data/products";

type DeliveryMethod = "office" | "address";

export function CheckoutPage() {
  const { items, totalEUR, totalBGN, clearCart } = useCart();
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>("office");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    clearCart();
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-950 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-lg border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
            Успешна заявка
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Поръчката е приета успешно.
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Това е демо версия. В реален магазин тук ще се изпраща имейл/заявка
            към администратора.
          </p>
          <Link
            href="/products"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-slate-950 px-6 text-sm font-bold text-white transition hover:bg-teal-700"
          >
            Продължи към продуктите
          </Link>
        </div>
      </main>
    );
  }

  if (!items.length) {
    return (
      <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-950 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-lg border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">
          <h1 className="text-3xl font-semibold tracking-tight">
            Количката е празна
          </h1>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Добави продукт и избери размер, за да преминеш към демо поръчката.
          </p>
          <Link
            href="/products"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-slate-950 px-6 text-sm font-bold text-white transition hover:bg-teal-700"
          >
            Върни се към продуктите
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-950 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
            Завършване на поръчка
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Checkout
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-6 lg:grid-cols-[1.1fr_0.72fr]"
        >
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
            <section>
              <h2 className="text-lg font-semibold tracking-tight">
                Данни за доставка
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <Field label="Име и фамилия" name="fullName" required />
                <Field label="Телефон" name="phone" type="tel" required />
                <Field label="Имейл" name="email" type="email" required />
                <Field label="Град" name="city" required />
                <div className="sm:col-span-2">
                  <Field
                    label="Адрес или офис на куриер"
                    name="address"
                    required
                  />
                </div>
              </div>
            </section>

            <section className="mt-10">
              <h2 className="text-lg font-semibold tracking-tight">
                Метод на доставка
              </h2>
              <div className="mt-4 grid gap-3">
                <RadioCard
                  checked={deliveryMethod === "office"}
                  label="До офис на Еконт"
                  onChange={() => setDeliveryMethod("office")}
                />
                <RadioCard
                  checked={deliveryMethod === "address"}
                  label="До адрес"
                  onChange={() => setDeliveryMethod("address")}
                />
              </div>
            </section>

            <section className="mt-10">
              <h2 className="text-lg font-semibold tracking-tight">
                Метод на плащане
              </h2>
              <div className="mt-4">
                <RadioCard checked label="Наложен платеж" onChange={() => {}} />
              </div>
            </section>
          </div>

          <aside className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:sticky lg:top-24 lg:self-start">
            <h2 className="text-lg font-semibold tracking-tight">
              Обобщение на поръчката
            </h2>
            <div className="mt-5 grid gap-4">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.size}`}
                  className="flex gap-3 border-b border-slate-100 pb-4 last:border-b-0 last:pb-0"
                >
                  <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded-md bg-slate-100">
                    <SafeImage
                      src={item.product.image}
                      alt={item.product.title}
                      fill
                      sizes="64px"
                      fallbackLabel={item.product.title}
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-sm font-semibold leading-5 tracking-tight text-slate-950">
                          {item.product.title}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-slate-600">
                          Размер {item.size}
                        </p>
                        <p className="mt-1 text-sm font-medium text-slate-600">
                          Количество {item.quantity}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-mono text-sm font-bold text-slate-950">
                          {formatCurrency(
                            item.product.priceEUR * item.quantity,
                            "EUR",
                          )}
                        </p>
                        <p className="mt-0.5 font-mono text-xs font-semibold text-slate-500">
                          {formatCurrency(
                            item.product.priceBGN * item.quantity,
                            "BGN",
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center justify-between text-sm font-semibold text-slate-600">
                <span>Общо</span>
                <span className="font-mono text-xl font-bold text-slate-950">
                  {formatCurrency(totalEUR, "EUR")}
                </span>
              </div>
              <p className="mt-1 text-right font-mono text-xs text-slate-500">
                {formatCurrency(totalBGN, "BGN")}
              </p>
            </div>

            <button
              type="submit"
              className="mt-6 h-12 w-full rounded-md bg-teal-700 text-sm font-bold text-white shadow-sm transition hover:bg-slate-950 hover:shadow-md"
            >
              Завърши поръчката
            </button>
          </aside>
        </form>
      </div>
    </main>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-slate-700">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="h-12 rounded-md border border-slate-200 bg-white px-3 text-sm font-medium text-slate-950 outline-none transition focus:border-teal-700"
      />
    </label>
  );
}

function RadioCard({
  checked,
  label,
  onChange,
}: {
  checked: boolean;
  label: string;
  onChange: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`flex items-center justify-between rounded-lg border p-4 text-left transition ${
        checked
          ? "border-teal-700 bg-teal-50"
          : "border-slate-200 bg-white hover:border-teal-700"
      }`}
    >
      <span className="text-sm font-semibold text-slate-950">{label}</span>
      <span
        className={`h-4 w-4 rounded-full border ${
          checked ? "border-teal-700 bg-teal-700" : "border-slate-300 bg-white"
        }`}
      />
    </button>
  );
}
