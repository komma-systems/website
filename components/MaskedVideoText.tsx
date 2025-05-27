import React from 'react';

export function MaskedVideoText({
  svgSrc,
  videoSrc,
  alt,
  className = '',
  hover = false,
  style = {},
  ...props
}: {
  svgSrc: string;
  videoSrc: string;
  alt: string;
  className?: string;
  hover: boolean;
  style?: React.CSSProperties;
  [key: string]: any;
}) {
  return (
    <span className={`relative inline-block group ${className}`} style={style} {...props}>
      <img
        src={svgSrc}
        alt={alt}
        className={`h-[1.2em] w-auto align-baseline block transition-opacity duration-300 ${hover ? 'opacity-0' : 'opacity-100'}`}
        draggable={false}
        style={{ pointerEvents: 'none' }}
      />
      <span className={`absolute inset-0 overflow-hidden transition-opacity duration-300 pointer-events-none ${hover ? 'opacity-100' : 'opacity-0'}`}>
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            WebkitMaskImage: `url('${svgSrc}')`,
            maskImage: `url('${svgSrc}')`,
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskSize: '100% 100%',
            maskSize: '100% 100%',
            WebkitMaskPosition: 'center',
            maskPosition: 'center',
            background: 'transparent',
          }}
        />
      </span>
    </span>
  );
} 