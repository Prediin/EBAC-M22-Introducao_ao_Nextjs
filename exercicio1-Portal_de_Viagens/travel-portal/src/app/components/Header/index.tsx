import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 py-5 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-8 lg:px-8">
        <div className="min-w-0">
          <Link href="/" aria-label="Travel Portal - início" className="inline-flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700">
            <Image src="/travel-portal-icon.svg" alt="" width={48} height={48} className="h-11 w-11 shrink-0" />
            <h1 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">Travel Portal</h1>
          </Link>
          <h2 className="mt-1 text-sm leading-relaxed text-slate-500 sm:text-base">Seu portal de viagens para todo o mundo.</h2>
        </div>
        <nav aria-label="Navegação principal" className="flex flex-wrap items-center gap-2 sm:gap-3">
          <Link href="/" className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-teal-800 focus-visible:outline-2 focus-visible:outline-teal-700">Início</Link>
          <Link href="/destinos" className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-teal-800 focus-visible:outline-2 focus-visible:outline-teal-700">Destinos</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
