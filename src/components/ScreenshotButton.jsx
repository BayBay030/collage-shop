import React from 'react';
import html2canvas from 'html2canvas';

const ScreenshotButton = () => {
    const handleScreenshot = async () => {
        const element = document.querySelector('.app-container');
        if (!element) return;

        try {
            const canvas = await html2canvas(element, {
                ignoreElements: (node) => {
                    // Ignore the Tally iframe container and the screenshot button itself
                    return node.classList.contains('tally-container') ||
                        node.classList.contains('screenshot-btn-container');
                },
                useCORS: true, // For loading images if needed (though local assets should be fine)
                scale: 2, // Higher quality
            });

            const image = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = image;
            link.download = 'my-collage.png';
            link.click();
        } catch (error) {
            console.error('Screenshot failed:', error);
            alert('Oops! Could not take screenshot.');
        }
    };

    return (
        <div className="screenshot-btn-container">
            <button
                onClick={handleScreenshot}
                className="screenshot-btn"
            >
                📸 Save Collage
            </button>
        </div>
    );
};

export default ScreenshotButton;
