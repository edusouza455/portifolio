"use client";

import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import MobileNavigation from './MobileNavigation';

export default function ClientNavWrapper() {
  useEffect(() => {
    // Mount the MobileNavigation component on the client side
    const container = document.getElementById('mobile-nav-container');
    if (container) {
      const root = createRoot(container);
      root.render(<MobileNavigation />);
    }
  }, []);

  // This component doesn't render anything itself
  return null;
}
