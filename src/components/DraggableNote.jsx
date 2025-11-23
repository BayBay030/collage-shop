import React from 'react';
import { motion as Motion } from 'framer-motion';

const DraggableNote = () => {
    return (
        <Motion.div
            drag
            dragMomentum={false}
            initial={{ x: 260, y: window.innerHeight - 250 }} // Aligned right of button. Bottom at 100px (same as btn). Top = H - 100 - 150 = H - 250
            whileHover={{ cursor: 'grab' }}
            whileDrag={{ cursor: 'grabbing', scale: 1.05, zIndex: 200 }}
            style={{
                position: 'absolute',
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
