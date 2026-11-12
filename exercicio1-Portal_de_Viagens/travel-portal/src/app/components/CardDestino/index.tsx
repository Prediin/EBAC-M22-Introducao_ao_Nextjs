import Image from "next/image";

export type Destino = {
  id: string;
  nome: string;
  localizacao: string;
  descricao: string;
  imagem: string;
  imagemAlt: string;
  preco: number;
  avaliacao: number;
};

export type CardDestinoProps = {
  destino: Destino;
};

const formatarPreco = (preco: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(preco);

const CardDestino = ({ destino }: CardDestinoProps) => {
  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        <Image
          src={destino.imagem}
          alt={destino.imagemAlt}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 25vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <h3 className="text-xl font-bold tracking-tight text-slate-900">{destino.nome}</h3>
        <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
          <p className="font-bold text-teal-800">{formatarPreco(destino.preco)}</p>
          <p className="font-semibold text-amber-700" aria-label={`Avaliação ${destino.avaliacao} de 5`}>{destino.avaliacao.toLocaleString("pt-BR")}/5</p>
        </div>
        <p className="text-sm font-medium text-slate-500">{destino.localizacao}</p>
        <p className="text-sm leading-relaxed text-slate-600">{destino.descricao}</p>
      </div>
    </article>
  );
};

export default CardDestino;
