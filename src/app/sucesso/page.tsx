import Link from "next/link";

export default function SucessoPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-green-50">
      <div className="max-w-md w-full px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4 text-green-700">
          Compra realizada com sucesso!
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Obrigado por confiar em nossa joalheria. Seu pedido está sendo
          processado.
        </p>
        <Link href="/produtos">
          <span className="inline-block bg-black text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition">
            Ver mais produtos
          </span>
        </Link>
      </div>
    </main>
  );
}
