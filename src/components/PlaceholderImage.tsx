import React from 'react';
import Image from 'next/image';

interface PlaceholderImageProps {
  width: number;
  height: number;
  text?: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
  rounded?: boolean;
  isIcon?: boolean;
}

export default function PlaceholderImage({
  width,
  height,
  text = 'Image',
  bgColor = '#34C759',
  textColor = 'white',
  className = '',
  rounded = false,
  isIcon = false
}: PlaceholderImageProps) {
  // Use app icon image if this is marked as an app icon
  if (isIcon) {
    // return app icon image
    return (
      <Image
        priority
        src="/images/app-icon-light.svg"
        height={height}
        width={width}
        alt="App Icon"
        className={`rounded-lg ${className}`}
      />
    );
  }

  // Regular placeholder
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