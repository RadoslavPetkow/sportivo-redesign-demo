export type Product = {
  id: string;
  slug: string;
  title: string;
  category: "men" | "women" | "kids";
  label: string;
  isNew: boolean;
  isPromo: boolean;
  isBestseller: boolean;
  priceEUR: number;
  priceBGN: number;
  compareAtEur?: number;
  image: string;
  images: string[];
  sizes: string[];
  badge?: "Ново" | "Промо" | "Бестселър";
  colors: string[];
};

export type Category = {
  title: string;
  subtitle: string;
  href: string;
  image: string;
};
