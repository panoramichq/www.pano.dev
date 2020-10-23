import React from 'react';

const sizes = {
  default: `py-2 px-4`,
  lg: `py-3 px-6`,
  xl: `py-4 px-10 text-lg`
};

export default function Button({ children, className = '', size }) {
  return (
    <button
      type="button"
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        rounded-full
        text-white
        bg-blue-600 
        hover:bg-blue-800
        transition duration-200
    `}
    >
      {children}
    </button>
  );
}
