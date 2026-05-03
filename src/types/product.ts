export type Product = {
  id: string;
  slug: string;
  name: string;
  category: "men" | "women" | "kids";
  label: string;
  priceEur: number;
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
