interface WaveDividerProps {
  flip?: boolean;
  className?: string;
}

export default function WaveDivider({ flip = false, className = '' }: WaveDividerProps) {
  return (
    <div className={`relative w-full ${className}`} style={{ height: '120px' }}>
      {/* Shadow layer for depth */}
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`absolute inset-0 w-full h-full ${flip ? 'scale-y-[-1]' : ''}`}
      >
        <path
          d="M0,40 C300,90 900,10 1200,40 L1200,120 L0,120 Z"
          className="fill-[#34C759]/5"
        />
      </svg>

      {/* Main wave with more pronounced curve */}
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`absolute inset-0 w-full h-full ${flip ? 'scale-y-[-1]' : ''}`}
      >
        <path
          d="M0,30 C300,80 900,0 1200,30 L1200,120 L0,120 Z"
          className="fill-gray-50 dark:fill-gray-900"
        />
      </svg>
    </div>
  );
}
