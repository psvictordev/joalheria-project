import Link from "next/link";

export default function ErroPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-red-50">
      <div className="max-w-md w-full px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4 text-red-700">
          Ocorreu um erro no pagamento
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Não foi possível concluir sua compra. Tente novamente ou entre em
          contato.
        </p>
        <Link href="/carrinho">
          <span className="inline-block bg-black text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition">
            Voltar ao carrinho
          </span>
        </Link>
      </div>
    </main>
  );
}
