// src/components/Button.jsx
import React from 'react';

const Button = ({ text, onClick, type = 'button', color = 'blue' }) => {
    const baseClass = 'p-4 rounded text-white';
    const colorClass = `bg-${color}-500 hover:bg-${color}-700`;

    return (
        <button onClick={onClick} type={type} className={`${baseClass} ${colorClass}`}>
            {text}
        </button>
    );
};

export default Button;
