import React from 'react';
import { Play, Code, Mail, Download, Sparkles, ShieldCheck, Zap, Layers, Smartphone, Monitor } from 'lucide-react';
import { playCyberClick } from '../utils/soundEffects';

const Hero = ({ positionMode, onOpenResume }) => {
  const getHeroContent = () => {
    switch (positionMode) {
      case 'mobile':
        return {
          badge: '📱 Production Mobile App Specialist',
          titlePrefix: 'Senior React Native',
          titleSuffix: 'Mobile Architect',
          subtext:
            'I engineer scalable, high-performance iOS and Android applications. Specialized in 1.5M+ download apps, real-time Chime SDK audio/video communication, Socket.IO chat engines, native bridges, and zero-downtime Play Store & App Store deployments.',
          tags: ['React Native', 'iOS & Android', 'Chime SDK Audio/Video', 'Socket.IO Real-Time', 'Redux', 'Biometrics & KYC'],
        };
      case 'frontend':
        return {
          badge: '⚡ Web Architecture & Frontend Lead',
          titlePrefix: 'Senior Frontend',
          titleSuffix: 'React.js Engineer',
          subtext:
            'I craft responsive, high-throughput web applications and fintech dashboards. Expert in modern React.js architecture, reusable component systems, Redux/MobX state management, REST API optimization, and micro-frontend performance.',
          tags: ['React.js', 'JavaScript (ES6+)', 'Redux & React Query', 'REST API Integration', 'Fintech Dashboards', 'CSS3 & UI Systems'],
        };
      default:
        return {
          badge: '🌌 Cross-Platform Mobile & Web Specialist',
          titlePrefix: 'Senior React Native &',
          titleSuffix: 'Frontend Engineer',
          subtext:
            'I build scalable, high-performance mobile applications and responsive web experiences using React Native, React.js, and JavaScript. 4+ years delivering production-ready features, real-time communication, payment integrations, and seamless user journeys across iOS, Android, and Web.',
          tags: ['React Native', 'React.js', 'iOS & Android', 'Socket.IO', 'AppsFlyer & Mixpanel', 'Razorpay Payments'],
        };
    }
  };

  const content = getHeroContent();

  const metrics = [
    { label: 'Production Experience', value: '4+ Years', icon: <Zap size={18} color="#00f2fe" /> },
    { label: 'Associated App Downloads', value: '1.5M+', icon: <Smartphone size={18} color="#7f00ff" /> },
    { label: 'Production Crash-Free Rate', value: '99.8%', icon: <ShieldCheck size={18} color="#10b981" /> },
    { label: 'Real-Time Audio Latency', value: '<50ms', icon: <Layers size={18} color="#f59e0b" /> },
  ];

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        paddingTop: '130px',
        paddingBottom: '80px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
        <div className="responsive-grid-hero">
          
          {/* Left Column Text & CTAs */}
          <div>
            {/* Status Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '6px 16px',
                borderRadius: '30px',
                background: 'rgba(0, 242, 254, 0.08)',
                border: '1px solid rgba(0, 242, 254, 0.25)',
                marginBottom: '24px',
              }}
            >
              <Sparkles size={16} color="#00f2fe" className="pulse-glow" />
              <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#00f2fe', fontFamily: 'var(--font-mono)' }}>
                {content.badge}
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                fontWeight: '800',
                lineHeight: '1.1',
                marginBottom: '20px',
                letterSpacing: '-0.02em',
              }}
            >
              {content.titlePrefix} <br />
              <span className="gradient-text-purple">{content.titleSuffix}</span>
            </h1>

            {/* Subtext */}
            <p
              style={{
                fontSize: '1.1rem',
                color: '#94a3b8',
                maxWidth: '640px',
                marginBottom: '32px',
                lineHeight: '1.7',
              }}
            >
              {content.subtext}
            </p>

            {/* Tech Tags Badge Strip */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '40px' }}>
              {content.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    color: '#e2e8f0',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '4px 12px',
                    borderRadius: '8px',
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
              <a
                href="#simulators"
                className="btn-neon-primary"
                onClick={() => playCyberClick()}
                style={{
                  height: '48px',
                  padding: '0 24px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  boxSizing: 'border-box',
                }}
              >
                <Play size={18} />
                <span>Test Interactive Simulators</span>
              </a>

              <a
                href="#architecture"
                className="btn-neon-secondary"
                onClick={() => playCyberClick()}
                style={{
                  height: '48px',
                  padding: '0 24px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  boxSizing: 'border-box',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 242, 254, 0.12)';
                  e.currentTarget.style.borderColor = 'rgba(0, 242, 254, 0.8)';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 242, 254, 0.55)';
                  e.currentTarget.style.color = '#00f2fe';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.14)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.color = '#f8fafc';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Code size={18} />
                <span>Under The Hood</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  playCyberClick();
                  onOpenResume();
                }}
                className="btn-neon-secondary"
                style={{
                  height: '48px',
                  padding: '0 24px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  boxSizing: 'border-box',
                  background: 'rgba(127, 0, 255, 0.15)',
                  borderColor: 'rgba(127, 0, 255, 0.4)',
                  color: '#d8b4fe',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(127, 0, 255, 0.35)';
                  e.currentTarget.style.borderColor = 'rgba(127, 0, 255, 0.85)';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(127, 0, 255, 0.6)';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(127, 0, 255, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(127, 0, 255, 0.4)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.color = '#d8b4fe';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Download size={18} />
                <span>Download Resume</span>
              </button>
            </div>
          </div>

          {/* Right Column Cyber Badge & Interactive Card */}
          <div>
            <div className="glass-panel" style={{ padding: '32px', position: 'relative', overflow: 'hidden' }}>
              {/* Radial background ambient glow */}
              <div
                style={{
                  position: 'absolute',
                  top: '-30%',
                  right: '-30%',
                  width: '250px',
                  height: '250px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(0, 242, 254, 0.25) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }}
              />

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div className="live-status-indicator">
                    <span className="live-status-ping" />
                    <span className="live-status-dot" />
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#10b981', fontWeight: '600' }}>
                    PRODUCTION STATUS: ACTIVE
                  </span>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#64748b' }}>
                  v4.2.0-STABLE
                </span>
              </div>

              <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '20px', marginBottom: '24px' }}>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                  Primary Engineering Ecosystem
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: '700', color: '#fff', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {positionMode === 'mobile' ? (
                    <>
                      <Smartphone size={22} color="#00f2fe" /> iOS & Android Native Bridges
                    </>
                  ) : positionMode === 'frontend' ? (
                    <>
                      <Monitor size={22} color="#4facfe" /> React.js & Web Micro-Frontends
                    </>
                  ) : (
                    <>
                      <Layers size={22} color="#7f00ff" /> Cross-Platform Mobile & Web Stack
                    </>
                  )}
                </div>
              </div>

              {/* Metrics Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {metrics.map((m, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      borderRadius: '14px',
                      padding: '16px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      {m.icon}
                      <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{m.label}</span>
                    </div>
                    <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#fff', fontFamily: 'var(--font-heading)' }}>
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Live Signal Indicator */}
              <div
                style={{
                  marginTop: '24px',
                  background: 'rgba(0, 242, 254, 0.05)',
                  border: '1px dashed rgba(0, 242, 254, 0.3)',
                  borderRadius: '12px',
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ fontSize: '0.8rem', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ display: 'inline-block', width: '8px', height: '8px', background: '#00f2fe', borderRadius: '50%' }} className="pulse-glow" />
                  Ready for Senior / Lead Engineering Roles
                </div>
                <a
                  href="#contact"
                  onClick={() => playCyberClick()}
                  style={{ color: '#00f2fe', fontSize: '0.8rem', fontWeight: '700', textDecoration: 'none' }}
                >
                  Hire Me &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
