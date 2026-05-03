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
          <Link className="transition hover:text-slate-950" href="/products">
            Нови
          </Link>
          <Link className="transition hover:text-slate-950" href="/products">
            Мъже
          </Link>
          <Link className="transition hover:text-slate-950" href="/products">
            Жени
          </Link>
          <Link className="transition hover:text-slate-950" href="/products">
            Деца
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/products"
            className="hidden h-11 items-center rounded-full bg-teal-700 px-5 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-slate-950 sm:flex"
          >
            Пазарувай
          </Link>
          <CartDrawer />
        </div>
      </div>
    </header>
  );
}
