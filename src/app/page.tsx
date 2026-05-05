import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ProductCard } from "@/components/product-card";
import { bestsellers, categories, heroImage, newArrivals } from "@/data/products";

const trustItems = [
  {
    icon: "delivery",
    title: "Доставка 24/48 ч.",
    text: "Бърза доставка до офис или адрес в цялата страна.",
  },
  {
    icon: "payment",
    title: "Наложен платеж",
    text: "Плащаш при доставка, след като провериш поръчката.",
  },
  {
    icon: "return",
    title: "14 дни връщане",
    text: "Лесна замяна на размер или връщане без напрежение.",
  },
  {
    icon: "test",
    title: "Преглед и тест",
    text: "Проверяваш продукта преди плащане към куриера.",
  },
];

const reviews = [
  {
    name: "Мария, София",
    text: "Бърза доставка и размерът беше точен.",
  },
  {
    name: "Иван, Пловдив",
    text: "Материята е удобна, а поръчката стана лесно.",
  },
  {
    name: "Елица, Варна",
    text: "Хареса ми, че мога да прегледам преди плащане.",
  },
];

const reasons = [
  {
    icon: "delivery",
    title: "Бърза доставка 24/48 ч.",
    text: "До офис или адрес.",
  },
  {
    icon: "payment",
    title: "Плащане при доставка",
    text: "Без излишен риск.",
  },
  {
    icon: "return",
    title: "14 дни връщане",
    text: "Лесна замяна на размер.",
  },
  {
    icon: "test",
    title: "Преглед и тест",
    text: "Преди плащане.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <Hero />
      <TrustBar />
      <FeaturedCategories />
      <ProductSection
        eyebrow="Нови попълнения"
        title="Свежи модели за тренировка, път и свободно време"
        cta="Виж всички нови"
        products={newArrivals}
      />
      <BestsellerSection />
      <WhyChooseUs />
      <ReviewsSection />
      <PromoBanner />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[560px] overflow-hidden bg-slate-950 sm:min-h-[620px]">
      <Image
        src={heroImage}
        alt="Спортна тренировка с премиум спортно облекло"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-65"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/72 to-slate-950/20" />
      <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-end px-4 pb-12 pt-24 sm:min-h-[620px] sm:px-6 sm:pb-14 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur">
            Български спортен стил
          </p>
          <h1 className="text-4xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Облекло, което изглежда уверено преди първата крачка.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/78 sm:text-lg">
            Премиум e-commerce концепция за спортни дрехи с ясни категории,
            силни продуктови кадри и покупка без напрежение.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products"
              className="flex h-14 items-center justify-center rounded-md bg-teal-500 px-8 text-sm font-black uppercase tracking-[0.12em] text-white shadow-xl shadow-teal-950/30 transition duration-200 hover:-translate-y-0.5 hover:scale-[1.01] hover:bg-white hover:text-slate-950"
            >
              Пазарувай сега
            </Link>
            <Link
              href="/products?category=new"
              className="flex h-14 items-center justify-center rounded-md border border-white/35 px-7 text-sm font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-slate-950"
            >
              Виж новите модели
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="border-b border-slate-200 bg-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
            >
              <Icon name={item.icon} />
              <div>
                <p className="text-sm font-bold tracking-tight text-slate-950">
                  {item.title}
                </p>
                <p className="mt-1 text-sm leading-5 text-slate-600">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Icon({ name }: { name: string }) {
  const paths: Record<string, ReactNode> = {
    delivery: (
      <>
        <path d="M4 7h9v8H4z" />
        <path d="M13 10h3l3 3v2h-6z" />
        <path d="M7 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
        <path d="M17 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
      </>
    ),
    payment: (
      <>
        <path d="M4 7h16v10H4z" />
        <path d="M4 10h16" />
        <path d="M8 14h4" />
      </>
    ),
    return: (
      <>
        <path d="M7 7h8a5 5 0 1 1 0 10H8" />
        <path d="M7 7l3-3" />
        <path d="M7 7l3 3" />
      </>
    ),
    test: (
      <>
        <path d="M3 12s3-5 9-5 9 5 9 5-3 5-9 5-9-5-9-5z" />
        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      </>
    ),
  };

  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700 ring-1 ring-teal-100">
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.9"
      >
        {paths[name]}
      </svg>
    </span>
  );
}

function FeaturedCategories() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
            Избери посока
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Категории, които водят към покупка
          </h2>
        </div>
        <Link
          href="/products"
          className="text-sm font-semibold text-slate-500 transition hover:text-teal-700"
        >
          Всички категории
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.title}
            href={category.href}
            className="group relative min-h-[340px] overflow-hidden rounded-lg bg-slate-950 sm:min-h-[420px]"
          >
            <Image
              src={category.image}
              alt={category.title}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover opacity-78 transition duration-500 group-hover:scale-105 group-hover:opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <h3 className="text-3xl font-semibold tracking-tight">
                {category.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-6 text-white/82">
                {category.subtitle}
              </p>
              <span className="mt-5 inline-flex h-10 items-center rounded-md bg-white px-4 text-sm font-semibold text-slate-950 transition group-hover:bg-teal-500 group-hover:text-white">
                Пазарувай
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function ProductSection({
  eyebrow,
  title,
  cta,
  products,
}: {
  eyebrow: string;
  title: string;
  cta: string;
  products: typeof newArrivals;
}) {
  return (
    <section id="new" className="bg-slate-100 py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/[0.03] sm:p-6 lg:p-8">
        <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
              {eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h2>
          </div>
          <Link
            href="/products?category=new"
            className="h-11 rounded-md border border-slate-300 px-5 py-3 text-center text-sm font-semibold transition hover:border-slate-950"
          >
            {cta}
          </Link>
        </div>
        <div className="grid gap-x-5 gap-y-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}

function BestsellerSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.92fr_1.4fr] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
            Най-търсени
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Бестселъри с ясна цена и лесен избор на размер
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600">
            Подреждане с фокус върху реалната покупка: видим размер, двойна
            валута, кратки ползи и бързо добавяне без разсейване.
          </p>
          <Link
            href="/products?filter=bestseller"
            className="mt-7 inline-flex h-12 items-center rounded-md bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-teal-700"
          >
            Виж бестселърите
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} compact />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="bg-slate-100 py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
              Спокойна поръчка
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Защо да избереш нас
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-600">
            Ясни условия, бързо обслужване и покупка без излишен риск.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
            >
              <Icon name={reason.icon} />
              <h3 className="mt-4 text-base font-bold tracking-tight text-slate-950">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {reason.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section className="bg-slate-100 py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
              Отзиви
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Малки детайли, които правят поръчката спокойна
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-600">
            Кратки отзиви за усещането, доставката и доверието при покупка.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="font-mono text-sm font-bold tracking-[0.08em] text-teal-700">
                ★★★★★
              </p>
              <p className="mt-4 text-base leading-7 text-slate-800">
                “{review.text}”
              </p>
              <p className="mt-5 text-sm font-semibold text-slate-950">
                {review.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PromoBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid overflow-hidden rounded-lg bg-slate-950 text-white lg:grid-cols-[1.1fr_0.9fr]">
        <div className="p-8 sm:p-10 lg:p-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
            Седмична оферта
          </p>
          <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-5xl">
            До 20% по-ниска цена за избрани сетове.
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-6 text-white/78 sm:text-base">
            Комбинирай горнище и долнище, провери размера при доставка и плати
            само когато всичко е наред.
          </p>
          <Link
            href="/products?filter=promo"
            className="mt-8 inline-flex h-12 items-center rounded-md bg-teal-600 px-7 text-sm font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-slate-950"
          >
            Пазарувай промо
          </Link>
        </div>
        <div className="relative min-h-[320px]">
          <Image
            src="https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?auto=format&fit=crop&w=1400&q=85"
            alt="Спортен сет в промо кампания"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-9 px-4 py-12 sm:px-6 md:grid-cols-5 lg:px-8">
        <div className="md:col-span-2">
          <p className="text-sm font-bold uppercase tracking-[0.18em]">
            Vitosha Active
          </p>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
            Демонстрационен редизайн за български sportswear магазин с
            по-чиста структура, по-силно доверие и по-ясен път към поръчка.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Магазин</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            <Link href="/products?category=new">Нови продукти</Link>
            <Link href="/products?filter=promo">Промоции</Link>
            <Link href="/products?size=M">Размери</Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Помощ</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            <span>Доставка 24/48 ч.</span>
            <span>Връщане до 14 дни</span>
            <span>Наложен платеж</span>
            <span>Преглед и тест</span>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Контакт</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            <span>hello@vitosha-active.demo</span>
            <span>+359 88 000 0000</span>
            <span>Пон-Пет, 9:00-18:00</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
