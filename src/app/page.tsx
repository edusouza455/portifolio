import dynamic from 'next/dynamic';

// Importa os componentes client-side de forma dinâmica (sem SSR)
const SmoothScrollWrapper = dynamic(
  () => import('./components/SmoothScrollWrapper'),
  { ssr: false }
);

const ClientNavWrapper = dynamic(
  () => import('./components/ClientNavWrapper'),
  { ssr: false }
);

export default function Home() {
  return (
    <SmoothScrollWrapper>
      <ClientNavWrapper />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header/Navegação */}
      <header className="container mx-auto p-6 flex justify-between items-center">
        <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-800">
          Eduardo Coutinho
        </div>
        <nav className="hidden md:flex space-x-8">
          <a
            href="#sobre"
            className="hover:text-blue-400 transition-colors"
          >
            Sobre
          </a>
          <a
            href="#habilidades"
            className="hover:text-blue-400 transition-colors"
          >
            Habilidades
          </a>
          <a
            href="#projetos"
            className="hover:text-blue-400 transition-colors"
          >
            Projetos
          </a>
          <a
            href="#contato"
            className="hover:text-blue-400 transition-colors"
          >
            Contato
          </a>
        </nav>
        {/* Dynamic import para o componente de menu mobile */}
        {typeof window !== 'undefined' && 
          <div className="md:hidden">
            {/* Placeholder para ser substituído pelo componente MobileNavigation quando cliente */}
            <div id="mobile-nav-container"></div>
          </div>
        }
      </header>

      {/* Seção de Introdução */}
      <section className="container mx-auto px-6 py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block">Olá, eu sou</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-800">
              Eduardo Coutinho
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-gray-300">
            Desenvolvedor Web
          </h2>
          <p className="text-lg mb-8 text-gray-300 max-w-md">
            Sou desenvolvedor web com sólida formação em Análise e Desenvolvimento
            de Sistemas, especializado em criar soluções digitais modernas,
            responsivas e com foco na experiência do usuário.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projetos"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-900 rounded-full text-center font-medium hover:opacity-90 transition-opacity"
            >
              Ver Projetos
            </a>
            <a
              href="#contato"
              className="px-6 py-3 border border-blue-500 rounded-full text-center font-medium hover:bg-blue-800/10 transition-all"
            >
              Entrar em Contato
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-500 to-blue-900 flex items-center justify-center text-3xl font-bold">
            EC
          </div>
        </div>
      </section>

      {/* Seção de Sobre */}
      <section id="sobre" className="bg-gray-900 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Sobre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-800">
              Mim
            </span>
          </h2>
          <div className="max-w-3xl mx-auto text-center text-gray-300">
            <p className="mb-6">
              Sou desenvolvedor web com sólida formação em Análise e Desenvolvimento
              de Sistemas, especializado em criar soluções digitais modernas,
              responsivas e com foco na experiência do usuário.
            </p>
            <p className="mb-6">
              Tenho experiência com tecnologias como React, Next.js, Django,
              WordPress e Docker, atuando tanto no front-end quanto no back-end.
              Busco sempre entender a real necessidade do cliente para entregar
              projetos funcionais, eficientes e bem pensados em cada detalhe.
            </p>
            <p>
              Com conhecimentos em UX/UI design, consigo aliar programação com
              usabilidade, garantindo que o resultado final seja intuitivo e
              eficaz. Estou sempre aprendendo e acompanhando tendências para
              oferecer o melhor da tecnologia web.
            </p>
          </div>
        </div>
      </section>

      {/* Seção de Habilidades */}
      <section id="habilidades" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center">
            Minhas{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-800">
              Habilidades
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card de Habilidade - Desenvolvimento Web */}
            <div className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">
                Desenvolvimento Web
              </h3>
              <p className="text-gray-300">
                Desenvolvimento de sites responsivos, modernos e otimizados para
                SEO. Experiência com React, Next.js, e outras tecnologias
                front-end.
              </p>
            </div>

            {/* Card de Habilidade - WordPress */}
            <div className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">WordPress</h3>
              <p className="text-gray-300">
                Criação de sites e landing pages com WordPress. Desenvolvimento de
                temas personalizados e plugins para atender necessidades
                específicas.
              </p>
            </div>

            {/* Card de Habilidade - Python */}
            <div className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Python</h3>
              <p className="text-gray-300">
                Desenvolvimento de aplicações back-end com Django e Flask.
                Automação de processos e análise de dados com Python.
              </p>
            </div>

            {/* Card de Habilidade - Docker */}
            <div className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Docker</h3>
              <p className="text-gray-300">
                Criação e gerenciamento de ambientes de desenvolvimento com Docker.
                Configuração de containers para produção.
              </p>
            </div>

            {/* Card de Habilidade - React/Next.js */}
            <div className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">React/Next.js</h3>
              <p className="text-gray-300">
                Desenvolvimento de aplicações modernas com React e Next.js.
                Criação de interfaces interativas e responsivas.
              </p>
            </div>

            {/* Card de Habilidade - UX/UI Design */}
            <div className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">UX/UI Design</h3>
              <p className="text-gray-300">
                Criação de interfaces intuitivas e atraentes, focadas na
                experiência do usuário e nas melhores práticas de design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Projetos */}
      <section id="projetos" className="bg-gray-900 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center">
            Meus{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-800">
              Projetos
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Projeto 1 */}
            <div className="bg-gray-800 rounded-xl overflow-hidden group">
              <div className="h-48 bg-gray-700 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/80 to-blue-900/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      Ver Demo
                    </a>
                    <a
                      href="#"
                      className="bg-transparent border border-white text-white px-4 py-2 rounded-full text-sm font-medium"
                    >
                      Ver Código
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Landing Page Institucional
                </h3>
                <p className="text-gray-300 mb-4">
                  Landing page corporativa desenvolvida com WordPress,
                  personalizada e otimizada para SEO.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-xs">
                    WordPress
                  </span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-xs">
                    SEO
                  </span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-xs">
                    Responsivo
                  </span>
                </div>
              </div>
            </div>

            {/* Projeto 2 */}
            <div className="bg-gray-800 rounded-xl overflow-hidden group">
              <div className="h-48 bg-gray-700 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/80 to-blue-900/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      Ver Demo
                    </a>
                    <a
                      href="#"
                      className="bg-transparent border border-white text-white px-4 py-2 rounded-full text-sm font-medium"
                    >
                      Ver Código
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Aplicação Web Completa
                </h3>
                <p className="text-gray-300 mb-4">
                  Aplicação full-stack com Django no backend e Next.js no
                  frontend, com autenticação e dashboard administrativo.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-xs">
                    Django
                  </span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-xs">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-xs">
                    React
                  </span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-xs">
                    API REST
                  </span>
                </div>
              </div>
            </div>

            {/* Projeto 3 */}
            <div className="bg-gray-800 rounded-xl overflow-hidden group">
              <div className="h-48 bg-gray-700 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/80 to-blue-900/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      Ver Demo
                    </a>
                    <a
                      href="#"
                      className="bg-transparent border border-white text-white px-4 py-2 rounded-full text-sm font-medium"
                    >
                      Ver Código
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Ambiente Docker Escalável
                </h3>
                <p className="text-gray-300 mb-4">
                  Configuração de ambiente de desenvolvimento e produção usando
                  Docker e Docker Compose para uma aplicação web.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-xs">
                    Docker
                  </span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-xs">
                    Docker Compose
                  </span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-xs">
                    DevOps
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Depoimentos */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-800">
              Depoimentos
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Depoimento 1 */}
            <div className="bg-gray-800 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-lg font-bold mr-4">
                  C
                </div>
                <div>
                  <h3 className="font-bold">Cliente Corporativo</h3>
                  <p className="text-gray-400 text-sm">
                    Empresa de Tecnologia
                  </p>
                </div>
              </div>
              <p className="text-gray-300">
                "Eduardo desenvolveu nosso site institucional com excelência. O
                prazo foi cumprido rigorosamente e o resultado superou nossas
                expectativas. Recomendo!"
              </p>
            </div>

            {/* Depoimento 2 */}
            <div className="bg-gray-800 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-lg font-bold mr-4">
                  E
                </div>
                <div>
                  <h3 className="font-bold">Empreendedor</h3>
                  <p className="text-gray-400 text-sm">Startup</p>
                </div>
              </div>
              <p className="text-gray-300">
                "Contratamos o Eduardo para desenvolver nossa aplicação web e
                ficamos muito satisfeitos. Ele entendeu perfeitamente nossas
                necessidades e entregou um produto de alta qualidade."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <section id="contato" className="bg-gray-900 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center">
            Entre em{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-800">
              Contato
            </span>
          </h2>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="nome"
                  className="block text-gray-300 mb-2"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="mensagem"
                  className="block text-gray-300 mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Sua mensagem..."
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-900 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-800">
                Eduardo Coutinho
              </div>
              <p className="text-gray-400 mt-2">Desenvolvedor Web</p>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>© 2025 Eduardo Coutinho. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
    </SmoothScrollWrapper>
  );
}
