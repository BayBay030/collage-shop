import React, { useEffect, useState } from 'react';
import { motion as Motion } from 'framer-motion';

const DraggableItem = ({
    src,
    alt,
    initialX,
    initialY,
    rotate,
    width = '150px',
    centered = false,
    right = null
}) => {
    const [position, setPosition] = useState({
        x: initialX,
        y: initialY
    });

    useEffect(() => {
        // Calculate position based on centered or right props
        if (centered) {
            // Center position - calculate based on viewport
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            const widthNum = parseInt(width);
            setPosition({
                x: (viewportWidth / 2) - (widthNum / 2),
                y: (viewportHeight / 2) - (widthNum / 2)
            });
        } else if (right !== null) {
            // Right-side positioning
            const viewportWidth = window.innerWidth;
            const widthNum = parseInt(width);
            setPosition({
                x: viewportWidth - widthNum - right,
                y: initialY
            });
        } else {
            // Normal positioning
            setPosition({ x: initialX, y: initialY });
        }
    }, [centered, right, initialX, initialY, width]);

    return (
        <Motion.div
            drag
            dragMomentum={false}
            initial={{ rotate: rotate }}
            whileHover={{ scale: 1.1, cursor: 'grab' }}
            whileDrag={{ scale: 1.2, cursor: 'grabbing', zIndex: 100 }}
            style={{
                position: 'absolute',
                left: position.x,
                top: position.y,
                width: width,
                zIndex: 10, // Ensure above centered image (z-index: 1)
                filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.3))',
            }}
        >
            <img
                src={src}
                alt={alt}
                style={{
                    width: '100%',
                    height: 'auto',
                    pointerEvents: 'none'
                }}
            />
        </Motion.div>
    );
};

export default DraggableItem;
