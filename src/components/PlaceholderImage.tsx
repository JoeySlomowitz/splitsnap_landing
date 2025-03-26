import React from 'react';

interface PlaceholderImageProps {
  width: number;
  height: number;
  text?: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
  rounded?: boolean;
}

export default function PlaceholderImage({
  width,
  height,
  text = 'Image',
  bgColor = '#0071E3',
  textColor = 'white',
  className = '',
  rounded = false
}: PlaceholderImageProps) {
  return (
    <div
      className={`flex items-center justify-center ${rounded ? 'rounded-xl' : ''} ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: bgColor,
        color: textColor,
        fontSize: `${Math.min(width, height) / 10}px`,
        fontWeight: 'bold',
      }}
    >
      {text}
    </div>
  );
}