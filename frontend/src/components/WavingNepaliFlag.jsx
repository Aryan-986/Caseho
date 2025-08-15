import React from 'react';

const WavingNepaliFlag = ({ className = "h-9" }) => {
  return (
    <div className={`${className} relative overflow-hidden`} style={{width: 'auto', display: 'inline-block'}}>
      <svg 
        width="60" 
        height="36" 
        viewBox="0 0 60 36" 
        className="w-full h-full"
        style={{
          animation: 'wave 2.5s ease-in-out infinite',
          filter: 'drop-shadow(1px 1px 3px rgba(0,0,0,0.3))'
        }}
      >
        <defs>
          {/* Official Nepal flag colors */}
          <linearGradient id="crimsonRed" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#DC143C" />
            <stop offset="50%" stopColor="#E91E63" />
            <stop offset="100%" stopColor="#DC143C" />
          </linearGradient>
          
          <linearGradient id="royalBlue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#003893" />
            <stop offset="50%" stopColor="#1565C0" />
            <stop offset="100%" stopColor="#003893" />
          </linearGradient>

          {/* Shadow filter */}
          <filter id="shadow">
            <feDropShadow dx="0.5" dy="0.5" stdDeviation="0.5" floodColor="rgba(0,0,0,0.2)"/>
          </filter>
        </defs>
        
        {/* Flag pole */}
        <rect x="0" y="0" width="2" height="36" fill="#8B4513" />
        
        {/* Main flag shape - exactly like the reference */}
        <g transform="translate(2,0)">
          
          {/* Upper triangle - RED background */}
          <path 
            d="M0 3 L40 3 L18 18 L0 18 Z" 
            fill="url(#crimsonRed)"
          />
          
          {/* Lower triangle - RED background */}
          <path 
            d="M0 18 L18 18 L40 33 L0 33 Z" 
            fill="url(#crimsonRed)"
          />
          
          {/* BLUE borders - Upper triangle */}
          <path 
            d="M0 3 L40 3 L18 18 L0 18 Z" 
            fill="none" 
            stroke="url(#royalBlue)" 
            strokeWidth="3"
            strokeLinejoin="round"
          />
          
          {/* BLUE borders - Lower triangle */}
          <path 
            d="M0 18 L18 18 L40 33 L0 33 Z" 
            fill="none" 
            stroke="url(#royalBlue)" 
            strokeWidth="3"
            strokeLinejoin="round"
          />
          
          {/* WHITE Moon symbol in upper triangle */}
          <g transform="translate(10, 10.5)" filter="url(#shadow)">
            {/* Outer circle */}
            <circle cx="0" cy="0" r="4" fill="white" />
            {/* Inner crescent cutout */}
            <path 
              d="M1.5 -3.2 A 2.8 2.8 0 0 1 1.5 3.2 A 3.8 3.8 0 0 0 1.5 -3.2" 
              fill="url(#crimsonRed)"
            />
          </g>

          {/* WHITE Sun symbol in lower triangle */}
          <g transform="translate(10, 25.5)" filter="url(#shadow)">
            {/* 12-pointed sun rays */}
            <g fill="white">
              {/* Main 8 rays */}
              <path d="M0,-4.5 L0.8,-1.5 L0,-1.2 L-0.8,-1.5 Z" />
              <path d="M0,-4.5 L0.8,-1.5 L0,-1.2 L-0.8,-1.5 Z" transform="rotate(30)" />
              <path d="M0,-4.5 L0.8,-1.5 L0,-1.2 L-0.8,-1.5 Z" transform="rotate(60)" />
              <path d="M0,-4.5 L0.8,-1.5 L0,-1.2 L-0.8,-1.5 Z" transform="rotate(90)" />
              <path d="M0,-4.5 L0.8,-1.5 L0,-1.2 L-0.8,-1.5 Z" transform="rotate(120)" />
              <path d="M0,-4.5 L0.8,-1.5 L0,-1.2 L-0.8,-1.5 Z" transform="rotate(150)" />
              <path d="M0,-4.5 L0.8,-1.5 L0,-1.2 L-0.8,-1.5 Z" transform="rotate(180)" />
              <path d="M0,-4.5 L0.8,-1.5 L0,-1.2 L-0.8,-1.5 Z" transform="rotate(210)" />
              <path d="M0,-4.5 L0.8,-1.5 L0,-1.2 L-0.8,-1.5 Z" transform="rotate(240)" />
              <path d="M0,-4.5 L0.8,-1.5 L0,-1.2 L-0.8,-1.5 Z" transform="rotate(270)" />
              <path d="M0,-4.5 L0.8,-1.5 L0,-1.2 L-0.8,-1.5 Z" transform="rotate(300)" />
              <path d="M0,-4.5 L0.8,-1.5 L0,-1.2 L-0.8,-1.5 Z" transform="rotate(330)" />
              
              {/* Center circle */}
              <circle cx="0" cy="0" r="1.5" fill="white" />
            </g>
          </g>
          
        </g>
      </svg>
      
      <style jsx>{`
        @keyframes wave {
          0%, 100% { 
            transform: perspective(300px) rotateY(0deg) scaleX(1);
          }
          25% { 
            transform: perspective(300px) rotateY(-8deg) scaleX(0.96);
          }
          50% { 
            transform: perspective(300px) rotateY(0deg) scaleX(1.04);
          }
          75% { 
            transform: perspective(300px) rotateY(8deg) scaleX(0.96);
          }
        }
        
        svg {
          animation: wave 2.5s ease-in-out infinite;
          transform-origin: left center;
          will-change: transform;
        }

        /* Mobile responsiveness */
        @media (max-width: 640px) {
          svg {
            width: 28px;
            height: auto;
          }
        }
        
        @media (max-width: 480px) {
          svg {
            width: 24px;
            height: auto;
            animation-duration: 2s;
          }
        }

        /* Smooth hover effect */
        div:hover svg {
          animation-duration: 1.8s;
        }
      `}</style>
    </div>
  );
};

export default WavingNepaliFlag;