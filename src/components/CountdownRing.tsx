import { useEffect, useState } from 'react';

interface CountdownRingProps {
  value: number;
  maxValue: number;
  label: string;
  size?: 'sm' | 'md' | 'lg';
  delay?: number;
}

const CountdownRing = ({ value, maxValue, label, size = 'md', delay = 0 }: CountdownRingProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayValue, setDisplayValue] = useState(value);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    setDisplayValue(value);
  }, [value]);

  const sizeConfig = {
    sm: { ring: 100, stroke: 4, text: 'text-2xl', label: 'text-xs' },
    md: { ring: 140, stroke: 5, text: 'text-4xl', label: 'text-sm' },
    lg: { ring: 180, stroke: 6, text: 'text-5xl', label: 'text-base' },
  };

  const config = sizeConfig[size];
  const radius = (config.ring - config.stroke * 2) / 2;
  const circumference = radius * 2 * Math.PI;
  const progress = Math.max(0, Math.min(1, value / maxValue));
  const strokeDashoffset = circumference - (progress * circumference);

  return (
    <div 
      className={`flex flex-col items-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="relative" style={{ width: config.ring, height: config.ring }}>
        {/* Outer glow effect */}
        <div 
          className="absolute inset-0 rounded-full opacity-30 blur-xl"
          style={{
            background: 'radial-gradient(circle, hsl(43 80% 55%) 0%, transparent 70%)'
          }}
        />
        
        {/* Glass background */}
        <div className="absolute inset-2 rounded-full glass-card" />
        
        {/* SVG Ring */}
        <svg
          className="absolute inset-0 -rotate-90"
          width={config.ring}
          height={config.ring}
        >
          {/* Background ring */}
          <circle
            cx={config.ring / 2}
            cy={config.ring / 2}
            r={radius}
            fill="none"
            stroke="hsl(220 30% 25%)"
            strokeWidth={config.stroke}
            className="opacity-40"
          />
          
          {/* Progress ring */}
          <circle
            cx={config.ring / 2}
            cy={config.ring / 2}
            r={radius}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth={config.stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
          />
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(43 80% 65%)" />
              <stop offset="50%" stopColor="hsl(155 45% 45%)" />
              <stop offset="100%" stopColor="hsl(43 80% 55%)" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span 
            className={`font-outfit font-semibold text-foreground ${config.text} transition-all duration-300`}
            key={displayValue}
          >
            {displayValue.toString().padStart(2, '0')}
          </span>
          <span className={`font-outfit text-muted-foreground uppercase tracking-widest ${config.label}`}>
            {label}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountdownRing;
