import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductDetailActions } from "@/components/product-detail-actions";
import { ProductCard } from "@/components/product-card";
import { SafeImage } from "@/components/safe-image";
import { formatCurrency, products } from "@/data/products";

type ProductDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const related = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link href="/products" className="text-sm font-semibold text-slate-500">
          Назад към каталога
        </Link>

        <section className="mt-8 grid gap-10 rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {product.images.map((image, index) => (
              <div
                key={`${product.id}-image-${index}`}
                className="relative aspect-[3/4] overflow-hidden rounded-lg bg-slate-100"
              >
                <SafeImage
                  src={image}
                  alt={product.title}
                  fill
                  sizes="(min-width: 1024px) 35vw, 100vw"
                  fallbackLabel={product.title}
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            {product.badge ? (
              <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
                {product.badge}
              </span>
            ) : null}
            <h1 className="mt-4 text-4xl font-semibold tracking-tight">
              {product.title}
            </h1>
            <p className="mt-3 text-slate-500">{product.label}</p>
            <div className="mt-6">
              <p className="font-mono text-2xl font-semibold">
                {formatCurrency(product.priceEUR, "EUR")}
              </p>
              <p className="mt-1 font-mono text-sm text-slate-500">
                {formatCurrency(product.priceBGN, "BGN")}
              </p>
            </div>

            <ProductDetailActions product={product} />

            <div className="mt-8 divide-y divide-slate-200 rounded-lg border border-slate-200">
              {[
                ["Доставка", "До 24/48 часа с преглед и тест преди плащане."],
                ["Връщане", "14 дни за замяна на размер или връщане."],
                ["Материя", "Подбрана за движение, често носене и лесна поддръжка."],
              ].map(([title, text]) => (
                <div key={title} className="p-4">
                  <h3 className="text-sm font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {related.length ? (
          <section className="mt-16 rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <h2 className="text-3xl font-semibold tracking-tight">
              Подобни продукти
            </h2>
            <div className="mt-8 grid gap-x-5 gap-y-10 sm:grid-cols-3">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} compact />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}
