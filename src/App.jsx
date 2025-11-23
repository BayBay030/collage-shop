import React from 'react';
import DraggableItem from './components/DraggableItem';
import ScreenshotButton from './components/ScreenshotButton';
import DraggableNote from './components/DraggableNote';
import background from './assets/background.png';
import stickerA from './assets/A.png';
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
  // Sticker Configuration
  // Sticker A: Largest, Vertical, Bottom layer (first in array)
  // Coordinates are relative to the container
  const items = [
    // Layer 1: Bottom
    {
      id: 'a',
      src: stickerA,
      x: 200, // Moved right towards center
      y: 120, // Moved up by 80px (200 -> 120)
      rotate: 0,
      width: '350px' // Larger (approx +15%)
    },
    // Layer 2: Middle - Clustered around A
    { id: 'b', src: stickerB, x: 50, y: 100, rotate: 5, width: '200px' }, // Top Left
    { id: 'c', src: stickerC, x: 500, y: 250, rotate: 15, width: '200px' }, // Right
    { id: 'd', src: stickerD, x: 350, y: 500, rotate: -5, width: '200px' }, // Bottom
    // Layer 3: Top - Scattered gaps
    { id: 'e', src: stickerE, x: 450, y: 80, rotate: 20, width: '100px' }, // Top Right
    { id: 'f', src: stickerF, x: 100, y: 450, rotate: -10, width: '100px' }, // Bottom Left
    { id: 'g', src: stickerG, x: 250, y: 50, rotate: 10, width: '100px' }, // Top Center
    { id: 'h', src: stickerH, x: 20, y: 300, rotate: -15, width: '100px' }, // Far Left
    { id: 'i', src: stickerI, x: 550, y: 100, rotate: 25, width: '100px' }, // Far Right
  ];

  return (
    <div
      className="app-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="collage-area">
        <ScreenshotButton />
        <DraggableNote />
        <h1 className="app-title">
          My Art-toy studio
        </h1>

        {items.map((item) => (
          <DraggableItem
            key={item.id}
            src={item.src}
            alt={`Sticker ${item.id}`}
            initialX={item.x}
            initialY={item.y}
            rotate={item.rotate}
            width={item.width}
          />
        ))}
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
    </div>
  );
}

export default App;
