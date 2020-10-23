import React from 'react';

export default function LabelText({ children, className = '' }) {
  return <p className={`uppercase tracking-wider ${className}`}>{children}</p>;
}
