import React from 'react';
import { motion as Motion } from 'framer-motion';

const DraggableItem = ({ src, alt, initialX, initialY, rotate, width = '150px' }) => {
    return (
        <Motion.div
            drag
            dragMomentum={false}
            initial={{ x: initialX, y: initialY, rotate: rotate }}
            whileHover={{ scale: 1.1, cursor: 'grab' }}
            whileDrag={{ scale: 1.2, cursor: 'grabbing', zIndex: 100 }}
            style={{
                position: 'absolute',
                width: width, // Use custom width
                filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.3))',
            }}
        >
            <img
                src={src}
                alt={alt}
                style={{
                    width: '100%',
                    height: 'auto',
                    pointerEvents: 'none' // Prevent default image dragging
                }}
            />
        </Motion.div>
    );
};

export default DraggableItem;
