"use client";
import useSmoothScroll from '../hooks/useSmoothScroll';

export default function Portfolio() {
  // Implementa o hook de navegação com scroll suave
  useSmoothScroll();

  return (
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

      {/* Resto do conteúdo permanece o mesmo */}
    </div>
  );
}
