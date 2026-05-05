"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import type { Product } from "@/types/product";

type ProductListingProps = {
  products: Product[];
  initialCategory?: string;
  initialFilter?: string;
  initialSize?: string;
  initialSort?: string;
};

const categoryFilters = [
  { label: "Всички", category: "", filter: "" },
  { label: "Мъже", category: "men", filter: "" },
  { label: "Жени", category: "women", filter: "" },
  { label: "Деца", category: "kids", filter: "" },
  { label: "Промо", category: "", filter: "promo" },
  { label: "Нови", category: "new", filter: "" },
];

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const titles: Record<string, string> = {
  men: "Мъжки продукти",
  women: "Дамски продукти",
  kids: "Детски продукти",
  new: "Нови продукти",
};

function makeHref({
  category,
  filter,
  size,
  sort,
}: {
  category?: string;
  filter?: string;
  size?: string;
  sort?: string;
}) {
  const params = new URLSearchParams();

  if (category) params.set("category", category);
  if (filter) params.set("filter", filter);
  if (size) params.set("size", size);
  if (sort && sort !== "newest") params.set("sort", sort);

  const query = params.toString();
  return query ? `/products?${query}` : "/products";
}

export function ProductListing({
  products,
  initialCategory = "",
  initialFilter = "",
  initialSize = "",
  initialSort = "newest",
}: ProductListingProps) {
  const router = useRouter();
  const category = ["men", "women", "kids", "new"].includes(initialCategory)
    ? initialCategory
    : "";
  const filter = ["promo", "bestseller"].includes(initialFilter)
    ? initialFilter
    : "";
  const size = initialSize || "";
  const sort = ["price-asc", "price-desc"].includes(initialSort)
    ? initialSort
    : "newest";
  const title =
    filter === "promo"
      ? "Промо продукти"
      : filter === "bestseller"
        ? "Бестселъри"
        : titles[category] || "Всички продукти";

  const filteredProducts = products
    .filter((product) => {
      if (category === "new") return product.isNew;
      if (category) return product.category === category;
      return true;
    })
    .filter((product) => {
      if (filter === "promo") return product.isPromo;
      if (filter === "bestseller") return product.isBestseller;
      return true;
    })
    .filter((product) => (size ? product.sizes.includes(size) : true))
    .sort((a, b) => {
      if (sort === "price-asc") return a.priceEUR - b.priceEUR;
      if (sort === "price-desc") return b.priceEUR - a.priceEUR;
      return Number(b.isNew) - Number(a.isNew);
    });

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-950 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="text-sm font-semibold text-slate-600">
          Назад към началото
        </Link>
        <div className="mt-6 rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
                Каталог
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                {title}
              </h1>
              <p className="mt-2 text-sm font-medium text-slate-600">
                {filteredProducts.length} продукта
              </p>
            </div>
            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              Сортиране
              <select
                value={sort}
                onChange={(event) =>
                  router.push(
                    makeHref({
                      category,
                      filter,
                      size,
                      sort: event.target.value,
                    }),
                  )
                }
                className="h-11 rounded-md border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-950 outline-none transition focus:border-teal-700"
              >
                <option value="newest">Най-нови</option>
                <option value="price-asc">Цена: ниска към висока</option>
                <option value="price-desc">Цена: висока към ниска</option>
              </select>
            </label>
          </div>

          <div className="mt-6 grid gap-4">
            <div className="flex gap-2 overflow-x-auto pb-1">
              {categoryFilters.map((item) => {
                const isActive =
                  category === item.category && filter === item.filter;

                return (
                  <Link
                    key={item.label}
                    href={makeHref({
                      category: item.category,
                      filter: item.filter,
                      size,
                      sort,
                    })}
                    className={`h-10 shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                      isActive
                        ? "border-slate-950 bg-slate-950 text-white"
                        : "border-slate-200 bg-white text-slate-700 hover:border-teal-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1">
              {sizes.map((item) => {
                const isActive = size === item;

                return (
                  <Link
                    key={item}
                    href={makeHref({
                      category,
                      filter,
                      size: isActive ? "" : item,
                      sort,
                    })}
                    className={`h-9 shrink-0 rounded-md border px-3 py-2 text-xs font-bold transition ${
                      isActive
                        ? "border-teal-700 bg-teal-700 text-white"
                        : "border-slate-200 bg-white text-slate-700 hover:border-teal-700"
                    }`}
                  >
                    {item}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {filteredProducts.length ? (
          <div className="mt-8 grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-lg border border-slate-200 bg-white p-8 text-center shadow-sm">
            <h2 className="text-xl font-semibold tracking-tight">
              Няма продукти по тези филтри
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Опитай друг размер или категория.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
