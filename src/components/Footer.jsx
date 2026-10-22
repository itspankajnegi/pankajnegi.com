import React from 'react';
import { ArrowUp, Heart, Code2 } from 'lucide-react';
import { playCyberClick } from '../utils/soundEffects';

const Footer = () => {
  const scrollToTop = () => {
    playCyberClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '40px 0',
        background: 'rgba(7, 9, 19, 0.95)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <div style={{ fontWeight: '800', fontSize: '1.1rem', color: '#fff', fontFamily: 'var(--font-heading)' }}>
            PANKAJ NEGI
          </div>
          <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
            Senior React Native Developer & Frontend Engineer · 4+ Years Experience
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <a
            href="https://www.linkedin.com/in/itspankajnegi"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '600', transition: 'color 0.2s ease' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#4facfe')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
          >
            LinkedIn
          </a>
          <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
          <a
            href="https://github.com/itspankajnegi"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '600', transition: 'color 0.2s ease' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#d8b4fe')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
          >
            GitHub
          </a>
        </div>

        <div style={{ fontSize: '0.8rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px' }}>
          Crafted with <Code2 size={14} color="#00f2fe" /> React.js & Cyber Aesthetics
        </div>

        <button
          onClick={scrollToTop}
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#fff',
            borderRadius: '50%',
            width: '42px',
            height: '42px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          title="Back to Top"
        >
          <ArrowUp size={20} />
        </button>
      </div>

      {/* Global Legal Fair Use & Trademark Disclosure */}
      <div style={{ maxWidth: '1280px', margin: '24px auto 0 auto', padding: '20px 24px 0 24px', borderTop: '1px solid rgba(255, 255, 255, 0.06)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <p style={{ margin: 0, fontSize: '0.72rem', color: '#64748b', lineHeight: '1.6' }}>
          <strong style={{ color: '#94a3b8' }}>Legal Disclaimer:</strong> All company names, brand logos, product trademarks, and app store badges displayed on this website belong to their respective copyright holders. Projects, architectural case studies, and screenshots are presented strictly to illustrate professional engineering contributions and software development experience under nominative fair use. No direct endorsement, sponsorship, or company ownership is implied.
        </p>
        <div style={{ fontSize: '0.72rem', color: '#475569' }}>
          &copy; {new Date().getFullYear()} Pankaj Negi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
