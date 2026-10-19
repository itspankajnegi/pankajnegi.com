import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Smartphone, Monitor, Cpu, Volume2, VolumeX, FileText, Menu, X, ChevronDown } from 'lucide-react';
import { toggleSound, playCyberClick } from '../utils/soundEffects';
import BrandLogo from './BrandLogo';

const Navbar = ({ positionMode, setPositionMode, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const nextState = !isSoundOn;
    setIsSoundOn(nextState);
    toggleSound(nextState);
    if (nextState) {
      setTimeout(() => playCyberClick(), 50);
    }
  };

  const handleModeSelect = (mode) => {
    playCyberClick();
    setPositionMode(mode);
    setDropdownOpen(false);
  };

  const modeLabels = {
    mobile: { label: 'Mobile Focus', icon: <Smartphone size={14} color="#00f2fe" /> },
    frontend: { label: 'Frontend Focus', icon: <Monitor size={14} color="#4facfe" /> },
    hybrid: { label: 'Cross-Platform Lead', icon: <Cpu size={14} color="#7f00ff" /> }
  };

  const navLinks = [
    { name: 'Simulators', href: '#simulators' },
    { name: 'Skills', href: '#skills' },
    { name: 'Highlights', href: '#highlights' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className="navbar-header"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '10px 24px' : '16px 32px',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        background: mobileMenuOpen ? '#0a0e1c' : (scrolled ? 'rgba(7, 9, 19, 0.92)' : 'rgba(7, 9, 19, 0.75)'),
        backdropFilter: mobileMenuOpen ? 'none' : 'blur(20px)',
        WebkitBackdropFilter: mobileMenuOpen ? 'none' : 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        {/* Brand Logo with Unique Hover Monogram */}
        <BrandLogo isSoundOn={isSoundOn} />

        {/* Center Desktop Navigation Links */}
        <nav className="nav-desktop-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => playCyberClick()}
              style={{
                color: '#cbd5e1',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '500',
                transition: 'color 0.2s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => (e.target.style.color = '#00f2fe')}
              onMouseLeave={(e) => (e.target.style.color = '#cbd5e1')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions: Compact Focus Switcher Dropdown + Sound + Resume */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
          
          {/* Compact Role Focus Selector Dropdown */}
          <div className="nav-role-dropdown" style={{ position: 'relative' }}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={{
                background: 'rgba(0, 242, 254, 0.08)',
                border: '1px solid rgba(0, 242, 254, 0.3)',
                borderRadius: '10px',
                height: '32px',
                padding: '0 12px',
                boxSizing: 'border-box',
                color: '#fff',
                fontSize: '0.82rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-heading)'
              }}
            >
              {modeLabels[positionMode].icon}
              <span>{modeLabels[positionMode].label}</span>
              <ChevronDown size={14} color="#94a3b8" />
            </button>

            {dropdownOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '120%',
                  right: 0,
                  background: '#0d111d',
                  border: '1px solid rgba(0, 242, 254, 0.3)',
                  borderRadius: '12px',
                  padding: '6px',
                  minWidth: '200px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  zIndex: 110
                }}
              >
                <button
                  onClick={() => handleModeSelect('mobile')}
                  style={{
                    background: positionMode === 'mobile' ? 'rgba(0,242,254,0.15)' : 'transparent',
                    border: 'none',
                    color: positionMode === 'mobile' ? '#00f2fe' : '#cbd5e1',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    textAlign: 'left'
                  }}
                >
                  <Smartphone size={15} color="#00f2fe" /> Mobile Focus (RN)
                </button>
                <button
                  onClick={() => handleModeSelect('frontend')}
                  style={{
                    background: positionMode === 'frontend' ? 'rgba(79,172,254,0.15)' : 'transparent',
                    border: 'none',
                    color: positionMode === 'frontend' ? '#4facfe' : '#cbd5e1',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    textAlign: 'left'
                  }}
                >
                  <Monitor size={15} color="#4facfe" /> Frontend Focus (React.js)
                </button>
                <button
                  onClick={() => handleModeSelect('hybrid')}
                  style={{
                    background: positionMode === 'hybrid' ? 'rgba(127,0,255,0.15)' : 'transparent',
                    border: 'none',
                    color: positionMode === 'hybrid' ? '#d8b4fe' : '#cbd5e1',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    textAlign: 'left'
                  }}
                >
                  <Cpu size={15} color="#d8b4fe" /> Cross-Platform Lead
                </button>
              </div>
            )}
          </div>

          {/* Sound Toggle */}
          <button
            onClick={handleSoundToggle}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '10px',
              width: '32px',
              height: '32px',
              padding: '0',
              boxSizing: 'border-box',
              color: isSoundOn ? '#00f2fe' : '#64748b',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
            }}
            title={isSoundOn ? 'Mute Haptic Sound FX' : 'Enable Cyber Haptic Sound FX'}
          >
            {isSoundOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          {/* Resume CTA */}
          <button
            className="btn-neon-primary"
            onClick={() => {
              playCyberClick();
              onOpenResume();
            }}
            style={{
              height: '32px',
              padding: '0 14px',
              fontSize: '0.82rem',
              borderRadius: '10px',
              boxSizing: 'border-box',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <FileText size={15} />
            <span>Resume</span>
          </button>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            className="nav-mobile-toggle"
            onClick={() => {
              playCyberClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            style={{
              background: mobileMenuOpen ? 'rgba(0, 242, 254, 0.12)' : 'rgba(255, 255, 255, 0.05)',
              border: mobileMenuOpen ? '1px solid rgba(0, 242, 254, 0.45)' : '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '10px',
              width: '36px',
              height: '36px',
              color: mobileMenuOpen ? '#00f2fe' : '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0',
              transition: 'all 0.2s ease',
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Backdrop overlay via Portal to dim background & dismiss on outside click */}
      {mobileMenuOpen &&
        createPortal(
          <div
            onClick={() => {
              playCyberClick();
              setMobileMenuOpen(false);
            }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(3, 6, 15, 0.75)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              zIndex: 95,
              animation: 'fadeIn 0.2s ease',
            }}
          />,
          document.body
        )}

      {/* Full-Width Sleek Mobile Dropdown Sheet */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            width: '100%',
            background: '#0a0e1c',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            borderBottom: '2px solid #00f2fe',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.95), 0 10px 25px rgba(0, 242, 254, 0.35)',
            padding: '18px 20px 22px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            animation: 'hologramFadeIn 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
            boxSizing: 'border-box',
            maxHeight: 'calc(100vh - 75px)',
            overflowY: 'auto',
          }}
        >
          {/* Career Focus Mode Switcher */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 2px',
              }}
            >
              <span
                style={{
                  fontSize: '0.68rem',
                  color: '#64748b',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: '600',
                }}
              >
                Career Focus Mode
              </span>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  color:
                    positionMode === 'mobile'
                      ? '#00f2fe'
                      : positionMode === 'frontend'
                      ? '#4facfe'
                      : '#d8b4fe',
                  fontWeight: '600',
                }}
              >
                {modeLabels[positionMode].label}
              </span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '4px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                gap: '4px',
              }}
            >
              {[
                { id: 'mobile', label: 'Mobile RN', icon: <Smartphone size={13} />, color: '#00f2fe' },
                { id: 'frontend', label: 'Frontend', icon: <Monitor size={13} />, color: '#4facfe' },
                { id: 'hybrid', label: 'Lead', icon: <Cpu size={13} />, color: '#d8b4fe' },
              ].map((item) => {
                const isActive = positionMode === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleModeSelect(item.id)}
                    style={{
                      background: isActive ? `${item.color}18` : 'transparent',
                      border: isActive ? `1px solid ${item.color}66` : '1px solid transparent',
                      borderRadius: '8px',
                      padding: '8px 4px',
                      color: isActive ? item.color : '#94a3b8',
                      fontSize: '0.76rem',
                      fontWeight: isActive ? '600' : '500',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '5px',
                      transition: 'all 0.2s ease',
                      boxShadow: isActive ? `0 2px 10px ${item.color}30` : 'none',
                    }}
                  >
                    {React.cloneElement(item.icon, {
                      color: isActive ? item.color : '#64748b',
                      size: 13,
                    })}
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.06)' }}></div>

          {/* Navigation Links in Clean Vertical Stack */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  playCyberClick();
                  setMobileMenuOpen(false);
                }}
                style={{
                  color: '#f1f5f9',
                  textDecoration: 'none',
                  fontSize: '0.92rem',
                  fontWeight: '500',
                  padding: '11px 16px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.025)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 0.18s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 242, 254, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(0, 242, 254, 0.4)';
                  e.currentTarget.style.color = '#00f2fe';
                  e.currentTarget.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.025)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.color = '#f1f5f9';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: '#00f2fe',
                      opacity: 0.8,
                    }}
                  >
                    0{idx + 1}
                  </span>
                  <span>{link.name}</span>
                </div>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>&rarr;</span>
              </a>
            ))}
          </nav>

          {/* Quick Resume CTA inside Mobile Menu */}
          <div style={{ paddingTop: '2px' }}>
            <button
              className="btn-neon-primary"
              onClick={() => {
                playCyberClick();
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              style={{
                width: '100%',
                height: '42px',
                borderRadius: '10px',
                fontSize: '0.88rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              <FileText size={16} />
              <span>View Verified Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
