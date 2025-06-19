export default function ProjetosPage() {
  return (
    <>
      {/* Faixa azul no topo */}
      <div className="w-full bg-blue-600 text-white p-4 mb-6">
        <h1 className="text-xl font-bold text-center">Meus Projetos</h1>
      </div>

      {/* Conteúdo principal */}
      <main className="bg-gray-100 p-6 rounded max-w-2xl mx-auto shadow">
        {/* Centralizar o card */}
        <div className="bg-white p-6 rounded shadow mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-center">Projeto de TCC</h2>
          <p className="mb-6 text-gray-700 text-justify">
            Projeto de conclusão de curso focado na otimização do processo de ensino e aprendizado no ambiente escolar, usando <strong>Next.js</strong> e <strong>TypeScript</strong>, incluindo integração de videoconferência usando a API do <strong>Jitsi Meet</strong>. 
            A <strong>Monitoria Digital Educacional</strong> é mais que um software; é uma ponte para um aprendizado mais acessível e eficaz.
            Acreditamos no potencial da tecnologia como uma poderosa aliada da educação, capaz de derrubar barreiras e transformar o futuro dos estudantes.
          </p>
          <div className="text-center">
            <a
              href="https://monitoria-digital1-0.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              Ver Detalhes
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
