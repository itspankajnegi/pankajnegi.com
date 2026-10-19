import React, { useState } from 'react';
import { Smartphone, Monitor, Database, Radio, Lock, Activity, Sparkles, Check } from 'lucide-react';
import { playCyberClick } from '../utils/soundEffects';

const TechnicalSkills = ({ positionMode }) => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const categories = [
    {
      id: 'mobile',
      title: 'Mobile Development',
      icon: <Smartphone size={22} color="#00f2fe" />,
      color: '#00f2fe',
      skills: [
        { name: 'React Native', usedIn: ['AstroKarma', 'Saarthi'] },
        { name: 'React Navigation', usedIn: ['AstroKarma', 'Saarthi'] },
        { name: 'iOS & Android Native', usedIn: ['AstroKarma', 'Saarthi'] },
        { name: 'Native Permissions', usedIn: ['Saarthi', 'AstroKarma'] },
        { name: 'App Lifecycle Management', usedIn: ['AstroKarma', 'Saarthi'] },
        { name: 'Production Store Releases', usedIn: ['AstroKarma', 'Saarthi'] },
        { name: 'Responsive Mobile Layouts', usedIn: ['AstroKarma', 'Saarthi'] }
      ]
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <Monitor size={22} color="#4facfe" />,
      color: '#4facfe',
      skills: [
        { name: 'React.js', usedIn: ['Finncub', 'Portfolio'] },
        { name: 'JavaScript (ES6+)', usedIn: ['AstroKarma', 'Finncub', 'Saarthi'] },
        { name: 'JSX & Custom Hooks', usedIn: ['Finncub', 'AstroKarma'] },
        { name: 'Reusable UI Components', usedIn: ['Finncub', 'Saarthi'] },
        { name: 'Higher-Order Components (HOC)', usedIn: ['Finncub', 'AstroKarma'] },
        { name: 'Responsive UI Architecture', usedIn: ['Finncub', 'Saarthi'] },
        { name: 'HTML5 & CSS3 Systems', usedIn: ['Finncub', 'Portfolio'] }
      ]
    },
    {
      id: 'state',
      title: 'State Management & Data',
      icon: <Database size={22} color="#7f00ff" />,
      color: '#7f00ff',
      skills: [
        { name: 'Redux / Redux Toolkit', usedIn: ['AstroKarma', 'Finncub'] },
        { name: 'MobX', usedIn: ['Finncub'] },
        { name: 'React Query', usedIn: ['Finncub', 'AstroKarma'] },
        { name: 'REST API Integration', usedIn: ['AstroKarma', 'Finncub', 'Saarthi'] },
        { name: 'Asynchronous JavaScript', usedIn: ['AstroKarma', 'Finncub', 'Saarthi'] },
        { name: 'Optimistic Caching', usedIn: ['Finncub', 'Saarthi'] },
        { name: 'Loading & Error Fallbacks', usedIn: ['AstroKarma', 'Finncub', 'Saarthi'] }
      ]
    },
    {
      id: 'realtime',
      title: 'Real-Time & Communication',
      icon: <Radio size={22} color="#e100ff" />,
      color: '#e100ff',
      skills: [
        { name: 'Socket.IO Messaging', usedIn: ['AstroKarma'] },
        { name: 'Amazon Chime SDK', usedIn: ['AstroKarma'] },
        { name: 'Real-Time WebSockets', usedIn: ['AstroKarma'] },
        { name: 'Voice Notes & Audio Recording', usedIn: ['AstroKarma'] },
        { name: 'Chat Media Attachments', usedIn: ['AstroKarma'] },
        { name: 'Session-Based Workflows', usedIn: ['AstroKarma'] }
      ]
    },
    {
      id: 'security',
      title: 'Integrations & Security',
      icon: <Lock size={22} color="#f59e0b" />,
      color: '#f59e0b',
      skills: [
        { name: 'Firebase Ecosystem', usedIn: ['AstroKarma', 'Saarthi'] },
        { name: 'FCM / APNs Push Notifications', usedIn: ['AstroKarma', 'Saarthi'] },
        { name: 'Biometric Authentication', usedIn: ['AstroKarma'] },
        { name: 'KYC Workflows', usedIn: ['AstroKarma', 'Finncub'] },
        { name: 'Razorpay Payment Gateway', usedIn: ['AstroKarma'] }
      ]
    },
    {
      id: 'analytics',
      title: 'Analytics, Quality & Delivery',
      icon: <Activity size={22} color="#10b981" />,
      color: '#10b981',
      skills: [
        { name: 'AppsFlyer & Mixpanel', usedIn: ['AstroKarma'] },
        { name: 'Sentry Error Tracking', usedIn: ['AstroKarma', 'Finncub'] },
        { name: 'Git & Version Control', usedIn: ['AstroKarma', 'Finncub', 'Saarthi'] },
        { name: 'Docker Fundamentals & Jenkins', usedIn: ['AstroKarma', 'Finncub'] },
        { name: 'TestFlight & Google Play Console', usedIn: ['AstroKarma', 'Saarthi'] },
        { name: 'Performance Debugging', usedIn: ['AstroKarma', 'Finncub', 'Saarthi'] }
      ]
    }
  ];

  const handleSkillClick = (skillName) => {
    playCyberClick();
    if (selectedSkill === skillName) {
      setSelectedSkill(null);
    } else {
      setSelectedSkill(skillName);
    }
  };

  return (
    <section id="skills" style={{ padding: '90px 0', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#7f00ff', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginBottom: '12px' }}>
            <Sparkles size={16} /> ENGINEERING COMPETENCY MATRIX
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', marginBottom: '16px' }}>
            Technical <span className="gradient-text-purple">Skills & Tooling</span>
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '640px', margin: '0 auto', fontSize: '1rem' }}>
            Categorized production technologies. Click any skill tag to trace which project leverages it in production!
          </p>
        </div>

        {/* Selected Skill Trace Pill */}
        {selectedSkill && (
          <div
            style={{
              background: 'rgba(0,242,254,0.1)',
              border: '1px solid #00f2fe',
              borderRadius: '12px',
              padding: '12px 24px',
              maxWidth: '600px',
              margin: '0 auto 32px auto',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px'
            }}
          >
            <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Skill Highlighted:</span>
            <strong style={{ color: '#00f2fe', fontSize: '1rem' }}>{selectedSkill}</strong>
            <button
              onClick={() => setSelectedSkill(null)}
              style={{ background: 'transparent', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: '0.8rem', textDecoration: 'underline' }}
            >
              Clear Filter
            </button>
          </div>
        )}

        {/* Grid of Skill Categories */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px' }}>
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="glass-panel"
              style={{
                padding: '28px',
                borderTop: `3px solid ${cat.color}`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ background: 'rgba(255,255,255,0.04)', padding: '10px', borderRadius: '12px' }}>
                  {cat.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff' }}>
                  {cat.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {cat.skills.map((skill) => {
                  const isSelected = selectedSkill === skill.name;
                  return (
                    <button
                      key={skill.name}
                      onClick={() => handleSkillClick(skill.name)}
                      style={{
                        background: isSelected ? cat.color : 'rgba(255, 255, 255, 0.04)',
                        color: isSelected ? '#070913' : '#e2e8f0',
                        border: isSelected ? `1px solid ${cat.color}` : '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '10px',
                        padding: '8px 14px',
                        fontSize: '0.82rem',
                        fontWeight: isSelected ? '700' : '500',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      {isSelected && <Check size={14} />}
                      {skill.name}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechnicalSkills;
