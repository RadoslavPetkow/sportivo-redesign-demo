import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { products } from "@/data/products";

const filters = ["Всички", "Мъже", "Жени", "Деца", "Промо", "Нови"];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="text-sm font-semibold text-slate-500">
          Назад към началото
        </Link>
        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
                Каталог
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight">
                Всички продукти
              </h1>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className="h-10 shrink-0 rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold transition hover:border-slate-950"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
