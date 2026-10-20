import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { playCyberClick } from '../utils/soundEffects';

const BrandLogo = ({ isSoundOn }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (isSoundOn) {
      playCyberClick();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', flexShrink: 0 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          playCyberClick();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          textDecoration: 'none',
          color: '#fff',
          cursor: 'pointer',
          padding: '4px 6px',
          borderRadius: '12px',
          transition: 'all 0.3s ease',
          flexShrink: 0,
        }}
      >
        {/* Animated PN Badge Container */}
        <div
          style={{
            position: 'relative',
            width: '40px',
            height: '40px',
            minWidth: '40px',
            minHeight: '40px',
            flexShrink: 0,
            borderRadius: '11px',
            padding: '2px',
            background: isHovered
              ? 'linear-gradient(135deg, #00f2fe 0%, #7f00ff 50%, #e100ff 100%)'
              : 'linear-gradient(135deg, rgba(0,242,254,0.6) 0%, rgba(127,0,255,0.6) 100%)',
            boxShadow: isHovered
              ? '0 0 25px rgba(0, 242, 254, 0.7), 0 0 45px rgba(127, 0, 255, 0.4)'
              : '0 0 15px rgba(0, 242, 254, 0.25)',
            transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: isHovered ? 'scale(1.08) rotate(-2deg)' : 'scale(1)',
          }}
        >
          {/* Rotating Cyber Orbit Ring when hovered */}
          {isHovered && (
            <div
              style={{
                position: 'absolute',
                top: '-4px',
                left: '-4px',
                right: '-4px',
                bottom: '-4px',
                borderRadius: '14px',
                border: '1.5px dashed #00f2fe',
                animation: 'spinOrbit 6s linear infinite',
                pointerEvents: 'none',
                opacity: 0.8,
              }}
            />
          )}

          {/* Inner Badge Core */}
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '9px',
              background: '#070a14',
              overflow: 'hidden',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Default State: Stylized 'PN' Text */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '800',
                fontFamily: 'var(--font-heading)',
                fontSize: '1.05rem',
                color: '#fff',
                opacity: isHovered ? 0 : 1,
                transform: isHovered ? 'scale(0.8) translateY(-4px)' : 'scale(1) translateY(0)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                background: 'linear-gradient(135deg, rgba(0,242,254,0.15) 0%, rgba(127,0,255,0.2) 100%)',
              }}
            >
              <span className="gradient-text">PN</span>
            </div>

            {/* Hover State: Glowing Unique PN Monogram Emblem */}
            <img
              src="/pn_logo.jpg"
              alt="PN Logo"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? 'scale(1)' : 'scale(1.2)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            />
          </div>
        </div>

        {/* Name & Title */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontWeight: '800',
              fontSize: '1.1rem',
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.01em',
              whiteSpace: 'nowrap',
              transition: 'all 0.3s ease',
              color: isHovered ? '#00f2fe' : '#fff',
              textShadow: isHovered ? '0 0 15px rgba(0,242,254,0.5)' : 'none',
            }}
          >
            Pankaj Negi
          </div>
          <div
            className="brand-subtitle"
            style={{
              fontSize: '0.68rem',
              color: isHovered ? '#d8b4fe' : '#64748b',
              fontFamily: 'var(--font-mono)',
              transition: 'color 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            {isHovered ? (
              <>
                <Sparkles size={10} color="#00f2fe" />
                <span>DEV CORE · 4+ YRS</span>
              </>
            ) : (
              <span>Frontend & Mobile Engineer</span>
            )}
          </div>
        </div>
      </a>

      {/* Futuristic Floating Hologram Monogram Popover Card */}
      {isHovered && (
        <div
          className="pn-hologram-card"
          style={{
            position: 'absolute',
            top: '52px',
            left: '0',
            width: '280px',
            background: 'rgba(9, 13, 24, 0.96)',
            border: '1px solid rgba(0, 242, 254, 0.35)',
            borderRadius: '18px',
            padding: '18px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 242, 254, 0.25)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            zIndex: 1000,
            animation: 'hologramFadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            pointerEvents: 'none',
          }}
        >
          {/* Card Header with Large Glowing Monogram */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
            <div
              style={{
                width: '58px',
                height: '58px',
                borderRadius: '14px',
                overflow: 'hidden',
                border: '2px solid #00f2fe',
                boxShadow: '0 0 20px rgba(0,242,254,0.5)',
                position: 'relative',
                flexShrink: 0,
              }}
            >
              <img
                src="/pn_logo.jpg"
                alt="PN Monogram"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div>
              <div style={{ fontWeight: '800', fontSize: '1.05rem', color: '#fff' }}>
                Pankaj Negi
              </div>
              <div style={{ fontSize: '0.72rem', color: '#00f2fe', fontFamily: 'var(--font-mono)' }}>
                PN · INSIGNIA
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '3px' }}>
                <span className="live-status-indicator" style={{ width: '8px', height: '8px' }}>
                  <span className="live-status-ping" />
                  <span className="live-status-dot" style={{ width: '6px', height: '6px' }} />
                </span>
                <span style={{ fontSize: '0.65rem', color: '#10b981', fontWeight: '600' }}>
                  Active Engineering Core
                </span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Inside Card */}
          <div
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '12px',
              padding: '10px 12px',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '8px',
              fontSize: '0.72rem',
              marginBottom: '12px',
            }}
          >
            <div>
              <span style={{ color: '#64748b' }}>Experience:</span>{' '}
              <strong style={{ color: '#fff' }}>4+ Years</strong>
            </div>
            <div>
              <span style={{ color: '#64748b' }}>Downloads:</span>{' '}
              <strong style={{ color: '#10b981' }}>1.5M+</strong>
            </div>
            <div style={{ gridColumn: 'span 2' }}>
              <span style={{ color: '#64748b' }}>Tech:</span>{' '}
              <span style={{ color: '#00f2fe', fontFamily: 'var(--font-mono)', fontSize: '0.68rem' }}>
                React Native · React.js · Chime SDK
              </span>
            </div>
          </div>

          <div
            style={{
              fontSize: '0.68rem',
              color: '#94a3b8',
              textAlign: 'center',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              paddingTop: '8px',
              fontFamily: 'var(--font-mono)',
            }}
          >
            ✨ PN Signature Developer Brand
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandLogo;
