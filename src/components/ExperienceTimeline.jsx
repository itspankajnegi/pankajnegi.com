import React from 'react';
import { Briefcase, Calendar, CheckCircle2, User, Code2, ShieldAlert, Cpu } from 'lucide-react';

const ExperienceTimeline = () => {
  const achievements = [
    {
      role: 'Senior Software Engineer / React Native Lead',
      duration: '4+ Years Engineering Experience',
      focus: 'Mobile (iOS & Android) & Frontend Web',
      highlights: [
        'Architected cross-platform React Native features powering 1.5M+ user downloads in production.',
        'Engineered real-time socket chat, Amazon Chime SDK audio/video sessions, and voice notes.',
        'Integrated Razorpay payment gateways, biometric auth, and FCM/APNs push notification engines.',
        'Delivered responsive web interfaces in React.js with reusable component architecture and state caching.',
        'Managed production releases on Apple App Store & Google Play Store with zero downtime.'
      ]
    }
  ];

  return (
    <section id="experience" style={{ padding: '90px 0', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#f59e0b', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginBottom: '12px' }}>
            <Briefcase size={16} /> CAREER TRAJECTORY & PROVEN IMPACT
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', marginBottom: '16px' }}>
            Professional <span className="gradient-text-amber">Experience Summary</span>
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '640px', margin: '0 auto', fontSize: '1rem' }}>
            4+ years of hands-on production engineering across mobile apps and modern web interfaces.
          </p>
        </div>

        {/* Narrative Box */}
        <div className="glass-panel" style={{ padding: '36px', borderRadius: '24px', marginBottom: '32px' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>
            Building Scalable Products That Solve Real Problems
          </h3>
          <p style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.02rem', marginBottom: '20px' }}>
            I'm a Software Engineer with 4+ years of experience building and maintaining production-grade mobile applications and web interfaces using React Native, React.js, and JavaScript.
          </p>
          <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '0.98rem' }}>
            My experience includes developing cross-platform applications, integrating REST APIs and payment gateways, implementing real-time chat and audio/video communication features, optimizing application performance, and integrating analytics, push notifications, and authentication workflows. I collaborate closely with backend engineers, designers, QA teams, and product stakeholders to deliver reliable, scalable, and user-focused solutions.
          </p>
        </div>

        {/* Achievements Timeline Cards */}
        {achievements.map((item, idx) => (
          <div
            key={idx}
            className="glass-panel"
            style={{
              padding: '32px',
              borderRadius: '20px',
              borderLeft: '4px solid #f59e0b',
              marginBottom: '36px'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
              <div>
                <div style={{ fontSize: '1.3rem', fontWeight: '800', color: '#fff', marginBottom: '4px' }}>
                  {item.role}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#00f2fe', fontFamily: 'var(--font-mono)' }}>
                  {item.focus}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)', padding: '6px 14px', borderRadius: '20px', color: '#f59e0b', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>
                <Calendar size={14} />
                {item.duration}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '16px' }}>
              {item.highlights.map((point, pIdx) => (
                <div
                  key={pIdx}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '12px',
                    padding: '16px',
                    display: 'flex',
                    gap: '12px'
                  }}
                >
                  <CheckCircle2 size={18} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ color: '#e2e8f0', fontSize: '0.9rem', lineHeight: '1.5' }}>
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Engineering Philosophy: Building Software That Performs Under Pressure */}
        <div className="glass-panel" style={{ padding: '40px', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
          <div className="responsive-grid-two-col">
            
            {/* Left Column: Philosophy Narrative & Quote */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#00f2fe', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginBottom: '12px' }}>
                <User size={16} /> ENGINEERING PHILOSOPHY & CRAFT
              </div>
              <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '20px', lineHeight: '1.3' }}>
                Building Software That <span className="gradient-text">Performs Under Pressure</span>
              </h3>

              <p style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '1rem', marginBottom: '16px' }}>
                I enjoy turning complex requirements into reliable, intuitive software experiences. My work spans cross-platform mobile development and modern frontend engineering, with a focus on reusable architecture, maintainable code, and production reliability.
              </p>

              <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '0.95rem', marginBottom: '24px' }}>
                Over the years, I've worked on features involving real-time communication, payments, analytics, authentication, and app lifecycle management. I value understanding not just how a feature should look, but how it behaves under real-world conditions.
              </p>

              <div style={{ background: 'rgba(0, 242, 254, 0.05)', borderLeft: '3px solid #00f2fe', padding: '16px 20px', borderRadius: '0 12px 12px 0', fontSize: '0.9rem', color: '#e2e8f0' }}>
                "Continuously strengthening JavaScript fundamentals, React architecture knowledge, problem-solving skills, and system design understanding."
              </div>
            </div>

            {/* Right Column: 3 Core Engineering Principles */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '20px', borderRadius: '16px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ background: 'rgba(0,242,254,0.1)', padding: '12px', borderRadius: '12px', flexShrink: 0 }}>
                  <Code2 size={24} color="#00f2fe" />
                </div>
                <div>
                  <div style={{ fontWeight: '700', color: '#fff', fontSize: '1rem', marginBottom: '4px' }}>Clean, Maintainable Code</div>
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: '1.5' }}>Strict component decoupling, reusable custom hooks, and predictable state mutation.</div>
                </div>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '20px', borderRadius: '16px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ background: 'rgba(127,0,255,0.1)', padding: '12px', borderRadius: '12px', flexShrink: 0 }}>
                  <ShieldAlert size={24} color="#7f00ff" />
                </div>
                <div>
                  <div style={{ fontWeight: '700', color: '#fff', fontSize: '1rem', marginBottom: '4px' }}>Zero-Downtime Reliability</div>
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: '1.5' }}>Proactive error logging via Sentry, offline optimistic fallback queues, and retry handlers.</div>
                </div>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '20px', borderRadius: '16px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ background: 'rgba(16,185,129,0.1)', padding: '12px', borderRadius: '12px', flexShrink: 0 }}>
                  <Cpu size={24} color="#10b981" />
                </div>
                <div>
                  <div style={{ fontWeight: '700', color: '#fff', fontSize: '1rem', marginBottom: '4px' }}>User-Centric Performance</div>
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: '1.5' }}>Fast 60 FPS mobile UI interactions, zero frame drops, and sub-100ms API response handling.</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceTimeline;
