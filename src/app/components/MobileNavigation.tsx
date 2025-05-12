"use client";

import { useState } from 'react';

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button 
        onClick={toggleMenu}
        className="p-2 focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg 
          className="w-6 h-6 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          ) : (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          )}
        </svg>
      </button>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-gray-900 border-t border-gray-800 shadow-lg z-50">
          <div className="flex flex-col p-4 space-y-4">
            <a
              href="#sobre"
              className="hover:text-blue-400 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Sobre
            </a>
            <a
              href="#habilidades"
              className="hover:text-blue-400 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Habilidades
            </a>
            <a
              href="#projetos"
              className="hover:text-blue-400 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Projetos
            </a>
            <a
              href="#contato"
              className="hover:text-blue-400 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
