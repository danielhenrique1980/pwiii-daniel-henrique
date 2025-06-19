import { FaLinkedin, FaEnvelope, FaInstagram, FaGithub, FaWhatsapp } from 'react-icons/fa';

export default function ContatoPage() {
  return (
    <>
      {/* Faixa azul de ponta a ponta */}
      <div className="w-full bg-blue-600 text-white p-4 mb-6">
        <h1 className="text-xl font-bold text-center">Contatos</h1>
      </div>

      {/* Container geral centralizado */}
      <div className="flex justify-center">
        {/* Retângulo cinza limitado apenas ao conteúdo */}
        <main className="bg-gray-100 p-6 rounded max-w-md w-full">
          <ul className="space-y-6">
            <li className="flex items-center gap-4">
              <FaLinkedin className="text-blue-700" size={24} />
              <a
                href="https://www.linkedin.com/in/daniel-henrique-bb7567142?utm_source"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-blue-700"
              >
                linkedin.com/in/daniel-henrique
              </a>
            </li>

            <li className="flex items-center gap-4">
              <FaEnvelope className="text-red-600" size={24} />
              <a
                href="mailto:danhenri2015@gmail.com"
                className="text-gray-800 hover:text-red-600"
              >
                danhenri2015@gmail.com
              </a>
            </li>

            <li className="flex items-center gap-4">
              <FaInstagram className="text-pink-500" size={24} />
              <a
                href="https://www.instagram.com/babydontgo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-pink-500"
              >
                @babydontgo
              </a>
            </li>

            <li className="flex items-center gap-4">
              <FaGithub className="text-gray-800" size={24} />
              <a
                href="https://github.com/danielhenrique1980"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-900"
              >
                github.com/danielhenrique1980
              </a>
            </li>

            {/* Novo item WhatsApp */}
            <li className="flex items-center gap-4">
              <FaWhatsapp className="text-green-500" size={24} />
              <a
                href="https://wa.me/5511973676096"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-green-500"
              >
                Entrar em contato com o Daniel
              </a>
            </li>
          </ul>
        </main>
      </div>
    </>
  );
}

