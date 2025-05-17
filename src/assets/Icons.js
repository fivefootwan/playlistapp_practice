import React from 'react';

export function PlusIcon({ onClick }) {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onClick}
        style={{ cursor: 'pointer' }}
      >
        <path
          d="M12 5v14M5 12h14"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

export function OpenIcon({ size = 24, color = "black", onClick }) {
    return (
      <svg 
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size} 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke={color}
        style={{ cursor: 'pointer' }}
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={1.5} 
          d="M3 7a2 2 0 012-2h5l2 2h7a2 2 0 012 2v1M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9H5a2 2 0 00-2 2z" 
        />
      </svg>
    );
  }
  

