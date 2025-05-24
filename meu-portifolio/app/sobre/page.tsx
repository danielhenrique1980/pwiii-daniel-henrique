export default function SobrePage() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Faixa azul de ponta a ponta */}
      <div className="bg-blue-600 text-white py-6 px-4">
        <h1 className="text-3xl font-bold text-center">Sobre mim</h1>
      </div>

      {/* Retângulo centralizado com fundo cinza claro */}
      <div className="max-w-3xl mx-auto mt-10 bg-white shadow-md rounded p-6">
        <p className="text-gray-800 text-lg text-justify">
          Sou estudante e entusiasta na área de Desenvolvimento de Sistemas, em constante busca por conhecimento e aperfeiçoamento técnico. Ao longo do meu aprendizado, venho conhecendo diferentes linguagens de programação e descobrindo o quanto esse universo me encanta. Cada linha de código representa uma nova possibilidade de criar soluções e transformar ideias em realidade.
Tenho dedicado meus estudos principalmente ao desenvolvimento web, mas venho aprofundando também meu interesse pela área de dados, onde desejo evoluir ainda mais. Acredito que dominar o ciclo completo, do desenvolvimento ao entendimento e manipulação dos dados, é essencial para construir aplicações mais inteligentes, eficientes e com real impacto.
Meu foco está em aprender sempre, acompanhar as tendências do mercado e construir uma base sólida para atuar como desenvolvedor e, futuramente, especialista em dados. 
        </p>
      </div>
    </main>
  );
}

