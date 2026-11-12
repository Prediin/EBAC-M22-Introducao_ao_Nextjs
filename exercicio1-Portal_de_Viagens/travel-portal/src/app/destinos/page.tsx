import CardDestino from "../components/CardDestino";
import { destinos } from "../../types/destinos";

export default function Destinos() {
  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <h2 className="mb-8 text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:mb-10 sm:text-3xl lg:text-4xl">OS MELHORES DESTINOS DA AMÉRICA LATINA</h2>
      <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:gap-8 xl:grid-cols-4">
        {destinos.map((destino) => (
          <CardDestino key={destino.id} destino={destino} />
        ))}
      </div>
    </main>
  );
}
