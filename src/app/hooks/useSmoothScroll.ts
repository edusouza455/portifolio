/**
 * Hook para adicionar rolagem suave aos links de navegação
 */
import { useEffect } from 'react';

export default function useSmoothScroll() {
  useEffect(() => {
    // Seleciona todos os links de âncora que apontam para IDs (links internos)
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    const smoothScroll = (event: Event) => {
      const target = event.currentTarget as HTMLAnchorElement;
      const targetId = target.getAttribute('href');
      
      // Verifica se o href começa com # e não é apenas #
      if (targetId && targetId !== '#') {
        event.preventDefault();
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // Rolagem suave para o elemento
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Atualiza a URL sem recarregar a página
          window.history.pushState(null, '', targetId);
        }
      }
    };
    
    // Adiciona evento de clique a todos os links internos
    internalLinks.forEach((link) => {
      link.addEventListener('click', smoothScroll);
    });
    
    // Remove os event listeners quando o componente for desmontado
    return () => {
      internalLinks.forEach((link) => {
        link.removeEventListener('click', smoothScroll);
      });
    };
  }, []);
}
