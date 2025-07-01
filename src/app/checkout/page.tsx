import Link from "next/link";

const carrinho = [
  {
    id: "1",
    nome: "Anel de Ouro 18k",
    preco: 1999.9,
    imagem: "/globe.svg",
    quantidade: 1,
  },
];

export default function CheckoutPage() {
  const total = carrinho.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );
  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8">Finalizar Compra</h2>
      <ul className="divide-y divide-gray-200 mb-8">
        {carrinho.map((item) => (
          <li key={item.id} className="flex items-center gap-4 py-4">
            <img
              src={item.imagem}
              alt={item.nome}
              className="w-16 h-16 object-contain rounded"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{item.nome}</h3>
              <p className="text-gray-600">Qtd: {item.quantidade}</p>
            </div>
            <span className="font-semibold">R$ {item.preco.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center mb-6">
        <span className="text-xl font-bold">Total:</span>
        <span className="text-2xl font-bold">R$ {total.toFixed(2)}</span>
      </div>
      <button className="w-full bg-black text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition mb-4">
        Pagar com Mercado Pago
      </button>
      <Link
        href="/carrinho"
        className="block text-center text-blue-600 hover:underline"
      >
        Voltar ao carrinho
      </Link>
    </main>
  );
}
