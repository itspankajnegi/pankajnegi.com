import React, { useState, useEffect, useRef } from 'react';

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('down'); // 'down' | 'up'
  const [isScrolling, setIsScrolling] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (currentScrollY / totalHeight) * 100 : 0;
      
      const clampedProgress = Math.min(100, Math.max(0, progress));
      setScrollProgress(clampedProgress);

      if (currentScrollY > lastScrollY.current) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection('up');
      }
      lastScrollY.current = currentScrollY;

      setIsScrolling(true);
      setShowBubble(true);

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  // Funny quips based on scroll depth
  const getFunnyMessage = () => {
    if (scrollProgress < 12) return 'Hold on! 🛹💨';
    if (scrollProgress < 30) return 'Simulators ahead! 🎮';
    if (scrollProgress < 50) return 'Inspecting skills! ⚡';
    if (scrollProgress < 70) return 'Deep in code! 🛠️';
    if (scrollProgress < 90) return '1.5M+ Downloads! 📈';
    return 'Hire this dev! 🎉';
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '4px',
        background: 'rgba(255, 255, 255, 0.05)',
        zIndex: 99999,
        pointerEvents: 'none',
      }}
    >
      {/* Glowing Neon Progress Bar Track */}
      <div
        style={{
          height: '100%',
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #00f2fe 0%, #7f00ff 50%, #ff007f 100%)',
          boxShadow: '0 0 14px rgba(0, 242, 254, 0.9), 0 0 24px rgba(127, 0, 255, 0.6)',
          transition: 'width 0.1s ease-out',
          position: 'relative',
        }}
      >
        {/* Funny Skater / Walking Hand Mascot */}
        <div
          style={{
            position: 'absolute',
            right: '-18px',
            top: '-2px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'pointer',
            pointerEvents: 'auto',
            opacity: scrollProgress > 1.5 ? 1 : 0,
            transform: `scaleX(${scrollDirection === 'up' ? -1 : 1})`,
            transition: 'opacity 0.25s ease, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          onMouseEnter={() => setShowBubble(true)}
        >
          {/* Funny Speech Bubble */}
          <div
            style={{
              position: 'absolute',
              top: '28px',
              left: '50%',
              transform: `translateX(-50%) scaleX(${scrollDirection === 'up' ? -1 : 1})`,
              background: 'rgba(9, 13, 24, 0.95)',
              border: '1px solid rgba(0, 242, 254, 0.4)',
              borderRadius: '20px',
              padding: '3px 10px',
              fontSize: '0.72rem',
              fontWeight: '700',
              color: '#fff',
              whiteSpace: 'nowrap',
              boxShadow: '0 6px 20px rgba(0,0,0,0.6), 0 0 15px rgba(0, 242, 254, 0.3)',
              fontFamily: 'var(--font-heading)',
              opacity: showBubble ? 1 : 0,
              pointerEvents: 'none',
              transition: 'opacity 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span style={{ color: '#00f2fe' }}>{Math.round(scrollProgress)}%</span>
            <span>{getFunnyMessage()}</span>
          </div>

          {/* Funny Animated Hand Character */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              transform: isScrolling ? 'rotate(18deg) scale(1.15)' : 'rotate(0deg) scale(1)',
              transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              filter: 'drop-shadow(0 0 8px rgba(0, 242, 254, 0.8))',
              userSelect: 'none',
            }}
          >
            {isScrolling ? (
              // Fast Scrolling: Surfing / Zooming Hand with speed lines
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ fontSize: '20px', lineHeight: 1 }}>👉</span>
                <span
                  style={{
                    fontSize: '12px',
                    marginLeft: '-4px',
                    filter: 'drop-shadow(0 0 4px #00f2fe)',
                  }}
                >
                  💨
                </span>
              </div>
            ) : (
              // Stopped / Idle: Friendly Waving Hand
              <span
                style={{
                  fontSize: '20px',
                  lineHeight: 1,
                  display: 'inline-block',
                  animation: 'handWave 1.5s infinite ease-in-out',
                }}
              >
                🖐️
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollProgressBar;
