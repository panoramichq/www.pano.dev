import React from 'react';
import { Link } from 'gatsby';

export default function NavLink({ children, href, className = '' }) {
  return (
    <Link
      className={`
        ${className}
        hover:text-black 
        text-gray-600
        transition
        duration-200
    `}
      href={href}
    >
      {children}
    </Link>
  );
}
