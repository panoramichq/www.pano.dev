import React from 'react';
import { Link } from 'gatsby';

export default function ButtonLink({ children, href, className = '' }) {
  return (
    <Link
      className={`
        ${className}
        text-blue-600 
        hover:text-blue-800
        font-medium 
        text-lg
        transition
        duration-200
    `}
      href={href}
    >
      {children}
    </Link>
  );
}
