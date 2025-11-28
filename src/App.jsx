import React, { useState } from 'react';
import DraggableItem from './components/DraggableItem';
import ScreenshotButton from './components/ScreenshotButton';
import DraggableNote from './components/DraggableNote';
import ColorSelector from './components/ColorSelector';
import background from './assets/background.png';
import stickerA from './assets/A.png';
import stickerA1 from './assets/A-1.png';
import stickerA2 from './assets/A-2.png';
import stickerA3 from './assets/A-3.png';
import stickerB from './assets/B.png';
import stickerC from './assets/C.png';
import stickerD from './assets/D.png';
import stickerE from './assets/E.png';
import stickerF from './assets/F.png';
import stickerG from './assets/G.png';

import stickerH from './assets/H.png';
import stickerI from './assets/I.png';

import './App.css';

function App() {
  // State for color selection (default to first option)
  const [selectedColor, setSelectedColor] = useState('color1');

  // Color variant mapping - using your A-1, A-2, A-3 images
  const colorVariants = {
    color1: stickerA1,
    color2: stickerA2,
    color3: stickerA3,
  };

  // Sticker Configuration (excluding A, which is now static)
  // Using percentages for responsive positioning relative to viewport
  const items = [
    // Top Left Group (B, C, D) - Scattered near A's top-left
    { id: 'b', src: stickerB, x: '10%', y: '15%', rotate: -8, width: '180px' },
    { id: 'c', src: stickerC, x: '20%', y: '10%', rotate: 12, width: '185px' },
    { id: 'd', src: stickerD, x: '30%', y: '15%', rotate: 5, width: '190px' },

    // Middle Left Group (E, F, G) - Scattered near A's middle-left
    { id: 'e', src: stickerE, x: '10%', y: '40%', rotate: 18, width: '105px' },
    { id: 'f', src: stickerF, x: '20%', y: '45%', rotate: -12, width: '110px' },
    { id: 'g', src: stickerG, x: '12%', y: '50%', rotate: -8, width: '100px' },

    // Bottom Left Group (H, I) - Scattered near A's bottom-left
    { id: 'h', src: stickerH, x: '15%', y: '75%', rotate: -15, width: '95px' },
    { id: 'i', src: stickerI, x: '25%', y: '80%', rotate: 22, width: '95px' },
  ];

  return (
    <div
      className="app-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="collage-area">
        <ScreenshotButton />

        {/* Note positioned at Bottom Right */}
        <DraggableNote initialX="75%" initialY="75%" />

        <h1 className="app-title">
          My Art-toy studio
        </h1>

        {/* Static centered A image - NOT draggable */}
        <div className="centered-image-container">
          <img
            src={colorVariants[selectedColor]}
            alt="Main Art Toy"
            className="centered-image"
          />
        </div>

        {/* Color Selector - Below the image */}
        <ColorSelector
          onColorSelect={setSelectedColor}
          selectedColor={selectedColor}
        />

        {/* Other draggable stickers */}
        {items.map((item) => (
          <DraggableItem
            key={item.id}
            src={item.src}
            alt={`Sticker ${item.id}`}
            initialX={item.x}
            initialY={item.y}
            rotate={item.rotate}
            width={item.width}
            centered={item.centered}
            right={item.right}
          />
        ))}
      </div>

      {/* Tally Form Iframe */}
      <div className="tally-container">
        <iframe
          src="https://tally.so/embed/nWd6BL?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          className="tally-iframe"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Collage Shop Order"
        ></iframe>
      </div>

      <footer className="app-footer">
        <span>UNICORN MANI © BayBay Brenda | All right reserved.</span>
        <a href="https://instagram.com/unicorn_mani" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          <span style={{ marginLeft: '5px' }}>@Unicorn_mani</span>
        </a>
      </footer>
    </div>
  );
}

export default App;
