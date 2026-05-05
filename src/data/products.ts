import type { Category, Product } from "@/types/product";

export const eurToBgnRate = 1.95583;

const bgn = (priceEUR: number) => Number((priceEUR * eurToBgnRate).toFixed(2));

export const formatCurrency = (amount: number, currency: "EUR" | "BGN") =>
  new Intl.NumberFormat("bg-BG", {
    style: "currency",
    currency,
    maximumFractionDigits: currency === "BGN" ? 2 : 0,
  }).format(amount);

export const heroImage =
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=2200&q=85";

export const fallbackProductImage =
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=85";

export const categories: Category[] = [
  {
    title: "Мъже",
    subtitle: "Тренировъчни сетове, тениски и долнища",
    href: "/products?category=men",
    image:
      "https://images.unsplash.com/photo-1517963628607-235ccdd5476c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Жени",
    subtitle: "Леки материи, чист силует и движение",
    href: "/products?category=women",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Деца",
    subtitle: "Удобство за училище, спорт и уикенд",
    href: "/products?category=kids",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=85",
  },
];

export const products: Product[] = [
  {
    id: "va-01",
    slug: "tehnicheska-teniska-peakflow",
    title: "Техническа тениска PeakFlow",
    category: "men",
    label: "Лека материя",
    isNew: true,
    isPromo: false,
    isBestseller: false,
    priceEUR: 34,
    priceBGN: bgn(34),
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=85",
    ],
    sizes: ["S", "M", "L", "XL"],
    badge: "Ново",
    colors: ["черно", "тъмносиньо", "сиво"],
  },
  {
    id: "va-02",
    slug: "damski-klin-motion",
    title: "Дамски клин Motion",
    category: "women",
    label: "Висока талия",
    isNew: false,
    isPromo: true,
    isBestseller: true,
    priceEUR: 42,
    priceBGN: bgn(42),
    compareAtEur: 52,
    image:
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=85",
    ],
    sizes: ["XS", "S", "M", "L"],
    badge: "Промо",
    colors: ["графит", "маслено зелено"],
  },
  {
    id: "va-03",
    slug: "unisex-suetshart-nord",
    title: "Unisex суетшърт Nord",
    category: "men",
    label: "Плътен памук",
    isNew: false,
    isPromo: false,
    isBestseller: true,
    priceEUR: 59,
    priceBGN: bgn(59),
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=1200&q=85",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "Бестселър",
    colors: ["екрю", "черно"],
  },
  {
    id: "va-04",
    slug: "detski-ekip-sprint",
    title: "Детски екип Sprint",
    category: "kids",
    label: "Комплект 2 части",
    isNew: true,
    isPromo: false,
    isBestseller: false,
    priceEUR: 49,
    priceBGN: bgn(49),
    image:
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1200&q=85",
    ],
    sizes: ["116", "128", "140", "152"],
    badge: "Ново",
    colors: ["синьо", "черно"],
  },
  {
    id: "va-05",
    slug: "yake-rainline",
    title: "Леко яке Rainline",
    category: "women",
    label: "Ветроустойчиво",
    isNew: false,
    isPromo: true,
    isBestseller: false,
    priceEUR: 74,
    priceBGN: bgn(74),
    compareAtEur: 89,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1551489186-cf8726f514f8?auto=format&fit=crop&w=1200&q=85",
    ],
    sizes: ["S", "M", "L"],
    badge: "Промо",
    colors: ["теал", "черно"],
  },
  {
    id: "va-06",
    slug: "jogger-dolnishte-axis",
    title: "Jogger долнище Axis",
    category: "men",
    label: "Меко отвътре",
    isNew: false,
    isPromo: false,
    isBestseller: false,
    priceEUR: 45,
    priceBGN: bgn(45),
    image:
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1200&q=85",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["черно", "каменносиво"],
  },
  {
    id: "va-07",
    slug: "damski-suetshart-aura",
    title: "Дамски суетшърт Aura",
    category: "women",
    label: "Мек памук",
    isNew: true,
    isPromo: false,
    isBestseller: false,
    priceEUR: 56,
    priceBGN: bgn(56),
    image:
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1551489186-cf8726f514f8?auto=format&fit=crop&w=1200&q=85",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    badge: "Ново",
    colors: ["екрю", "сиво"],
  },
  {
    id: "va-08",
    slug: "mazhki-short-core",
    title: "Мъжки шорт Core",
    category: "men",
    label: "Бързосъхнещ",
    isNew: true,
    isPromo: true,
    isBestseller: false,
    priceEUR: 31,
    priceBGN: bgn(31),
    compareAtEur: 39,
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1517963628607-235ccdd5476c?auto=format&fit=crop&w=1200&q=85",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "Промо",
    colors: ["черно", "тъмносиньо"],
  },
  {
    id: "va-09",
    slug: "detska-teniska-play",
    title: "Детска тениска Play",
    category: "kids",
    label: "За всеки ден",
    isNew: false,
    isPromo: true,
    isBestseller: true,
    priceEUR: 24,
    priceBGN: bgn(24),
    compareAtEur: 29,
    image:
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=85",
    ],
    sizes: ["116", "128", "140", "152"],
    badge: "Бестселър",
    colors: ["бяло", "синьо"],
  },
  {
    id: "va-10",
    slug: "detsko-dolnishte-mini-axis",
    title: "Детско долнище Mini Axis",
    category: "kids",
    label: "Меко отвътре",
    isNew: true,
    isPromo: false,
    isBestseller: false,
    priceEUR: 35,
    priceBGN: bgn(35),
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=1200&q=85",
    ],
    sizes: ["116", "128", "140", "152"],
    badge: "Ново",
    colors: ["черно", "сиво"],
  },
];

export const newArrivals = products.filter((product) => product.isNew).slice(0, 4);
export const bestsellers = products.filter((product) => product.isBestseller).slice(0, 3);
