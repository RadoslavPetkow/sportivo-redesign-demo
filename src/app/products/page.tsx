import { ProductListing } from "@/components/product-listing";
import { products } from "@/data/products";

type ProductsPageProps = {
  searchParams: Promise<{
    category?: string;
    filter?: string;
    size?: string;
    sort?: string;
  }>;
};

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;

  return (
    <ProductListing
      products={products}
      initialCategory={params.category}
      initialFilter={params.filter}
      initialSize={params.size}
      initialSort={params.sort}
    />
  );
}
