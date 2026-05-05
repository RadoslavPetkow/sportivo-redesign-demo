import Link from "next/link";
import { CartDrawer } from "@/components/cart-drawer";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm shadow-slate-950/[0.05] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-950 text-sm font-black text-white">
            VA
          </span>
          <span className="truncate text-xs font-bold uppercase tracking-[0.14em] text-slate-950 sm:text-sm sm:tracking-[0.18em]">
            Vitosha Active
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <Link className="transition hover:text-slate-950" href="/products?category=new">
            Нови
          </Link>
          <Link className="transition hover:text-slate-950" href="/products?category=men">
            Мъже
          </Link>
          <Link className="transition hover:text-slate-950" href="/products?category=women">
            Жени
          </Link>
          <Link className="transition hover:text-slate-950" href="/products?category=kids">
            Деца
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/products"
            className="flex h-10 items-center rounded-full bg-teal-700 px-3 text-xs font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-slate-950 sm:h-11 sm:px-5 sm:text-sm"
          >
            Пазарувай
          </Link>
          <CartDrawer />
        </div>
      </div>
      <nav className="mx-auto flex max-w-7xl gap-2 overflow-x-auto border-t border-slate-100 px-4 py-2 text-sm font-semibold text-slate-600 sm:px-6 md:hidden">
        <Link
          className="shrink-0 rounded-full px-3 py-1.5 transition hover:bg-slate-100 hover:text-slate-950"
          href="/products?category=new"
        >
          Нови
        </Link>
        <Link
          className="shrink-0 rounded-full px-3 py-1.5 transition hover:bg-slate-100 hover:text-slate-950"
          href="/products?category=men"
        >
          Мъже
        </Link>
        <Link
          className="shrink-0 rounded-full px-3 py-1.5 transition hover:bg-slate-100 hover:text-slate-950"
          href="/products?category=women"
        >
          Жени
        </Link>
        <Link
          className="shrink-0 rounded-full px-3 py-1.5 transition hover:bg-slate-100 hover:text-slate-950"
          href="/products?category=kids"
        >
          Деца
        </Link>
      </nav>
    </header>
  );
}
