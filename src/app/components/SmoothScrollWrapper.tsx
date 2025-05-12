"use client";

import useSmoothScroll from '../hooks/useSmoothScroll';

export default function SmoothScrollWrapper({ children }: { children: React.ReactNode }) {
  // Implementa o hook de navegação com scroll suave
  useSmoothScroll();
  
  return (
    <>
      {children}
    </>
  );
}
