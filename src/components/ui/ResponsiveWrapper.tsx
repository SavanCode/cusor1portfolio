'use client';

import { useEffect, useState } from 'react';

interface ResponsiveWrapperProps {
  children: React.ReactNode;
  showDebug?: boolean;
  className?: string;
}

export default function ResponsiveWrapper({
  children,
  showDebug = false,
  className = '',
}: ResponsiveWrapperProps) {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [currentBreakpoint, setCurrentBreakpoint] = useState<string>('');

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      setWindowWidth(width);

      // Define breakpoints
      if (width < 640) {
        setCurrentBreakpoint('sm');
      } else if (width < 768) {
        setCurrentBreakpoint('md');
      } else if (width < 1024) {
        setCurrentBreakpoint('lg');
      } else if (width < 1280) {
        setCurrentBreakpoint('xl');
      } else {
        setCurrentBreakpoint('2xl');
      }
    };

    // Initial call
    updateDimensions();

    // Add event listener
    window.addEventListener('resize', updateDimensions);

    // Cleanup
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className={`relative ${className}`}>
      {children}
      
      {showDebug && (
        <div className="fixed bottom-4 right-4 z-50 bg-black/80 text-white p-4 rounded-lg shadow-lg text-sm font-mono">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-gray-400">Width:</span>
              <span>{windowWidth}px</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400">Breakpoint:</span>
              <span className="text-blue-400">{currentBreakpoint}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400">Device:</span>
              <span>
                {windowWidth < 640
                  ? 'Mobile'
                  : windowWidth < 768
                  ? 'Large Mobile'
                  : windowWidth < 1024
                  ? 'Tablet'
                  : windowWidth < 1280
                  ? 'Laptop'
                  : 'Desktop'}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 