import Head from 'next/head';
import Navbar from './components/NavBar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Meu Portifólio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <main className="p-6">
        {/* Sobre */}
        <section id="sobre" className="mb-10">
          <h1 className="text-3xl font-bold">Olá! Eu sou o Daniel Henrique</h1>
          <p className="mt-2 text-gray-700">
            Desenvolvedor em formação. Estou me aprofundando no mundo dos códigos!
          </p>
        </section>

        {/* Projetos */}
        <section id="projetos" className="mb-10 bg-gray-100 p-6 rounded">
          <h2 className="text-2xl font-semibold mb-4">Meus Projetos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Projeto Login */}
            <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
              <img
                src="/login.jpg"
                alt="Tela de Login"
                className="rounded mb-4 w-full h-56 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Tela de Login</h3>
              <p className="text-gray-700 mb-2">
                Projeto de interface de autenticação com foco em responsividade e usabilidade.
              </p>
              </div>

            {/* Projeto Dashboard */}
            <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
              <img
                src="/dashboard.jpg"
                alt="Dashboard"
                className="rounded mb-4 w-full h-56 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Dashboard</h3>
              <p className="text-gray-700 mb-2">
                Interface de painel administrativo, com foco em dados, gráficos e navegação intuitiva.
              </p>
              </div>
          </div>
        </section>
      </main>
    </>
  );
}
