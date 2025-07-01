import Link from "next/link";

const produtos = [
  {
    id: "1",
    nome: "Anel de Ouro 18k",
    preco: 1999.9,
    imagem: "/globe.svg",
    slug: "anel-ouro-18k",
  },
  {
    id: "2",
    nome: "Colar de Diamantes",
    preco: 3499.0,
    imagem: "/vercel.svg",
    slug: "colar-diamantes",
  },
];

export default function ProdutosPage() {
  return (
    <main className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8">Nossas Joias</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {produtos.map((produto) => (
          <Link
            key={produto.id}
            href={`/produtos/${produto.slug}`}
            className="block bg-white rounded-lg shadow hover:shadow-lg transition p-4"
          >
            <img
              src={produto.imagem}
              alt={produto.nome}
              className="w-full h-48 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{produto.nome}</h3>
            <p className="text-lg text-gray-700 mb-2">
              R$ {produto.preco.toFixed(2)}
            </p>
            <span className="inline-block mt-2 text-sm text-blue-600 hover:underline">
              Ver detalhes
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
