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

export function RemoveIcon ({ onClick }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      height="24px" 
      viewBox="0 -960 960 960" 
      width="24px" 
      fill="none"
      onClick={onClick}
      style={{ cursor: 'pointer' }}
      >
      
    <path 
      d="M200-440v-80h560v80H200Z"
      stroke="black"
      />

    </svg>
  )
  }

export function CloseIcon ({ onClick}) {
  return (
    <svg 
    onClick={onClick}    
    xmlns="http://www.w3.org/2000/svg" 
    height="24px" 
    viewBox="0 -960 960 960" 
    width="24px" 
    fill="none"
    style={{ cursor: 'pointer' }}>
      
    <path 
      d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
      stroke="black"
      />

      </svg>
  )
}
  

