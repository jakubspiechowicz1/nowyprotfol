"use client";
import React, { useState } from 'react';

const SimplifyLayout = () => {
  const [isLayoutSimplified, setIsLayoutSimplified] = useState(false);

  const toggleSimplify = () => {
    setIsLayoutSimplified(!isLayoutSimplified);

    // Znajdź wszystkie elementy, które chcesz ukryć lub zmienić
    const images = document.querySelectorAll('img, svg');
    const sidebars = document.querySelectorAll('.sidebar');
    const nonEssentialElements = document.querySelectorAll('.non-essential');
    const complexBackgrounds = document.querySelectorAll('[class*="bg-hero"]'); // selektor dla tych specyficznych tła
    const allBackgroundImages = document.querySelectorAll('[class*="bg-contact_illustration_light"]');

    if (isLayoutSimplified) {
      // Przywróć normalny układ
      images.forEach(img => img.style.display = '');
      sidebars.forEach(sidebar => sidebar.style.display = '');
      nonEssentialElements.forEach(elem => elem.style.display = '');
      complexBackgrounds.forEach(bg => bg.style.backgroundImage = ''); // Przywróć tło
      allBackgroundImages.forEach(bg => bg.style.backgroundImage = '');
    } else {
      // Uproszczony układ
      images.forEach(img => img.style.display = 'none');
      sidebars.forEach(sidebar => sidebar.style.display = 'none');
      nonEssentialElements.forEach(elem => elem.style.display = 'none');
      complexBackgrounds.forEach(bg => bg.style.backgroundImage = 'none'); // Usuń tło
      allBackgroundImages.forEach(bg => bg.style.backgroundImage = 'none');
    }
  };

  return (
    <button 
      onClick={toggleSimplify}
      className={`h-full w-full flex z-10 absolute ${isLayoutSimplified ? '' : ''}`}
    >
      {isLayoutSimplified ? '' : ''}
    </button>
  );
};

export default SimplifyLayout;