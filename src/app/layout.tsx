import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Eternity Joias",
  description: "Eternity Joias",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-zinc-50 min-h-screen">
        {/* Topbar de aviso */}
        <div className="w-full bg-black text-white text-center text-sm py-2">
          Ganhe frete grátis nas compras acima de R$ 1.000,00
        </div>
        {/* Header principal */}
        <header className="bg-zinc-900 text-white px-4 py-3 flex items-center gap-4 justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 text-2xl font-bold">
            <span className="text-yellow-500">&#x1F48E;</span>{" "}
            {/* Ícone de joia */}
            Eternity <span className="font-light text-base ml-1">Joias</span>
          </div>
          {/* Barra de busca */}
          <form className="flex-1 max-w-xl mx-8">
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full rounded-lg px-4 py-2 text-black focus:outline-none"
            />
          </form>
          {/* Ícones */}
          <div className="flex items-center gap-4 text-xl">
            <button title="Login" className="hover:text-yellow-400">
              <span>&#128100;</span>
            </button>
            <button title="Carrinho" className="relative hover:text-yellow-400">
              <span>&#128722;</span>
              <span className="absolute -top-2 -right-2 bg-green-500 text-xs rounded-full px-1">
                0
              </span>
            </button>
          </div>
        </header>
        {/* Menu de categorias */}
        <nav className="bg-white border-b border-zinc-200 px-4">
          <ul className="flex gap-6 justify-center py-3 text-zinc-700 font-medium text-base">
            <li>
              <Link href="/produtos" className="hover:text-yellow-600">
                <span className="hover:text-yellow-600">Divinus</span>
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-600">
                Anéis
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-600">
                Brincos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-600">
                Colares
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-600">
                Infantis
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-600">
                Pingentes
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-600">
                Pulseiras
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-600">
                Personalizados
              </a>
            </li>
          </ul>
        </nav>
        {/* Conteúdo principal */}
        <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>

        {/* Footer principal */}
        <footer className="bg-zinc-900 text-white pt-12 pb-4 mt-8">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
            {/* Coluna 1: Logo e contato */}
            <div>
              <div className="flex items-center gap-2 text-2xl font-bold mb-4">
                <span className="text-yellow-500">&#x1F48E;</span>
                Eternity{" "}
                <span className="font-light text-base ml-1">Joias</span>
              </div>
              <div className="mb-2 flex items-center gap-2">
                <span>📱</span> (81) 98169-6386
              </div>
              <div className="mb-2 flex items-center gap-2">
                <span>✉️</span> eternityjoalheria@gmail.com
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2 mt-2"
              >
                <span>WhatsApp</span> <span className="text-xl">🟢</span>
              </a>
              <div className="mt-4">SIGA-NOS</div>
              <div className="flex gap-2 mt-2">
                <a href="#" className="text-pink-500 text-2xl">
                  &#x1F47D;
                </a>
                <a href="#" className="text-green-500 text-2xl">
                  &#x1F4F1;
                </a>
              </div>
            </div>
            {/* Coluna 2: Links institucionais */}
            <div>
              <div className="font-bold mb-2">Sobre a loja</div>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Políticas de Troca e devolução
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Política de privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Termos e condições
                  </a>
                </li>
              </ul>
            </div>
            {/* Coluna 3: Links cliente */}
            <div>
              <div className="font-bold mb-2">Minha conta</div>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Histórico de pedidos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Lista de desejos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Produtos em promoção
                  </a>
                </li>
              </ul>
            </div>
            {/* Coluna 4: Newsletter e selo */}
            <div>
              <div className="font-bold mb-2">
                Receba as novidades por email
              </div>
              <form className="flex gap-2 mb-4">
                <input
                  type="email"
                  placeholder="Endereço de email"
                  className="rounded px-2 py-1 text-black flex-1"
                />
                <button className="bg-yellow-400 text-black px-3 py-1 rounded font-semibold">
                  Inscrever-se
                </button>
              </form>
              <div className="mt-4">
                <div className="text-xs mb-1">Compre com segurança</div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🔒</span>
                  <span className="text-xs">
                    SEGUR0
                    <br />
                    CERTIFICADO SSL
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Barra inferior */}
          <div className="border-t border-zinc-700 pt-4 text-xs flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4">
            <div>
              Copyright © 2025 Eternity Joias - Todos os direitos reservados.
              Eternity Joias eternityjoias.com.br
            </div>
            <div className="flex gap-4 mt-2 md:mt-0">
              <a href="#" className="hover:underline">
                Termos e condições
              </a>
              <a href="#" className="hover:underline">
                Política de privacidade
              </a>
              <a href="#" className="hover:underline">
                Cookies
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
