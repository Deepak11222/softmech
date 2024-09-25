import React from 'react';
import { GoArrowUp } from "react-icons/go";

const BackToTop = () => {
    const backToTopStyle = {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
        zIndex: 1000,
    };

    const svgStyle = {
        position: 'absolute',
        width: '100%',
        height: '100%',
    };

    const pathStyle = {
        fill: 'none',
        // stroke: 'blue', // Circle color
        strokeWidth: '2',
    };

    const iconWrapperStyle = {
        position: 'relative',
        zIndex: 1,
    };

    const iconStyle = {
        // color: 'blue', // Icon color
        fontSize: '24px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    };

    return (
        <div style={backToTopStyle} onClick={scrollToTop}>
            <svg style={svgStyle} viewBox="-1 -1 102 102">
                <path
                    d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                    style={pathStyle}
                />
            </svg>
            <div style={iconWrapperStyle}>
                <GoArrowUp style={iconStyle} />
            </div>
        </div>
    );
};

// Function to scroll to the top
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

export default BackToTop;