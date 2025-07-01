import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-zinc-50 to-zinc-200">
        <div className="max-w-2xl w-full px-6 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
            Joalheria
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 mb-8">
            Descubra peças exclusivas para momentos inesquecíveis.
          </p>
          <Link href="/produtos">
            <span className="inline-block bg-black text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition">
              Ver Produtos
            </span>
          </Link>
        </div>
      </main>
      {/* Section de benefícios */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="rounded-2xl bg-white flex flex-col items-center justify-center p-8 shadow text-center">
          <span className="text-4xl mb-2">🚚</span>
          <h3 className="font-bold mb-2">RAPIDEZ NA ENTREGA</h3>
          <p className="text-zinc-600">
            Entrega para todo Brasil com frete grátis nas compras acima de R$
            1000,00
          </p>
        </div>
        <div className="rounded-2xl bg-yellow-200 flex flex-col items-center justify-center p-8 shadow text-center">
          <span className="text-4xl mb-2">🚚</span>
          <h3 className="font-bold mb-2">PAGAMENTO FÁCIL</h3>
          <p className="text-zinc-700">Pagamento em até 10x</p>
        </div>
        <div className="rounded-2xl bg-white flex flex-col items-center justify-center p-8 shadow text-center">
          <span className="text-4xl mb-2">🚚</span>
          <h3 className="font-bold mb-2">TROCA FÁCIL</h3>
          <p className="text-zinc-600">Você em até 7 dias para trocar</p>
        </div>
        <div className="rounded-2xl bg-yellow-200 flex flex-col items-center justify-center p-8 shadow text-center">
          <span className="text-4xl mb-2">🚚</span>
          <h3 className="font-bold mb-2">GARANTIA DIGITAL</h3>
          <p className="text-zinc-700">Compra Segura</p>
        </div>
      </section>
    </>
  );
}
