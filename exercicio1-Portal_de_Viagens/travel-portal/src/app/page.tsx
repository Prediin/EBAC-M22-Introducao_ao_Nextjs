import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-start justify-center gap-7 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <p className="max-w-3xl text-2xl font-semibold leading-snug tracking-tight text-slate-900 sm:text-4xl sm:leading-tight lg:text-5xl">
        Encontre destinos incríveis, inspire-se para sua próxima aventura e
        planeje viagens inesquecíveis pelo mundo.
      </p>
      <Link href="/destinos" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-teal-700 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 sm:text-base">
        Conheça nossos destinos
      </Link>
    </main>
  );
}
