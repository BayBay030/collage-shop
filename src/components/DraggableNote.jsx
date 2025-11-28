import React from 'react';
import { motion as Motion } from 'framer-motion';

const DraggableNote = ({ initialX, initialY }) => {
    return (
        <Motion.div
            drag
            dragMomentum={false}
            whileHover={{ cursor: 'grab' }}
            whileDrag={{ cursor: 'grabbing', scale: 1.05, zIndex: 200 }}
            style={{
                position: 'absolute',
                left: initialX || 260,
                top: initialY || (window.innerHeight - 250),
                zIndex: 150, // Above normal stickers
            }}
        >
            <textarea
                placeholder="Write a note..."
                style={{
                    width: '300px', // Wider (2x)
                    height: '150px',
                    backgroundColor: '#fef3c7', // Light yellow sticky note color
                    border: '1px solid #d1d5db',
                    padding: '10px',
                    fontSize: '9pt',
                    color: '#333',
                    fontFamily: '"Helvetica Neue", Arial, "PingFang TC", "Heiti TC", "Microsoft JhengHei", sans-serif',
                    resize: 'none',
                    outline: 'none',
                    boxShadow: '2px 4px 6px rgba(0,0,0,0.1)',
                    borderRadius: '2px',
                }}
                onMouseDown={(e) => e.stopPropagation()} // Allow typing without dragging immediately (though drag usually requires holding parent)
            />
        </Motion.div>
    );
};

export default DraggableNote;
