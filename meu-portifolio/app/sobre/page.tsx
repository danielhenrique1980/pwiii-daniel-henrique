export default function SobrePage() {
  return (
    <>
      {/* Faixa azul no topo */}
      <div className="w-full bg-blue-600 text-white p-4 mb-6">
        <h1 className="text-xl font-bold text-center">Sobre Mim</h1>
      </div>

      {/* Conteúdo principal */}
      <main className="bg-gray-100 p-6 rounded max-w-3xl mx-auto shadow">

        {/* Foto com efeito */}
        <div className="flex justify-center mb-6">
          <div className="relative group">
            {/* Borda com gradiente */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-75 blur-sm group-hover:blur-md group-hover:opacity-100 transition"></div>

            {/* Foto */}
            <img
              src="/Foto.jpg" // coloque sua imagem na pasta /public
              alt="Foto de Daniel Henrique"
              className="relative w-40 h-40 rounded-full object-cover shadow-lg border-4 border-white group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Texto de apresentação */}
        <div className="text-justify text-gray-800">
          <p className="mb-4">
            Sou estudante e entusiasta na área de <strong>Desenvolvimento de Sistemas</strong>, em constante busca por conhecimento e aperfeiçoamento técnico. Ao longo do meu aprendizado, venho conhecendo diferentes linguagens de programação e descobrindo o quanto esse universo me encanta. Cada linha de código representa uma nova possibilidade de criar soluções e transformar ideias em realidade.
          </p>

          <p className="mb-4">
            Tenho dedicado meus estudos principalmente ao <strong>desenvolvimento web</strong>, mas venho aprofundando cada vez mais meu interesse pela <strong>área de dados</strong>, onde desejo evoluir e me especializar. Mais do que entender a lógica dos sistemas, acredito que dominar o ciclo completo — do desenvolvimento ao entendimento, análise e manipulação dos dados — é fundamental para construir aplicações inteligentes, eficientes e com real impacto.
          </p>

          <p className="mb-4">
            Esse direcionamento para a área de dados não é por acaso. Desde <strong>2007</strong>, atuo profissionalmente na área de <strong>prevenção à fraudes</strong>, o que me despertou ainda mais o interesse por soluções que utilizam dados de forma estratégica. Meu objetivo é enriquecer minhas habilidades técnicas para aplicar esse conhecimento no desenvolvimento de sistemas e análises que possam fortalecer a <strong>detecção e mitigação de fraudes</strong>, contribuindo diretamente para a segurança e a integridade dos processos e negócios.
          </p>

          <p>
            Meu foco está em <strong>aprender sempre</strong>, acompanhar as tendências do mercado e construir uma base sólida para atuar como <strong>desenvolvedor</strong> e, futuramente, como <strong>especialista em dados</strong>, utilizando tecnologia de forma ética e eficiente na proteção contra fraudes e no desenvolvimento de soluções inovadoras.
          </p>
        </div>
      </main>
    </>
  );
}

