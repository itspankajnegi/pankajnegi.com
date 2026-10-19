import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';
import { playCyberClick, playSuccessChime } from '../utils/soundEffects';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    playCyberClick();
    window.print();
  };

  const handleCopyEmail = () => {
    playCyberClick();
    navigator.clipboard.writeText('pankajnegi.dev@gmail.com');
    playSuccessChime();
    alert('Email copied to clipboard!');
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(7, 9, 19, 0.92)',
        backdropFilter: 'blur(16px)',
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        overflowY: 'auto',
      }}
    >
      <div
        className="glass-panel resume-modal-dialog"
        style={{
          width: '100%',
          maxWidth: '860px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '40px',
          borderRadius: '24px',
          position: 'relative',
          background: '#0d111d',
          border: '1px solid rgba(0, 242, 254, 0.3)',
          boxShadow: '0 0 50px rgba(0, 242, 254, 0.2)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={() => { playCyberClick(); onClose(); }}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255,255,255,0.08)',
            border: 'none',
            color: '#fff',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Action Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '20px' }}>
          <div>
            <span style={{ fontSize: '0.78rem', color: '#00f2fe', fontFamily: 'var(--font-mono)' }}>VERIFIED CURRICULUM VITAE</span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#fff' }}>Pankaj Negi — Senior Engineer</h3>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={handlePrint}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#fff',
                padding: '8px 16px',
                borderRadius: '10px',
                fontSize: '0.85rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Printer size={16} /> Print / PDF
            </button>

            <button
              onClick={handleCopyEmail}
              className="btn-neon-primary"
              style={{ padding: '8px 18px', fontSize: '0.85rem' }}
            >
              <Mail size={16} /> Copy Contact
            </button>
          </div>
        </div>

        {/* Resume Document Body */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', color: '#cbd5e1' }}>
          
          {/* Header Summary */}
          <div>
            <h1 style={{ fontSize: '2rem', fontWeight: '800', color: '#fff', marginBottom: '6px' }}>Pankaj Negi</h1>
            <div style={{ fontSize: '1.1rem', color: '#00f2fe', fontWeight: '700', marginBottom: '12px' }}>
              Senior React Native Developer & Frontend Engineer (4+ Years Experience)
            </div>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#94a3b8' }}>
              Software Engineer with 4+ years of experience building and maintaining production-grade mobile applications (iOS & Android) and responsive web interfaces using React Native, React.js, and JavaScript. Specialized in real-time Chime SDK audio/video calls, Socket.IO messaging engines, payment gateways (Razorpay), and store deployments.
            </p>
          </div>

          {/* Technical Skills Categorized */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#fff', borderBottom: '1px solid rgba(0,242,254,0.3)', paddingBottom: '8px', marginBottom: '12px' }}>
              Core Technical Competencies
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '0.88rem' }}>
              <div><strong style={{ color: '#00f2fe' }}>Mobile:</strong> React Native, React Navigation, iOS & Android Native Bridges, Permissions</div>
              <div><strong style={{ color: '#4facfe' }}>Frontend:</strong> React.js, JavaScript (ES6+), Custom Hooks, Reusable UI Components</div>
              <div><strong style={{ color: '#7f00ff' }}>State & Data:</strong> Redux, MobX, React Query, REST APIs, Asynchronous JS</div>
              <div><strong style={{ color: '#e100ff' }}>Real-Time:</strong> Socket.IO, Amazon Chime SDK Audio/Video, Voice Notes</div>
              <div><strong style={{ color: '#f59e0b' }}>Integrations:</strong> Firebase, FCM/APNs Push, Razorpay Payments, Biometrics</div>
              <div><strong style={{ color: '#10b981' }}>Delivery:</strong> AppsFlyer, Mixpanel, Sentry, TestFlight, Google Play Console</div>
            </div>
          </div>

          {/* Key Featured Projects & Impact */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#fff', borderBottom: '1px solid rgba(0,242,254,0.3)', paddingBottom: '8px', marginBottom: '16px' }}>
              Production Projects
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <strong style={{ color: '#fff', fontSize: '1rem' }}>AstroKarma — 3-Product Ecosystem Suite</strong>
                  <span style={{ fontSize: '0.75rem', color: '#10b981', fontFamily: 'var(--font-mono)' }}>Associated with 1.5M+ Downloads</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#00f2fe', marginBottom: '8px' }}>
                  1. AstroKarma: Astrology & Kundli (User App) · 2. AstroKarma Astrologer (Astrologer Mobile App) · 3. AstroKarma CRM (Web Dashboard)
                </div>
                <ul style={{ paddingLeft: '20px', fontSize: '0.88rem', color: '#cbd5e1', lineHeight: '1.6' }}>
                  <li>Developed production features across 3 core ecosystem products: User Mobile App (React Native), Astrologer Mobile App (React Native), and Web CRM Dashboard (React.js).</li>
                  <li>Implemented real-time Socket.IO chat, voice notes, and Amazon Chime SDK audio/video consultation sessions.</li>
                  <li>Built Web CRM portal workflows for managing astrologer queues, account approvals, and platform metrics.</li>
                  <li>Integrated Razorpay payment gateways, FCM/APNs push notifications, and analytics events.</li>
                </ul>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <strong style={{ color: '#fff', fontSize: '1rem' }}>Finncub — Fintech Web Application</strong>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '8px' }}>React.js · JavaScript · REST API · High-Throughput Analytics</div>
                <ul style={{ paddingLeft: '20px', fontSize: '0.88rem', color: '#cbd5e1', lineHeight: '1.6' }}>
                  <li>Built interactive, data-driven dashboard UI components with React.js.</li>
                  <li>Managed state, REST API integration, loading fallbacks, and component reusability.</li>
                </ul>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <strong style={{ color: '#fff', fontSize: '1rem' }}>SVCL Saarthi — Customer Loan & EMI Management App</strong>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '8px' }}>React Native · S V Creditline Limited (RBI-Registered NBFC) · OTP Auth · EMI Schedules</div>
                <ul style={{ paddingLeft: '20px', fontSize: '0.88rem', color: '#cbd5e1', lineHeight: '1.6' }}>
                  <li>Engineered cross-platform React Native customer mobile app for S V Creditline Limited (SVCL) to manage microfinance accounts.</li>
                  <li>Built OTP-based authentication, real-time loan application tracking (In Progress, Approved, Disbursed), and EMI repayment schedule ledgers.</li>
                  <li>Integrated secure payment transaction history and direct branch manager customer support access.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ResumeModal;
