import { notFound } from "next/navigation";
import Link from "next/link";

const produtos = [
  {
    id: "1",
    nome: "Anel de Ouro 18k",
    preco: 1999.9,
    imagem: "/globe.svg",
    slug: "anel-ouro-18k",
    descricao: "Anel clássico em ouro 18k, perfeito para ocasiões especiais.",
  },
  {
    id: "2",
    nome: "Colar de Diamantes",
    preco: 3499.0,
    imagem: "/vercel.svg",
    slug: "colar-diamantes",
    descricao: "Colar elegante com diamantes naturais lapidados.",
  },
];

export default function ProdutoPage({ params }: { params: { slug: string } }) {
  const produto = produtos.find((p) => p.slug === params.slug);
  if (!produto) return notFound();

  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <img
          src={produto.imagem}
          alt={produto.nome}
          className="w-64 h-64 object-contain rounded-lg shadow"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{produto.nome}</h1>
          <p className="text-lg text-gray-700 mb-4">{produto.descricao}</p>
          <p className="text-2xl font-semibold mb-6">
            R$ {produto.preco.toFixed(2)}
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
      <div className="mt-8">
        <Link href="/produtos" className="text-blue-600 hover:underline">
          Voltar para produtos
        </Link>
      </div>
    </main>
  );
}
