import Link from "next/link";

export default function Home() {
  return (
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
  );
}
