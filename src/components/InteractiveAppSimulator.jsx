import React, { useState, useEffect, useRef } from 'react';
import { Smartphone, Monitor, CreditCard, Send, PhoneOff, Volume2, CheckCircle2, RefreshCw, Sparkles, Radio, Globe, ChevronLeft, ChevronRight, ExternalLink, Star, Award, Info } from 'lucide-react';
import { playCyberClick, playSuccessChime } from '../utils/soundEffects';

const InteractiveAppSimulator = ({ activeProject, setActiveProject }) => {
  const [currentApp, setCurrentApp] = useState(activeProject || 'astrokarma');
  const [astroAppView, setAstroAppView] = useState('userApp'); // 'userApp' | 'astrologerApp' | 'crmWeb'
  const [viewMode, setViewMode] = useState('sandbox'); // 'sandbox' | 'screenshot'

  // AstroKarma Chat State
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: 'astrologer', text: 'Namaste! Welcome to AstroKarma. I have generated your Vedic Kundli.', time: '10:42 AM' },
    { id: 2, sender: 'user', text: 'Hi! What does my career chart say for 2026?', time: '10:43 AM' },
    { id: 3, sender: 'astrologer', text: 'Jupiter is transiting your 10th house. Strong indication for senior leadership roles in tech!', time: '10:43 AM' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isAstrologerTyping, setIsAstrologerTyping] = useState(false);
  const chatContainerRef = useRef(null);
  const chatInputRef = useRef(null);

  // AstroKarma Call State
  const [callActive, setCallActive] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [astroSubTab, setAstroSubTab] = useState('chat'); // 'chat' | 'call' | 'kundli'

  // Finncub Fintech State
  const [timeframe, setTimeframe] = useState('7d');
  const [currency, setCurrency] = useState('INR');
  const [apiLog, setApiLog] = useState('GET /api/v2/transactions HTTP/1.1 200 OK - 42ms');

  // Saarthi Fleet State
  const [syncStatus, setSyncStatus] = useState('SYNCED');
  const [isSimulatingSync, setIsSimulatingSync] = useState(false);

  // App Store Screenshots State
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState(0);

  const astroScreenshots = [
    {
      id: 1,
      image: '/screenshots/astrokarma_1.webp',
      title: "India's Most Trusted Astrology App",
      category: 'Storefront & High-Growth Onboarding',
      subtitle: 'Celebrity Endorsement & High-Conversion Funnel',
      description: 'Official Google Play Store flagship banner featuring Dr. Jai Madaan. Optimized for conversion with minimal cold-start boot time (<1.8s) across budget Android and flagship iOS devices.',
      features: [
        'React Native bundle optimization & Hermes bytecode precompilation',
        'Dynamic splash flow and progressive asset hydration',
        'Over 1.5 Million organic user acquisitions via optimized store listing'
      ],
      tags: ['1.5M+ Downloads', 'Hermes Engine', 'Cold Start <1.8s', 'Android & iOS'],
      metrics: '4.7★ Rating · 1.5M+ Installs'
    },
    {
      id: 2,
      image: '/screenshots/astrokarma_2.webp',
      title: 'Real-Time Astrologer Marketplace & Discovery',
      category: 'Real-Time Marketplace',
      subtitle: 'Dynamic Astrologer Feed with Live Queue Telemetry',
      description: 'Engineered high-performance FlatList virtualization with real-time Socket.IO presence, experience/price filters, wait-time telemetry, and per-minute wallet deduction triggers.',
      features: [
        'FlatList virtualization handling 1,200+ active practitioners smoothly at 60 FPS',
        'Socket.IO live status telemetry (Online, Busy in Call, In Chat, Offline)',
        'Per-minute wallet billing calculations synchronized with backend timer'
      ],
      tags: ['Socket.IO Client', 'Virtual FlatList', 'Real-Time Presence', 'Wallet Deduction'],
      metrics: '1,200+ Verified Astrologers'
    },
    {
      id: 3,
      image: '/screenshots/astrokarma_3.webp',
      title: 'Vedic Kundli, Horoscope & Matchmaking Suite',
      category: 'Calculation Engine & Astrology Hub',
      subtitle: 'Instant Janam Kundli & 36-Gun Compatibility Matching',
      description: 'Implemented comprehensive astrological service hubs (Daily Horoscope, Free Kundli, Kundli Matching, Tarot, Vastu, Palmistry) with instant native computation.',
      features: [
        'Vedic astrology planetary degree calculation algorithm rendered natively',
        'SVG-based North and South Indian Kundli chart rendering',
        'Custom modular bottom sheets for quick categorization and seamless navigation'
      ],
      tags: ['SVG Charts', 'Native Math Engine', 'Astrology Algorithms', 'State Management'],
      metrics: '100% Client-Side Chart Rendering'
    },
    {
      id: 4,
      image: '/screenshots/astrokarma_4.webp',
      title: '24/7 Instant Live Consultation Queue',
      category: 'Real-Time Communication',
      subtitle: 'Direct Astrologer Calling & Real-Time Chat System',
      description: 'Production chat and calling gateway integrating Amazon Chime SDK WebRTC, live audio notes, typing indicators, and Razorpay in-app payment auto-recharge.',
      features: [
        'Amazon Chime SDK WebRTC audio sessions with low-latency fallback',
        'Interactive audio voice notes with real-time metering and waveform visualizer',
        'Integrated Razorpay native SDK with automatic low-balance wallet top-ups'
      ],
      tags: ['Amazon Chime SDK', 'Audio Voice Notes', 'Razorpay Payments', 'Low Latency'],
      metrics: '<50ms WebSocket Audio Latency'
    },
    {
      id: 5,
      image: '/screenshots/astrokarma_5.webp',
      title: 'Worldwide Geolocation & Global Scale',
      category: 'Global Infrastructure & Scale',
      subtitle: 'Serving Millions Across India, Middle East & Worldwide',
      description: 'Scaled cross-platform architecture deployed globally across multiple timezones with APNs/FCM push notifications, AppsFlyer attribution, and Sentry crash telemetry.',
      features: [
        'Global CDN caching and multi-region WebSocket connection failovers',
        'Push notifications via Firebase Cloud Messaging (FCM) & Apple Push (APNs)',
        'Maintained a 99.8% crash-free user rate across 1.5M+ production downloads'
      ],
      tags: ['99.8% Crash-Free', 'FCM & APNs', 'AppsFlyer Analytics', 'Sentry Monitoring'],
      metrics: 'Active in 20+ Countries'
    }
  ];

  // SVCL Sarthi App Store Screenshots State
  const [activeSvclScreenshotIndex, setActiveSvclScreenshotIndex] = useState(0);

  const svclScreenshots = [
    {
      id: 1,
      image: '/screenshots/svcl_1.webp',
      title: 'Borrower Dashboard & Vernacular Alerts',
      category: 'Fintech Hub & Real-Time Alerts',
      subtitle: 'Accessible Vernacular Dashboard for Tier-2/3 Microfinance Borrowers',
      description: 'Production home screen engineered for high accessibility and clarity. Displays active loan overview, overdue EMI alert badges, credit score impact guidance, one-tap quick-pay CTA, and fast navigation to loan records.',
      features: [
        'High-contrast UI designed for diverse literacy levels and low-cost Android hardware',
        'Dynamic overdue warning badge linked with bureau credit score protection guidance',
        'Direct quick-action tiles for loan status, loan details, payment history, and grievance desk'
      ],
      tags: ['React Native Android', 'Vernacular UI', 'Accessibility', 'Credit Risk Alerts'],
      metrics: '50K+ Microfinance Borrowers'
    },
    {
      id: 2,
      image: '/screenshots/svcl_2.webp',
      title: 'Multi-Language Localization (Hindi / English)',
      category: 'i18n & Regional Inclusivity',
      subtitle: 'Instant In-App Language Switching without App Reload',
      description: 'Comprehensive i18n localization engine supporting English and Hindi. Enables rural microfinance women borrowers and field officers to navigate and comprehend loan repayment terms in their native script.',
      features: [
        'Context-based i18n translation provider updating all strings without unmounting navigation stack',
        'AsyncStorage persistence for borrower language preferences',
        'Custom Devanagari font rendering optimized for clear legibility on budget smartphones'
      ],
      tags: ['i18n Localization', 'Hindi / English', 'Devanagari Typography', 'AsyncStorage'],
      metrics: '100% Vernacular Coverage'
    },
    {
      id: 3,
      image: '/screenshots/svcl_3.webp',
      title: 'EMI Schedule & Payment Gateway Breakdown',
      category: 'Repayment Engine & Ledger',
      subtitle: 'Transparent Installment Breakdown with One-Tap UPI Settlement',
      description: 'Real-time installment ledger showing total outstanding dues, monthly EMI amounts, overdue sums, and chronological status badges (NOT PAID, UPCOMING, PAID) with integrated payment triggers.',
      features: [
        'Chronological installment timeline with color-coded repayment states',
        'Integration with payment gateways supporting UPI, Netbanking, and Debit Card transactions',
        'Real-time overdue calculation preventing inadvertent default penalty accrual'
      ],
      tags: ['Payment Gateways', 'UPI & Netbanking', 'EMI Ledger', 'Due Date Telemetry'],
      metrics: 'Zero Reconciliation Drift'
    },
    {
      id: 4,
      image: '/screenshots/svcl_4.webp',
      title: 'Loan Disbursal Lifecycle Tracker',
      category: 'Stage Progression Tracker',
      subtitle: '3-Stage Stepper: In Progress ➔ Approved ➔ Disbursed',
      description: 'Visual multi-stage application progression tracker giving borrowers full transparency into loan codes, sanctioned amounts, monthly EMI schedules, and disbursal dates.',
      features: [
        'Deterministic stage-stepper component illustrating approval lifecycle state machines',
        'Multi-loan portfolio view handling concurrent income generation and vehicle loans',
        'Automated status polling and push notifications upon approval milestones'
      ],
      tags: ['State Machine UI', 'Loan Lifecycle', 'Status Stepper', 'Portfolio Management'],
      metrics: '3-Stage Real-Time Stepper'
    },
    {
      id: 5,
      image: '/screenshots/svcl_5.webp',
      title: 'Microfinance Center & Group Meeting Telemetry',
      category: 'Field Operations & Group Lending',
      subtitle: 'Center Meeting Schedules & Loan Fee Breakdowns',
      description: 'Detailed loan account summary displaying microfinance center codes, neighborhood cluster names (e.g., Harda center), designated weekly collection day & time, processing fees, and insurance charges.',
      features: [
        'Synchronized center meeting day and time telemetry for field collection coordination',
        'Transparent breakdown of processing fee and insurance charges per RBI NBFC regulations',
        'Collapsible accordion card architecture handling multiple loan facilities per borrower'
      ],
      tags: ['Joint Liability Group', 'Field Sync', 'Center Telemetry', 'RBI Compliance'],
      metrics: 'RBI-Compliant Breakdown'
    },
    {
      id: 6,
      image: '/screenshots/svcl_6.webp',
      title: 'Transaction History & Collection Ledger',
      category: 'Audit Trail & Collections',
      subtitle: 'Complete Historical Receipts & Payment Mode Records',
      description: 'High-volume FlatList virtualization listing complete repayment records with payment dates, exact installment amounts, and collection modes (Cash collection vs. Digital UPI transfer).',
      features: [
        'Infinite scroll FlatList virtualization optimized for multi-year borrowing histories',
        'Tracks both field cash collections and digital in-app repayments',
        'Tamper-evident receipt logs accessible even during offline network conditions'
      ],
      tags: ['Virtual FlatList', 'Cash & UPI Logs', 'Receipt History', 'Offline-First'],
      metrics: '100% Audit Reconciliation'
    }
  ];

  // Finncub Screenshots State
  const [activeFinncubScreenshotIndex, setActiveFinncubScreenshotIndex] = useState(0);

  const finncubScreenshots = [
    {
      id: 1,
      image: '/screenshots/finncub_1.png',
      url: 'https://finncub.com/platform/metrics',
      title: 'Digital Lending Infrastructure & Scale Metrics',
      category: 'Fintech Platform & Scale',
      subtitle: 'Making Lending Seamless, Cost-Effective & Scalable',
      description: 'Official enterprise lending overview engineered to scale microfinance and fintech institutions. Features high-throughput asynchronous processing for loan originations, real-time credit decisioning, and extensive partner telemetry.',
      features: [
        'High-throughput state management handling 35 Lakh+ loan applications',
        '35M+ digital loan transactions facilitated across banks, NBFCs, and co-lenders',
        '100+ secure API integrations with bureau registries, e-KYC, and payment switches'
      ],
      tags: ['React.js Architecture', 'High Throughput', '100+ APIs', '35M+ Transactions'],
      metrics: '35M+ Transactions'
    },
    {
      id: 2,
      image: '/screenshots/finncub_2.png',
      url: 'https://app.finncub.io/shg-portal',
      title: 'Self-Help Groups (SHGs) & Group Loan Portal',
      category: 'Enterprise Portal & SHG Workflows',
      subtitle: 'Purpose-Built Financial Inclusion & Group Management',
      description: 'Desktop React.js web dashboard empowering institutions to manage joint-liability microfinance groups, automate mandatory member savings tracking, and trigger bulk loan disbursements.',
      features: [
        'Modular dashboard components for bulk group loan origination and approval queues',
        'Real-time automated savings telemetry and credit health monitoring',
        'Optimistic cache invalidation for sub-second audit log updates'
      ],
      tags: ['React.js Dashboard', 'Group Lending (SHG)', 'Bulk Disbursement', 'State Machine'],
      metrics: 'Zero-Discrepancy Group Ledger'
    },
    {
      id: 3,
      image: '/screenshots/finncub_3.png',
      url: 'https://app.finncub.io/collections',
      title: 'Real-Time Collections & Recovery Dashboard',
      category: 'Analytics & Debt Recovery',
      subtitle: 'Automated Dues Monitoring & Smart Recovery Insights',
      description: 'Real-time collections management console featuring intelligent recovery forecasting, automated omnichannel payment reminders, multiple payment gateway switches, and instant ledger reconciliation.',
      features: [
        'Dynamic recovery insight metrics reducing portfolio-at-risk (PAR) defaults',
        'Multi-rail payment orchestration supporting BBPS, UPI AutoPay, and NACH mandates',
        'Automated real-time reconciliation engine eliminating manual bank statement matching'
      ],
      tags: ['Real-Time Analytics', 'Automated Reminders', 'UPI AutoPay', 'Reconciliation'],
      metrics: 'Automated Dues Tracking'
    },
    {
      id: 4,
      image: '/screenshots/finncub_4.png',
      url: 'https://field.finncub.io/centers',
      title: 'Field Operations & Branch Center Telemetry',
      category: 'Mobile Field Operations',
      subtitle: 'Lending Operations & Verification at Your Fingertips',
      description: 'Mobile-responsive interface engineered for field loan officers and branch coordinators. Enables real-time verification (CGT), center meeting attendance, and instant loan account lifecycle activations.',
      features: [
        'Location-based center coordination with Gurgaon, Delhi, and regional branch hubs',
        'Continuous Group Training (CGT) verification checklists with offline support',
        'Fast biometric e-KYC and digital signature verification flows'
      ],
      tags: ['Mobile Web & React', 'Field Verification (CGT)', 'Center Operations', 'e-KYC'],
      metrics: 'Multi-Branch Synchronization'
    }
  ];

  const astroThumbnailsRef = useRef(null);
  const svclThumbnailsRef = useRef(null);
  const finncubThumbnailsRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages, isAstrologerTyping]);

  useEffect(() => {
    if (svclThumbnailsRef.current) {
      const container = svclThumbnailsRef.current;
      const activeEl = container.children[activeSvclScreenshotIndex];
      if (activeEl) {
        const targetScrollLeft = activeEl.offsetLeft - (container.clientWidth / 2) + (activeEl.clientWidth / 2);
        container.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });
      }
    }
  }, [activeSvclScreenshotIndex]);

  useEffect(() => {
    if (astroThumbnailsRef.current) {
      const container = astroThumbnailsRef.current;
      const activeEl = container.children[activeScreenshotIndex];
      if (activeEl) {
        const targetScrollLeft = activeEl.offsetLeft - (container.clientWidth / 2) + (activeEl.clientWidth / 2);
        container.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });
      }
    }
  }, [activeScreenshotIndex]);

  useEffect(() => {
    if (finncubThumbnailsRef.current) {
      const container = finncubThumbnailsRef.current;
      const activeEl = container.children[activeFinncubScreenshotIndex];
      if (activeEl) {
        const targetScrollLeft = activeEl.offsetLeft - (container.clientWidth / 2) + (activeEl.clientWidth / 2);
        container.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });
      }
    }
  }, [activeFinncubScreenshotIndex]);

  useEffect(() => {
    let interval;
    if (callActive) {
      interval = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);
    } else {
      setCallDuration(0);
    }
    return () => clearInterval(interval);
  }, [callActive]);

  const handleSendMessage = (e) => {
    e?.preventDefault();
    if (!inputText.trim()) return;

    playCyberClick();
    const newMsg = {
      id: Date.now(),
      sender: 'user',
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setChatMessages((prev) => [...prev, newMsg]);
    const sentText = inputText;
    setInputText('');
    setIsAstrologerTyping(true);
    setTimeout(() => {
      chatInputRef.current?.focus();
    }, 50);

    setTimeout(() => {
      setIsAstrologerTyping(false);
      playSuccessChime();
      let reply = "Your planetary placements show extraordinary focus and engineering execution!";
      if (sentText.toLowerCase().includes('react') || sentText.toLowerCase().includes('job')) {
        reply = "High alignment detected for Senior React Native & Frontend positions! Your Chime SDK and Socket.IO integrations are blessed.";
      } else if (sentText.toLowerCase().includes('kundli')) {
        reply = "Sun and Mercury conjunction in 1st house gives strong analytical ability and scalable code design.";
      }
      setChatMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'astrologer',
          text: reply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 1200);
  };

  const formatDuration = (secs) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleSimulateSync = () => {
    playCyberClick();
    setIsSimulatingSync(true);
    setSyncStatus('SYNCING 3 QUEUED EXPEDITIONS...');
    setTimeout(() => {
      setIsSimulatingSync(false);
      setSyncStatus('SYNCED (0 QUEUED)');
      playSuccessChime();
    }, 1500);
  };

  return (
    <section id="simulators" style={{ padding: '90px 0', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header Title */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#00f2fe', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginBottom: '12px' }}>
            <Sparkles size={16} /> INTERACTIVE PRODUCTION SANDBOX
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', marginBottom: '16px' }}>
            Experience Products <span className="gradient-text">Live In Browser</span>
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '640px', margin: '0 auto', fontSize: '1rem' }}>
            Test interactive feature simulations built directly from my real-world engineering contributions across React Native and React.js production systems.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '32px', flexWrap: 'wrap' }}>
          <button
            onClick={() => { playCyberClick(); setCurrentApp('astrokarma'); }}
            style={{
              background: currentApp === 'astrokarma' ? 'linear-gradient(135deg, rgba(0,242,254,0.2) 0%, rgba(127,0,255,0.3) 100%)' : 'rgba(255,255,255,0.03)',
              border: currentApp === 'astrokarma' ? '1px solid #00f2fe' : '1px solid rgba(255,255,255,0.1)',
              borderRadius: '16px',
              padding: '14px 28px',
              color: currentApp === 'astrokarma' ? '#fff' : '#94a3b8',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              transition: 'all 0.3s ease',
              boxShadow: currentApp === 'astrokarma' ? '0 0 25px rgba(0,242,254,0.25)' : 'none'
            }}
          >
            <Smartphone size={20} color={currentApp === 'astrokarma' ? '#00f2fe' : '#94a3b8'} />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>1. AstroKarma Suite</div>
              <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>User App · Astrologer App · Web CRM</div>
            </div>
          </button>

          <button
            onClick={() => { playCyberClick(); setCurrentApp('finncub'); }}
            style={{
              background: currentApp === 'finncub' ? 'linear-gradient(135deg, rgba(79,172,254,0.2) 0%, rgba(0,242,254,0.3) 100%)' : 'rgba(255,255,255,0.03)',
              border: currentApp === 'finncub' ? '1px solid #4facfe' : '1px solid rgba(255,255,255,0.1)',
              borderRadius: '16px',
              padding: '14px 28px',
              color: currentApp === 'finncub' ? '#fff' : '#94a3b8',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              transition: 'all 0.3s ease',
              boxShadow: currentApp === 'finncub' ? '0 0 25px rgba(79,172,254,0.25)' : 'none'
            }}
          >
            <Monitor size={20} color={currentApp === 'finncub' ? '#4facfe' : '#94a3b8'} />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>2. Finncub Platform</div>
              <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>React.js Fintech Analytics</div>
            </div>
          </button>

          <button
            onClick={() => { playCyberClick(); setCurrentApp('saarthi'); }}
            style={{
              background: currentApp === 'saarthi' ? 'linear-gradient(135deg, rgba(16,185,129,0.2) 0%, rgba(0,242,254,0.3) 100%)' : 'rgba(255,255,255,0.03)',
              border: currentApp === 'saarthi' ? '1px solid #10b981' : '1px solid rgba(255,255,255,0.1)',
              borderRadius: '16px',
              padding: '14px 28px',
              color: currentApp === 'saarthi' ? '#fff' : '#94a3b8',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              transition: 'all 0.3s ease',
              boxShadow: currentApp === 'saarthi' ? '0 0 25px rgba(16,185,129,0.25)' : 'none'
            }}
          >
            <CreditCard size={20} color={currentApp === 'saarthi' ? '#10b981' : '#94a3b8'} />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>3. SVCL Saarthi</div>
              <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>React Native Loan & EMI App</div>
            </div>
          </button>
        </div>

        {/* View Mode Toggle Switch */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <div style={{ background: '#090d16', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '30px', padding: '4px', display: 'inline-flex', gap: '4px' }}>
            <button
              onClick={() => { playCyberClick(); setViewMode('sandbox'); }}
              style={{
                background: viewMode === 'sandbox' ? '#00f2fe' : 'transparent',
                color: viewMode === 'sandbox' ? '#070913' : '#94a3b8',
                border: 'none',
                padding: '6px 18px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Sparkles size={14} /> Interactive Live Sandbox
            </button>
            <button
              onClick={() => {
                playCyberClick();
                setViewMode('screenshot');
              }}
              style={{
                background: viewMode === 'screenshot' 
                  ? (currentApp === 'finncub' ? 'linear-gradient(135deg, #4facfe, #00f2fe)' : 'linear-gradient(135deg, #7f00ff, #e100ff)')
                  : 'transparent',
                color: viewMode === 'screenshot' ? (currentApp === 'finncub' ? '#070913' : '#fff') : '#94a3b8',
                border: 'none',
                padding: '6px 18px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              {currentApp === 'finncub' ? (
                <>
                  <Monitor size={14} /> Web Platform Showcase
                </>
              ) : (
                <>
                  <Smartphone size={14} /> App Store Screenshots Mode
                </>
              )}
            </button>
          </div>
        </div>

        {/* Display Active Simulator Sandbox */}
        <div className="glass-panel simulator-glass-panel" style={{ padding: '32px', minHeight: '620px' }}>

          {/* PROJECT 1: ASTROKARMA SUITE */}
          {currentApp === 'astrokarma' && (
            viewMode === 'sandbox' ? (
              <div className="responsive-grid-simulator">
              
              {/* Left Column: Interactive Phone Simulator */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="phone-mockup">
                  <div className="phone-notch" />
                  <div style={{ background: '#131826', padding: '36px 16px 12px 16px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ fontWeight: '700', fontSize: '0.95rem', color: '#ffb703', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span>🔮 AstroKarma</span>
                    </div>
                    <div style={{ fontSize: '0.65rem', background: 'rgba(16,185,129,0.2)', color: '#10b981', padding: '2px 8px', borderRadius: '10px', fontWeight: '600' }}>
                      Suite (1.5M+)
                    </div>
                  </div>

                  {/* Simulator Feature Tabs */}
                  <div style={{ background: '#090d16', padding: '8px 12px', display: 'flex', gap: '6px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <button
                      onClick={() => { playCyberClick(); setAstroSubTab('chat'); }}
                      style={{
                        flex: 1,
                        padding: '6px',
                        border: 'none',
                        borderRadius: '8px',
                        background: astroSubTab === 'chat' ? 'rgba(0,242,254,0.2)' : 'transparent',
                        color: astroSubTab === 'chat' ? '#00f2fe' : '#64748b',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}
                    >
                      💬 Chat
                    </button>
                    <button
                      onClick={() => { playCyberClick(); setAstroSubTab('call'); }}
                      style={{
                        flex: 1,
                        padding: '6px',
                        border: 'none',
                        borderRadius: '8px',
                        background: astroSubTab === 'call' ? 'rgba(127,0,255,0.2)' : 'transparent',
                        color: astroSubTab === 'call' ? '#d8b4fe' : '#64748b',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}
                    >
                      📞 Chime SDK
                    </button>
                    <button
                      onClick={() => { playCyberClick(); setAstroSubTab('kundli'); }}
                      style={{
                        flex: 1,
                        padding: '6px',
                        border: 'none',
                        borderRadius: '8px',
                        background: astroSubTab === 'kundli' ? 'rgba(245,158,11,0.2)' : 'transparent',
                        color: astroSubTab === 'kundli' ? '#f59e0b' : '#64748b',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}
                    >
                      🔯 Kundli
                    </button>
                  </div>

                  {/* Interactive Screen View */}
                  <div style={{ flex: 1, minHeight: 0, background: '#070a12', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    {astroSubTab === 'chat' && (
                      <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', padding: '12px', overflow: 'hidden' }}>
                        <div
                          ref={chatContainerRef}
                          style={{
                            flex: 1,
                            minHeight: 0,
                            overflowY: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                            paddingRight: '2px',
                          }}
                        >
                          {chatMessages.map((msg) => (
                            <div
                              key={msg.id}
                              style={{
                                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                maxWidth: '82%',
                                background: msg.sender === 'user' ? 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)' : '#1e293b',
                                color: msg.sender === 'user' ? '#070913' : '#f8fafc',
                                padding: '10px 14px',
                                borderRadius: msg.sender === 'user' ? '14px 14px 2px 14px' : '14px 14px 14px 2px',
                                fontSize: '0.8rem',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                                fontWeight: msg.sender === 'user' ? '600' : '400'
                              }}
                            >
                              <div>{msg.text}</div>
                              <div style={{ fontSize: '0.62rem', opacity: 0.7, textAlign: 'right', marginTop: '4px' }}>
                                {msg.time}
                              </div>
                            </div>
                          ))}
                          {isAstrologerTyping && (
                            <div style={{ alignSelf: 'flex-start', background: '#1e293b', padding: '8px 12px', borderRadius: '12px', fontSize: '0.75rem', color: '#00f2fe' }}>
                              <Radio size={12} className="pulse-glow" style={{ marginRight: '6px' }} /> Astrologer typing...
                            </div>
                          )}
                        </div>

                        <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '6px', marginTop: '8px', flexShrink: 0 }}>
                          <input
                            ref={chatInputRef}
                            type="text"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            placeholder="Type a message..."
                            style={{
                              flex: 1,
                              background: '#131826',
                              border: '1px solid rgba(255,255,255,0.1)',
                              borderRadius: '20px',
                              padding: '8px 14px',
                              color: '#fff',
                              fontSize: '0.8rem',
                              outline: 'none'
                            }}
                          />
                          <button
                            type="submit"
                            style={{
                              width: '34px',
                              height: '34px',
                              borderRadius: '50%',
                              background: '#00f2fe',
                              border: 'none',
                              color: '#070913',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer'
                            }}
                          >
                            <Send size={15} />
                          </button>
                        </form>
                      </div>
                    )}

                    {astroSubTab === 'call' && (
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', textAlignment: 'center' }}>
                        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #7f00ff, #e100ff)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', boxShadow: '0 0 30px rgba(127,0,255,0.5)' }}>
                          <span style={{ fontSize: '2rem' }}>🧙‍♂️</span>
                        </div>
                        <div style={{ fontWeight: '700', fontSize: '1.1rem', color: '#fff' }}>Acharya Dev</div>
                        <div style={{ fontSize: '0.78rem', color: '#00f2fe', margin: '4px 0 16px 0', fontFamily: 'var(--font-mono)' }}>
                          {callActive ? `LIVE SESSION · ${formatDuration(callDuration)}` : 'CHIME SDK ENCRYPTED CALL'}
                        </div>

                        {callActive ? (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', height: '40px', marginBottom: '24px' }}>
                            <div className="equalizer-bar" style={{ animationDelay: '0.1s' }} />
                            <div className="equalizer-bar" style={{ animationDelay: '0.3s' }} />
                            <div className="equalizer-bar" style={{ animationDelay: '0.2s' }} />
                            <div className="equalizer-bar" style={{ animationDelay: '0.5s' }} />
                            <div className="equalizer-bar" style={{ animationDelay: '0.4s' }} />
                          </div>
                        ) : (
                          <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '24px' }}>
                            Simulating Amazon Chime SDK WebRTC Audio Session
                          </div>
                        )}

                        <button
                          onClick={() => {
                            playCyberClick();
                            setCallActive(!callActive);
                            if (!callActive) playSuccessChime();
                          }}
                          style={{
                            background: callActive ? '#ef4444' : '#10b981',
                            border: 'none',
                            color: '#fff',
                            borderRadius: '50%',
                            width: '56px',
                            height: '56px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            boxShadow: callActive ? '0 0 20px #ef4444' : '0 0 20px #10b981'
                          }}
                        >
                          {callActive ? <PhoneOff size={24} /> : <Volume2 size={24} />}
                        </button>
                      </div>
                    )}

                    {astroSubTab === 'kundli' && (
                      <div style={{ flex: 1, padding: '16px', overflowY: 'auto' }}>
                        <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#ffb703', marginBottom: '12px' }}>
                          Vedic Horoscope Matrix
                        </div>
                        <div style={{ background: '#131826', border: '1px solid rgba(245,158,11,0.3)', borderRadius: '12px', padding: '12px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '0.75rem', marginBottom: '12px' }}>
                          <div style={{ color: '#94a3b8' }}>Sun (Ravi): <span style={{ color: '#fff', fontWeight: '700' }}>Aries 14°</span></div>
                          <div style={{ color: '#94a3b8' }}>Moon (Chandra): <span style={{ color: '#fff', fontWeight: '700' }}>Taurus 08°</span></div>
                          <div style={{ color: '#94a3b8' }}>Mars (Mangal): <span style={{ color: '#fff', fontWeight: '700' }}>Leo 22°</span></div>
                          <div style={{ color: '#94a3b8' }}>Jupiter (Guru): <span style={{ color: '#00f2fe', fontWeight: '700' }}>10th House</span></div>
                        </div>
                        <div style={{ height: '140px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', background: 'radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 80%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <div style={{ textAlign: 'center', color: '#f59e0b', fontSize: '0.8rem', fontWeight: '700' }}>
                            ⚡ Instant Native Calculation Algorithm
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column: Complete 3-Product Ecosystem Description */}
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(0,242,254,0.1)', border: '1px solid rgba(0,242,254,0.3)', padding: '4px 12px', borderRadius: '8px', color: '#00f2fe', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', marginBottom: '12px' }}>
                  FEATURED CASE STUDY #1 · 3-PRODUCT ECOSYSTEM
                </div>

                <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '12px', color: '#fff' }}>
                  AstroKarma Suite
                </h3>

                <p style={{ color: '#94a3b8', lineHeight: '1.6', marginBottom: '20px', fontSize: '0.95rem' }}>
                  A comprehensive 3-part astrology and live consultation ecosystem engineered across React Native mobile and React.js web platforms.
                </p>

                {/* 3 Ecosystem Components Compact Cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                  <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(0,242,254,0.25)', borderRadius: '12px', padding: '14px' }}>
                    <div style={{ fontWeight: '700', fontSize: '0.92rem', color: '#00f2fe', marginBottom: '4px' }}>
                      📱 1. AstroKarma: Astrology & Kundli (User App)
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#cbd5e1', lineHeight: '1.5' }}>
                      Cross-platform React Native user app (1.5M+ downloads) with real-time Socket.IO chat, Amazon Chime SDK audio/video calls, Vedic Kundli calculations, and Razorpay payments.
                    </div>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(127,0,255,0.25)', borderRadius: '12px', padding: '14px' }}>
                    <div style={{ fontWeight: '700', fontSize: '0.92rem', color: '#d8b4fe', marginBottom: '4px' }}>
                      🔮 2. AstroKarma Astrologer App
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#cbd5e1', lineHeight: '1.5' }}>
                      Dedicated React Native mobile app for certified astrologers to accept live consultation queues, manage active calls, track per-minute session earnings telemetry, and toggle status.
                    </div>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: '12px', padding: '14px' }}>
                    <div style={{ fontWeight: '700', fontSize: '0.92rem', color: '#f59e0b', marginBottom: '4px' }}>
                      💻 3. AstroKarma CRM (Web Dashboard)
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#cbd5e1', lineHeight: '1.5' }}>
                      React.js Web CRM management dashboard for administrators to approve astrologer accounts (1,200+ verified), manage consultation rate cards, analyze session telemetry, and export Kundli reports.
                    </div>
                  </div>
                </div>

                {/* Tech Stack Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  <span style={{ background: 'rgba(0,242,254,0.1)', border: '1px solid rgba(0,242,254,0.3)', color: '#00f2fe', padding: '6px 14px', borderRadius: '8px', fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}>React Native iOS & Android</span>
                  <span style={{ background: 'rgba(127,0,255,0.1)', border: '1px solid rgba(127,0,255,0.3)', color: '#d8b4fe', padding: '6px 14px', borderRadius: '8px', fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}>React.js Web CRM</span>
                  <span style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', color: '#10b981', padding: '6px 14px', borderRadius: '8px', fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}>1.5M+ Downloads</span>
                  <span style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)', color: '#f59e0b', padding: '6px 14px', borderRadius: '8px', fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}>Amazon Chime & Socket.IO</span>
                </div>
              </div>

            </div>
            ) : (
              <div className="responsive-grid-simulator">
                {/* Left Column: Official App Store Screenshot Phone Showcase */}
                <div className="screenshot-showcase-column" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '100%', margin: '0 auto' }}>
                  
                  {/* Phone Showcase with Navigation Arrows */}
                  <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <div
                      className="phone-mockup"
                      style={{
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: '0 25px 60px rgba(0,0,0,0.85), 0 0 35px rgba(0, 242, 254, 0.3)',
                        display: 'flex',
                        flexDirection: 'column',
                        margin: '0 auto'
                      }}
                    >
                      {/* Top Speaker / Camera Bar */}
                      <div className="phone-notch" style={{ zIndex: 10 }} />

                      {/* Screenshot Image with fade transition */}
                      <div className="screenshot-skeleton-bg" style={{ width: '100%', height: '100%', flex: 1, position: 'relative', overflow: 'hidden' }}>
                        <img
                          src={astroScreenshots[activeScreenshotIndex].image}
                          alt={astroScreenshots[activeScreenshotIndex].title}
                          key={activeScreenshotIndex}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            animation: 'hologramFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                          }}
                        />
                      </div>

                      {/* Left Arrow Button */}
                      <button
                        onClick={() => {
                          playCyberClick();
                          setActiveScreenshotIndex((prev) => (prev === 0 ? astroScreenshots.length - 1 : prev - 1));
                        }}
                        aria-label="Previous screenshot"
                        style={{
                          position: 'absolute',
                          left: '12px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          background: 'rgba(9, 13, 24, 0.85)',
                          border: '1px solid rgba(0, 242, 254, 0.4)',
                          borderRadius: '50%',
                          width: '38px',
                          height: '38px',
                          color: '#00f2fe',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 4px 15px rgba(0,0,0,0.6)',
                          backdropFilter: 'blur(8px)',
                          transition: 'all 0.2s ease',
                          zIndex: 15
                        }}
                      >
                        <ChevronLeft size={20} />
                      </button>

                      {/* Right Arrow Button */}
                      <button
                        onClick={() => {
                          playCyberClick();
                          setActiveScreenshotIndex((prev) => (prev === astroScreenshots.length - 1 ? 0 : prev + 1));
                        }}
                        aria-label="Next screenshot"
                        style={{
                          position: 'absolute',
                          right: '12px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          background: 'rgba(9, 13, 24, 0.85)',
                          border: '1px solid rgba(0, 242, 254, 0.4)',
                          borderRadius: '50%',
                          width: '38px',
                          height: '38px',
                          color: '#00f2fe',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 4px 15px rgba(0,0,0,0.6)',
                          backdropFilter: 'blur(8px)',
                          transition: 'all 0.2s ease',
                          zIndex: 15
                        }}
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>

                  {/* Indicator Dots */}
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'center' }}>
                    {astroScreenshots.map((item, idx) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          playCyberClick();
                          setActiveScreenshotIndex(idx);
                        }}
                        style={{
                          width: idx === activeScreenshotIndex ? '28px' : '10px',
                          height: '10px',
                          borderRadius: '5px',
                          background: idx === activeScreenshotIndex ? '#00f2fe' : 'rgba(255,255,255,0.2)',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.25s ease',
                          boxShadow: idx === activeScreenshotIndex ? '0 0 10px #00f2fe' : 'none'
                        }}
                        title={item.title}
                      />
                    ))}
                  </div>

                  {/* Quick Thumbnail Strip */}
                  <div
                    ref={astroThumbnailsRef}
                    className="no-scrollbar"
                    style={{
                      display: 'flex',
                      gap: '10px',
                      maxWidth: '310px',
                      overflowX: 'auto',
                      padding: '4px 2px 4px 2px'
                    }}
                  >
                    {astroScreenshots.map((item, idx) => (
                      <div
                        key={item.id}
                        onClick={() => {
                          playCyberClick();
                          setActiveScreenshotIndex(idx);
                        }}
                        style={{
                          width: '54px',
                          height: '76px',
                          borderRadius: '8px',
                          overflow: 'hidden',
                          cursor: 'pointer',
                          border: idx === activeScreenshotIndex ? '2px solid #00f2fe' : '1px solid rgba(255,255,255,0.12)',
                          opacity: idx === activeScreenshotIndex ? 1 : 0.65,
                          transform: idx === activeScreenshotIndex ? 'scale(1.05)' : 'scale(1)',
                          transition: 'all 0.2s ease',
                          flexShrink: 0,
                          boxShadow: idx === activeScreenshotIndex ? '0 0 14px rgba(0,242,254,0.5)' : 'none'
                        }}
                      >
                        <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                    ))}
                  </div>

                  {/* Interactive Sleek Scrollbar Track & Glowing Thumb */}
                  <div
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const clickX = e.clientX - rect.left;
                      const ratio = Math.max(0, Math.min(1, clickX / rect.width));
                      const newIdx = Math.round(ratio * (astroScreenshots.length - 1));
                      playCyberClick();
                      setActiveScreenshotIndex(newIdx);
                    }}
                    title="Click to scrub screenshots"
                    style={{
                      width: '160px',
                      height: '5px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '10px',
                      marginTop: '8px',
                      position: 'relative',
                      cursor: 'pointer',
                      border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: `${(activeScreenshotIndex / (astroScreenshots.length - 1)) * (160 - 40)}px`,
                        width: '40px',
                        height: '100%',
                        background: 'linear-gradient(90deg, #00f2fe, #4facfe)',
                        borderRadius: '10px',
                        boxShadow: '0 0 8px #00f2fe',
                        transition: 'left 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    />
                  </div>
                </div>

                {/* Right Column: Detailed Official Store & Architecture Information */}
                <div>
                  {/* Official App Header Card */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
                    <img
                      src="/screenshots/astrokarma_icon.png"
                      alt="AstroKarma Icon"
                      style={{ width: '60px', height: '60px', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.15)' }}
                    />
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                        <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#fff', margin: 0 }}>
                          AstroKarma: Astrology & Kundli
                        </h3>
                        <span style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.4)', color: '#10b981', fontSize: '0.72rem', padding: '2px 8px', borderRadius: '6px', fontWeight: '700' }}>
                          ✓ LIVE ON PLAY STORE
                        </span>
                      </div>
                      <div style={{ fontSize: '0.82rem', color: '#94a3b8', marginTop: '4px' }}>
                        Package: <code style={{ color: '#00f2fe', fontFamily: 'var(--font-mono)' }}>com.jaanemann</code> · Pushti Wellness
                      </div>
                    </div>
                  </div>

                  {/* Play Store Verified Badges */}
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '20px' }}>
                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Star size={16} color="#ffb703" fill="#ffb703" />
                      <span style={{ color: '#fff', fontWeight: '700', fontSize: '0.88rem' }}>4.7 ★</span>
                      <span style={{ color: '#64748b', fontSize: '0.75rem' }}>(6K+ Reviews)</span>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Award size={16} color="#00f2fe" />
                      <span style={{ color: '#fff', fontWeight: '700', fontSize: '0.88rem' }}>1.5M+</span>
                      <span style={{ color: '#64748b', fontSize: '0.75rem' }}>Downloads</span>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '0.9rem' }}>🛡️</span>
                      <span style={{ color: '#fff', fontWeight: '700', fontSize: '0.88rem' }}>99.8%</span>
                      <span style={{ color: '#64748b', fontSize: '0.75rem' }}>Crash-Free</span>
                    </div>
                  </div>

                  {/* Selected Screen Deep-Dive Card */}
                  <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(0,242,254,0.3)', borderRadius: '16px', padding: '20px', marginBottom: '22px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
                      <span style={{ color: '#00f2fe', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        SCREEN 0{activeScreenshotIndex + 1} OF 05 · {astroScreenshots[activeScreenshotIndex].category}
                      </span>
                      <span style={{ color: '#94a3b8', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                        {astroScreenshots[activeScreenshotIndex].metrics}
                      </span>
                    </div>

                    <h4 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#fff', marginBottom: '4px' }}>
                      {astroScreenshots[activeScreenshotIndex].title}
                    </h4>
                    <div style={{ fontSize: '0.84rem', color: '#d8b4fe', fontWeight: '600', marginBottom: '12px' }}>
                      {astroScreenshots[activeScreenshotIndex].subtitle}
                    </div>

                    <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '16px' }}>
                      {astroScreenshots[activeScreenshotIndex].description}
                    </p>

                    {/* Feature Checkpoints */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                      {astroScreenshots[activeScreenshotIndex].features.map((feat, fIdx) => (
                        <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.82rem', color: '#f1f5f9' }}>
                          <CheckCircle2 size={15} color="#00f2fe" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {astroScreenshots[activeScreenshotIndex].tags.map((t) => (
                        <span
                          key={t}
                          style={{
                            background: 'rgba(0,242,254,0.1)',
                            border: '1px solid rgba(0,242,254,0.25)',
                            color: '#00f2fe',
                            padding: '4px 10px',
                            borderRadius: '6px',
                            fontSize: '0.74rem',
                            fontFamily: 'var(--font-mono)'
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.jaanemann"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => playCyberClick()}
                      className="btn-neon-primary"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        textDecoration: 'none',
                        padding: '10px 20px',
                        borderRadius: '10px',
                        fontSize: '0.86rem',
                        fontWeight: '700'
                      }}
                    >
                      <ExternalLink size={16} /> View on Google Play Store
                    </a>

                    <button
                      onClick={() => {
                        playCyberClick();
                        setViewMode('sandbox');
                      }}
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        color: '#fff',
                        padding: '10px 18px',
                        borderRadius: '10px',
                        fontSize: '0.86rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <Sparkles size={16} color="#00f2fe" /> Test Interactive Live Sandbox
                    </button>
                  </div>
                </div>
              </div>
            )
          )}

          {/* PROJECT 2: FINNCUB */}
          {currentApp === 'finncub' && (
            viewMode === 'sandbox' ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div className="finncub-sandbox-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                  <div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(79,172,254,0.1)', border: '1px solid rgba(79,172,254,0.3)', padding: '4px 12px', borderRadius: '8px', color: '#4facfe', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', marginBottom: '8px' }}>
                      FEATURED CASE STUDY #2
                    </div>
                    <h3 style={{ fontSize: '1.8rem', fontWeight: '800' }}>
                      Finncub — Fintech Web Application
                    </h3>
                  </div>

                  <div className="finncub-filter-controls" style={{ display: 'flex', gap: '12px' }}>
                    <div className="finncub-pill-group" style={{ background: '#090d16', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '4px', display: 'flex', gap: '4px' }}>
                      {['24h', '7d', '30d'].map((t) => (
                        <button
                          key={t}
                          onClick={() => { playCyberClick(); setTimeframe(t); }}
                          style={{
                            background: timeframe === t ? '#4facfe' : 'transparent',
                            color: timeframe === t ? '#070913' : '#94a3b8',
                            border: 'none',
                            padding: '4px 12px',
                            borderRadius: '6px',
                            fontSize: '0.75rem',
                            fontWeight: '700',
                            cursor: 'pointer'
                          }}
                        >
                          {t}
                        </button>
                      ))}
                    </div>

                    <div className="finncub-pill-group" style={{ background: '#090d16', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '4px', display: 'flex', gap: '4px' }}>
                      {['INR', 'USD', 'EUR'].map((c) => (
                        <button
                          key={c}
                          onClick={() => { playCyberClick(); setCurrency(c); }}
                          style={{
                            background: currency === c ? '#00f2fe' : 'transparent',
                            color: currency === c ? '#070913' : '#94a3b8',
                            border: 'none',
                            padding: '4px 12px',
                            borderRadius: '6px',
                            fontSize: '0.75rem',
                            fontWeight: '700',
                            cursor: 'pointer'
                          }}
                        >
                          {c === 'INR' ? '₹ INR' : c === 'USD' ? '$ USD' : '€ EUR'}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ background: '#0a0e1a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', overflow: 'hidden' }}>
                  <div style={{ background: '#131826', padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                      <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                      <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
                    </div>
                    <div style={{ flex: 1, background: '#090d16', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '6px', padding: '4px 12px', fontSize: '0.75rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Globe size={12} color="#00f2fe" /> https://app.finncub.io/dashboard/analytics
                    </div>
                  </div>

                  <div style={{ padding: '24px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '16px' }}>
                        <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Total Revenue Flow</div>
                        <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#00f2fe' }}>
                          {currency === 'INR' ? '₹ 4,820,500' : currency === 'USD' ? '$ 58,200' : '€ 53,400'}
                        </div>
                        <div style={{ fontSize: '0.7rem', color: '#10b981', marginTop: '4px' }}>+18.4% vs last period</div>
                      </div>

                      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '16px' }}>
                        <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>API Response Latency</div>
                        <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#10b981' }}>38 ms</div>
                        <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '4px' }}>REST API Cache Hit Rate 94%</div>
                      </div>

                      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '16px' }}>
                        <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Reusable Components</div>
                        <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#4facfe' }}>45+ UI Blocks</div>
                        <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '4px' }}>React Hooks & Context</div>
                      </div>
                    </div>

                    <div style={{ background: '#070a12', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '20px', position: 'relative' }}>
                      <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#cbd5e1', marginBottom: '16px' }}>
                        Live Real-Time Data Throughput Trend ({timeframe})
                      </div>
                      <svg viewBox="0 0 500 120" style={{ width: '100%', height: '140px', overflow: 'visible' }}>
                        <defs>
                          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#00f2fe" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#00f2fe" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path
                          d={
                            timeframe === '24h'
                              ? 'M0,90 Q125,20 250,70 T500,30'
                              : timeframe === '7d'
                              ? 'M0,100 Q100,10 200,80 T350,20 T500,60'
                              : 'M0,60 Q150,110 300,30 T500,10'
                          }
                          fill="none"
                          stroke="#00f2fe"
                          strokeWidth="3"
                        />
                        <path
                          d={
                            timeframe === '24h'
                              ? 'M0,90 Q125,20 250,70 T500,30 L500,120 L0,120 Z'
                              : timeframe === '7d'
                              ? 'M0,100 Q100,10 200,80 T350,20 T500,60 L500,120 L0,120 Z'
                              : 'M0,60 Q150,110 300,30 T500,10 L500,120 L0,120 Z'
                          }
                          fill="url(#chartGrad)"
                        />
                      </svg>
                    </div>
                  </div>

                  <div style={{ background: '#060810', padding: '12px 20px', borderTop: '1px solid rgba(255,255,255,0.05)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>⚡ API Log: {apiLog}</div>
                    <button
                      onClick={() => {
                        playCyberClick();
                        setApiLog(`GET /api/v2/transactions?ts=${Date.now()} HTTP/1.1 200 OK - ${Math.floor(Math.random() * 20 + 20)}ms`);
                      }}
                      style={{ background: 'transparent', border: 'none', color: '#00f2fe', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem' }}
                    >
                      <RefreshCw size={12} /> Re-fetch Payload
                    </button>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.72rem', color: '#64748b', marginTop: '2px' }}>
                  <Info size={13} color="#4facfe" />
                  <span>Demonstration Notice: Revenue data, analytics charts, and API logs in this sandbox are simulated to protect client privacy.</span>
                </div>
              </div>
            ) : (
              <div className="responsive-grid-simulator">
                {/* Left Column: Official Enterprise Platform Showcase */}
                <div className="screenshot-showcase-column" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '100%', margin: '0 auto' }}>
                  
                  {/* Web Browser Showcase Frame with Navigation Arrows */}
                  <div className="browser-mockup-frame" style={{ position: 'relative', width: '100%', maxWidth: '330px', margin: '0 auto' }}>
                    <div
                      style={{
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: '16px',
                        background: '#090d18',
                        border: '1px solid rgba(79, 172, 254, 0.35)',
                        boxShadow: '0 25px 60px rgba(0,0,0,0.85), 0 0 35px rgba(79, 172, 254, 0.25)',
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                    >
                      {/* macOS Browser Chrome Header Bar */}
                      <div
                        style={{
                          background: '#131826',
                          padding: '10px 14px',
                          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          zIndex: 10
                        }}
                      >
                        <div style={{ display: 'flex', gap: '6px' }}>
                          <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#ef4444' }} />
                          <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#f59e0b' }} />
                          <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#10b981' }} />
                        </div>

                        {/* Browser Address Bar with URL */}
                        <div
                          style={{
                            flex: 1,
                            background: '#070a12',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: '6px',
                            padding: '3px 8px',
                            fontSize: '0.66rem',
                            color: '#94a3b8',
                            fontFamily: 'var(--font-mono)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis'
                          }}
                        >
                          <Globe size={11} color="#00f2fe" style={{ flexShrink: 0 }} />
                          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {finncubScreenshots[activeFinncubScreenshotIndex].url}
                          </span>
                        </div>
                      </div>

                      {/* Screenshot Image with fade transition */}
                      <div className="screenshot-skeleton-bg" style={{ width: '100%', height: '480px', position: 'relative', overflow: 'hidden', background: '#05070f' }}>
                        <img
                          src={finncubScreenshots[activeFinncubScreenshotIndex].image}
                          alt={finncubScreenshots[activeFinncubScreenshotIndex].title}
                          key={activeFinncubScreenshotIndex}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            animation: 'hologramFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                          }}
                        />
                      </div>

                      {/* Left Arrow Button */}
                      <button
                        onClick={() => {
                          playCyberClick();
                          setActiveFinncubScreenshotIndex((prev) => (prev === 0 ? finncubScreenshots.length - 1 : prev - 1));
                        }}
                        aria-label="Previous screenshot"
                        style={{
                          position: 'absolute',
                          left: '12px',
                          top: 'calc(50% + 15px)',
                          transform: 'translateY(-50%)',
                          background: 'rgba(9, 13, 24, 0.85)',
                          border: '1px solid rgba(79, 172, 254, 0.5)',
                          borderRadius: '50%',
                          width: '38px',
                          height: '38px',
                          color: '#4facfe',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 4px 15px rgba(0,0,0,0.6)',
                          backdropFilter: 'blur(8px)',
                          transition: 'all 0.2s ease',
                          zIndex: 15
                        }}
                      >
                        <ChevronLeft size={20} />
                      </button>

                      {/* Right Arrow Button */}
                      <button
                        onClick={() => {
                          playCyberClick();
                          setActiveFinncubScreenshotIndex((prev) => (prev === finncubScreenshots.length - 1 ? 0 : prev + 1));
                        }}
                        aria-label="Next screenshot"
                        style={{
                          position: 'absolute',
                          right: '12px',
                          top: 'calc(50% + 15px)',
                          transform: 'translateY(-50%)',
                          background: 'rgba(9, 13, 24, 0.85)',
                          border: '1px solid rgba(79, 172, 254, 0.5)',
                          borderRadius: '50%',
                          width: '38px',
                          height: '38px',
                          color: '#4facfe',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 4px 15px rgba(0,0,0,0.6)',
                          backdropFilter: 'blur(8px)',
                          transition: 'all 0.2s ease',
                          zIndex: 15
                        }}
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>

                  {/* Indicator Dots */}
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'center' }}>
                    {finncubScreenshots.map((item, idx) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          playCyberClick();
                          setActiveFinncubScreenshotIndex(idx);
                        }}
                        style={{
                          width: idx === activeFinncubScreenshotIndex ? '28px' : '10px',
                          height: '10px',
                          borderRadius: '5px',
                          background: idx === activeFinncubScreenshotIndex ? '#4facfe' : 'rgba(255,255,255,0.2)',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.25s ease',
                          boxShadow: idx === activeFinncubScreenshotIndex ? '0 0 10px #4facfe' : 'none'
                        }}
                        title={item.title}
                      />
                    ))}
                  </div>

                  {/* Quick Thumbnail Strip */}
                  <div
                    ref={finncubThumbnailsRef}
                    className="no-scrollbar"
                    style={{
                      display: 'flex',
                      gap: '10px',
                      maxWidth: '310px',
                      overflowX: 'auto',
                      padding: '4px 2px 4px 2px'
                    }}
                  >
                    {finncubScreenshots.map((item, idx) => (
                      <div
                        key={item.id}
                        onClick={() => {
                          playCyberClick();
                          setActiveFinncubScreenshotIndex(idx);
                        }}
                        style={{
                          width: '54px',
                          height: '76px',
                          borderRadius: '8px',
                          overflow: 'hidden',
                          cursor: 'pointer',
                          border: idx === activeFinncubScreenshotIndex ? '2px solid #4facfe' : '1px solid rgba(255,255,255,0.12)',
                          opacity: idx === activeFinncubScreenshotIndex ? 1 : 0.65,
                          transform: idx === activeFinncubScreenshotIndex ? 'scale(1.05)' : 'scale(1)',
                          transition: 'all 0.2s ease',
                          flexShrink: 0,
                          boxShadow: idx === activeFinncubScreenshotIndex ? '0 0 14px rgba(79,172,254,0.5)' : 'none'
                        }}
                      >
                        <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                    ))}
                  </div>

                  {/* Interactive Sleek Scrollbar Track & Glowing Thumb */}
                  <div
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const clickX = e.clientX - rect.left;
                      const ratio = Math.max(0, Math.min(1, clickX / rect.width));
                      const newIdx = Math.round(ratio * (finncubScreenshots.length - 1));
                      playCyberClick();
                      setActiveFinncubScreenshotIndex(newIdx);
                    }}
                    title="Click to scrub screenshots"
                    style={{
                      width: '160px',
                      height: '5px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '10px',
                      marginTop: '8px',
                      position: 'relative',
                      cursor: 'pointer',
                      border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: `${(activeFinncubScreenshotIndex / (finncubScreenshots.length - 1)) * (160 - 40)}px`,
                        width: '40px',
                        height: '100%',
                        background: 'linear-gradient(90deg, #4facfe, #00f2fe)',
                        borderRadius: '10px',
                        boxShadow: '0 0 8px #4facfe',
                        transition: 'left 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    />
                  </div>
                </div>

                {/* Right Column: Detailed Official Product & Architecture Information */}
                <div>
                  {/* Official App Header Card */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '16px',
                      background: '#0d1322',
                      border: '1px solid rgba(79, 172, 254, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
                      padding: '8px'
                    }}>
                      <img
                        src="/screenshots/finncub_logo.svg"
                        alt="Finncub Logo"
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      />
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                        <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#fff', margin: 0 }}>
                          Finncub — Digital Lending Platform
                        </h3>
                        <span style={{ background: 'rgba(79,172,254,0.15)', border: '1px solid rgba(79,172,254,0.4)', color: '#4facfe', fontSize: '0.72rem', padding: '2px 8px', borderRadius: '6px', fontWeight: '700' }}>
                          ✓ LIVE PRODUCTION ENTERPRISE
                        </span>
                      </div>
                      <div style={{ fontSize: '0.82rem', color: '#94a3b8', marginTop: '4px' }}>
                        Platform: <code style={{ color: '#00f2fe', fontFamily: 'var(--font-mono)' }}>https://finncub.com</code> · Eleven Tech Studio
                      </div>
                    </div>
                  </div>

                  {/* Production Verified Metrics Badges */}
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '20px' }}>
                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Award size={16} color="#4facfe" />
                      <span style={{ color: '#fff', fontWeight: '700', fontSize: '0.88rem' }}>35 Lakh+</span>
                      <span style={{ color: '#64748b', fontSize: '0.75rem' }}>Applications</span>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '0.9rem' }}>💳</span>
                      <span style={{ color: '#fff', fontWeight: '700', fontSize: '0.88rem' }}>35M+</span>
                      <span style={{ color: '#64748b', fontSize: '0.75rem' }}>Transactions</span>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '0.9rem' }}>⚡</span>
                      <span style={{ color: '#fff', fontWeight: '700', fontSize: '0.88rem' }}>100+ APIs</span>
                      <span style={{ color: '#64748b', fontSize: '0.75rem' }}>Ecosystem Switches</span>
                    </div>
                  </div>

                  {/* Public Data Disclaimer & Obfuscation Notice */}
                  <div style={{
                    background: 'rgba(79, 172, 254, 0.05)',
                    border: '1px solid rgba(79, 172, 254, 0.2)',
                    borderRadius: '10px',
                    padding: '8px 14px',
                    fontSize: '0.73rem',
                    color: '#94a3b8',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                    marginBottom: '20px',
                    lineHeight: '1.5'
                  }}>
                    <Info size={15} color="#4facfe" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>
                      <strong style={{ color: '#cbd5e1' }}>Enterprise Disclosure:</strong> Volume statistics (35 Lakh+ applications & 35M+ transactions) reflect Finncub’s public enterprise-wide platform metrics. Operational dashboard values, financial sums, and customer telemetry are simulated for demonstration purposes.
                    </span>
                  </div>

                  {/* Selected Screen Deep-Dive Card */}
                  <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(79,172,254,0.3)', borderRadius: '16px', padding: '20px', marginBottom: '22px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
                      <span style={{ color: '#4facfe', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        SCREEN 0{activeFinncubScreenshotIndex + 1} OF 04 · {finncubScreenshots[activeFinncubScreenshotIndex].category}
                      </span>
                      <span style={{ color: '#94a3b8', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                        {finncubScreenshots[activeFinncubScreenshotIndex].metrics}
                      </span>
                    </div>

                    <h4 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#fff', marginBottom: '4px' }}>
                      {finncubScreenshots[activeFinncubScreenshotIndex].title}
                    </h4>
                    <div style={{ fontSize: '0.84rem', color: '#93c5fd', fontWeight: '600', marginBottom: '12px' }}>
                      {finncubScreenshots[activeFinncubScreenshotIndex].subtitle}
                    </div>

                    <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '16px' }}>
                      {finncubScreenshots[activeFinncubScreenshotIndex].description}
                    </p>

                    {/* Feature Checkpoints */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                      {finncubScreenshots[activeFinncubScreenshotIndex].features.map((feat, fIdx) => (
                        <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.82rem', color: '#f1f5f9' }}>
                          <CheckCircle2 size={15} color="#4facfe" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {finncubScreenshots[activeFinncubScreenshotIndex].tags.map((t) => (
                        <span
                          key={t}
                          style={{
                            background: 'rgba(79,172,254,0.1)',
                            border: '1px solid rgba(79,172,254,0.25)',
                            color: '#4facfe',
                            padding: '4px 10px',
                            borderRadius: '6px',
                            fontSize: '0.74rem',
                            fontFamily: 'var(--font-mono)'
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <a
                      href="https://finncub.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => playCyberClick()}
                      className="btn-neon-primary"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        textDecoration: 'none',
                        padding: '10px 20px',
                        borderRadius: '10px',
                        fontSize: '0.86rem',
                        fontWeight: '700',
                        background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
                        color: '#070913',
                        border: 'none'
                      }}
                    >
                      <ExternalLink size={16} /> Visit Live Enterprise Platform
                    </a>

                    <button
                      onClick={() => {
                        playCyberClick();
                        setViewMode('sandbox');
                      }}
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        color: '#fff',
                        padding: '10px 18px',
                        borderRadius: '10px',
                        fontSize: '0.86rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <Sparkles size={16} color="#4facfe" /> Test Interactive Live Sandbox
                    </button>
                  </div>
                </div>
              </div>
            )
          )}

          {/* PROJECT 3: SVCL SAARTHI */}
          {currentApp === 'saarthi' && (
            viewMode === 'sandbox' ? (
              <div className="responsive-grid-simulator">
              
              {/* Left Column: Interactive Phone Simulator */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="phone-mockup">
                  <div className="phone-notch" />
                  <div style={{ background: '#131826', padding: '36px 16px 12px 16px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <div style={{ fontWeight: '700', fontSize: '0.92rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <CreditCard size={18} /> SVCL Saarthi (S V Creditline)
                    </div>
                  </div>

                  <div style={{ flex: 1, background: '#070a12', padding: '14px', display: 'flex', flexDirection: 'column', gap: '12px', overflowY: 'auto' }}>
                    
                    {/* Customer Account & Active Loan Summary */}
                    <div style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(0,242,254,0.1))', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '12px', padding: '14px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: '#10b981', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>
                        <span>CLIENT ID: SVCL-849201</span>
                        <span>ACTIVE LOAN</span>
                      </div>
                      <div style={{ fontSize: '1.25rem', fontWeight: '800', color: '#fff' }}>
                        ₹ 45,000 <span style={{ fontSize: '0.75rem', fontWeight: '400', color: '#94a3b8' }}>Disbursed</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#cbd5e1', marginTop: '8px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '6px' }}>
                        <span>Paid: 8 / 12 EMIs</span>
                        <span style={{ color: '#00f2fe', fontWeight: '600' }}>Next Due: 15 Oct 2026</span>
                      </div>
                    </div>

                    {/* Loan Application Progress Stage Tracker */}
                    <div style={{ background: '#131826', borderRadius: '12px', padding: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginBottom: '8px', fontWeight: '600' }}>
                        Real-Time Application Tracking Stage
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.68rem' }}>
                        <div style={{ textAlign: 'center', color: '#10b981' }}>
                          <CheckCircle2 size={14} style={{ margin: '0 auto 2px auto' }} />
                          <div>Submitted</div>
                        </div>
                        <div style={{ height: '2px', flex: 1, background: '#10b981', margin: '0 4px' }} />
                        <div style={{ textAlign: 'center', color: '#10b981' }}>
                          <CheckCircle2 size={14} style={{ margin: '0 auto 2px auto' }} />
                          <div>In Progress</div>
                        </div>
                        <div style={{ height: '2px', flex: 1, background: '#10b981', margin: '0 4px' }} />
                        <div style={{ textAlign: 'center', color: '#10b981' }}>
                          <CheckCircle2 size={14} style={{ margin: '0 auto 2px auto' }} />
                          <div>Approved</div>
                        </div>
                        <div style={{ height: '2px', flex: 1, background: '#10b981', margin: '0 4px' }} />
                        <div style={{ textAlign: 'center', color: '#10b981', fontWeight: '700' }}>
                          <CheckCircle2 size={14} style={{ margin: '0 auto 2px auto' }} />
                          <div>Disbursed</div>
                        </div>
                      </div>
                    </div>

                    {/* EMI Payment Simulation Widget */}
                    <div style={{ background: '#131826', borderRadius: '12px', padding: '12px' }}>
                      <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '4px' }}>Upcoming EMI Due</div>
                      <div style={{ fontSize: '1.05rem', fontWeight: '800', color: '#fff', marginBottom: '10px' }}>
                        ₹ 3,750 <span style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: '600' }}>Due Date: Oct 15</span>
                      </div>
                      <button
                        onClick={handleSimulateSync}
                        disabled={isSimulatingSync}
                        style={{
                          width: '100%',
                          background: 'linear-gradient(135deg, #10b981, #00f2fe)',
                          border: 'none',
                          color: '#070913',
                          padding: '8px',
                          borderRadius: '8px',
                          fontSize: '0.78rem',
                          fontWeight: '800',
                          cursor: 'pointer'
                        }}
                      >
                        {isSimulatingSync ? 'Processing EMI Payment...' : '⚡ Pay EMI Now (Razorpay / UPI)'}
                      </button>
                      <div style={{ fontSize: '0.65rem', color: '#10b981', marginTop: '6px', textAlign: 'center', fontFamily: 'var(--font-mono)' }}>
                        {syncStatus}
                      </div>
                    </div>

                    {/* Customer Support Quick Contact Footer */}
                    <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '10px', padding: '10px', fontSize: '0.7rem', color: '#94a3b8', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span>📞 Direct Manager Support</span>
                      <span style={{ color: '#00f2fe', fontWeight: '600' }}>Call Head Office</span>
                    </div>

                  </div>
                </div>
              </div>

              {/* Right Column: Case Study Details */}
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', padding: '4px 12px', borderRadius: '8px', color: '#10b981', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', marginBottom: '16px' }}>
                  FEATURED CASE STUDY #3 · MICROFINANCE LOAN APP
                </div>
                
                <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '12px', color: '#fff' }}>
                  SVCL Saarthi — Mobile Loan & EMI Management App
                </h3>
                
                <p style={{ color: '#94a3b8', lineHeight: '1.7', marginBottom: '20px', fontSize: '0.95rem' }}>
                  Cross-platform React Native mobile application developed for <strong>S V Creditline Limited (SVCL)</strong>, an RBI-registered NBFC-ICC. Designed for existing microfinance customers to securely track credit accounts, EMI schedules, loan application progress, and payment transaction history.
                </p>

                {/* Key Real Features Grid */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                  <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px', padding: '10px 14px', fontSize: '0.83rem', color: '#cbd5e1' }}>
                    🔑 <strong style={{ color: '#fff' }}>OTP-Based Secure Login</strong> — Authentication via registered mobile number or Client ID.
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px', padding: '10px 14px', fontSize: '0.83rem', color: '#cbd5e1' }}>
                    📊 <strong style={{ color: '#fff' }}>Dashboard Summary & EMI Schedules</strong> — Overview of current loan status, paid EMI records, and upcoming dues.
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px', padding: '10px 14px', fontSize: '0.83rem', color: '#cbd5e1' }}>
                    ⏳ <strong style={{ color: '#fff' }}>Real-Time Loan Tracking</strong> — Stage lifecycle updates across <em>In Progress</em>, <em>Approved</em>, and <em>Disbursed</em>.
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px', padding: '10px 14px', fontSize: '0.83rem', color: '#cbd5e1' }}>
                    📞 <strong style={{ color: '#fff' }}>Support Access</strong> — Direct contact for branch managers and head office support.
                  </div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  <span style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', color: '#10b981', padding: '6px 14px', borderRadius: '8px', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>React Native iOS & Android</span>
                  <span style={{ background: 'rgba(0,242,254,0.1)', border: '1px solid rgba(0,242,254,0.3)', color: '#00f2fe', padding: '6px 14px', borderRadius: '8px', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>RBI-Registered NBFC App</span>
                  <span style={{ background: 'rgba(127,0,255,0.1)', border: '1px solid rgba(127,0,255,0.3)', color: '#d8b4fe', padding: '6px 14px', borderRadius: '8px', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>OTP Auth & Security</span>
                  <span style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)', color: '#f59e0b', padding: '6px 14px', borderRadius: '8px', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>EMI Schedules & Payment History</span>
                </div>
              </div>

            </div>
            ) : (
              <div className="responsive-grid-simulator">
                {/* Left Column: Official App Store Screenshot Phone Showcase */}
                <div className="screenshot-showcase-column" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '100%', margin: '0 auto' }}>
                  
                  {/* Phone Showcase with Navigation Arrows */}
                  <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <div
                      className="phone-mockup"
                      style={{
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: '0 25px 60px rgba(0,0,0,0.85), 0 0 35px rgba(16, 185, 129, 0.3)',
                        display: 'flex',
                        flexDirection: 'column',
                        margin: '0 auto'
                      }}
                    >
                      {/* Top Speaker / Camera Bar */}
                      <div className="phone-notch" style={{ zIndex: 10 }} />

                      {/* Screenshot Image with fade transition */}
                      <div className="screenshot-skeleton-bg" style={{ width: '100%', height: '100%', flex: 1, position: 'relative', overflow: 'hidden' }}>
                        <img
                          src={svclScreenshots[activeSvclScreenshotIndex].image}
                          alt={svclScreenshots[activeSvclScreenshotIndex].title}
                          key={activeSvclScreenshotIndex}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            animation: 'hologramFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                          }}
                        />
                      </div>

                      {/* Left Arrow Button */}
                      <button
                        onClick={() => {
                          playCyberClick();
                          setActiveSvclScreenshotIndex((prev) => (prev === 0 ? svclScreenshots.length - 1 : prev - 1));
                        }}
                        aria-label="Previous screenshot"
                        style={{
                          position: 'absolute',
                          left: '12px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          background: 'rgba(9, 13, 24, 0.85)',
                          border: '1px solid rgba(16, 185, 129, 0.5)',
                          borderRadius: '50%',
                          width: '38px',
                          height: '38px',
                          color: '#10b981',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 4px 15px rgba(0,0,0,0.6)',
                          backdropFilter: 'blur(8px)',
                          transition: 'all 0.2s ease',
                          zIndex: 15
                        }}
                      >
                        <ChevronLeft size={20} />
                      </button>

                      {/* Right Arrow Button */}
                      <button
                        onClick={() => {
                          playCyberClick();
                          setActiveSvclScreenshotIndex((prev) => (prev === svclScreenshots.length - 1 ? 0 : prev + 1));
                        }}
                        aria-label="Next screenshot"
                        style={{
                          position: 'absolute',
                          right: '12px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          background: 'rgba(9, 13, 24, 0.85)',
                          border: '1px solid rgba(16, 185, 129, 0.5)',
                          borderRadius: '50%',
                          width: '38px',
                          height: '38px',
                          color: '#10b981',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 4px 15px rgba(0,0,0,0.6)',
                          backdropFilter: 'blur(8px)',
                          transition: 'all 0.2s ease',
                          zIndex: 15
                        }}
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>

                  {/* Indicator Dots */}
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'center' }}>
                    {svclScreenshots.map((item, idx) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          playCyberClick();
                          setActiveSvclScreenshotIndex(idx);
                        }}
                        style={{
                          width: idx === activeSvclScreenshotIndex ? '28px' : '10px',
                          height: '10px',
                          borderRadius: '5px',
                          background: idx === activeSvclScreenshotIndex ? '#10b981' : 'rgba(255,255,255,0.2)',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.25s ease',
                          boxShadow: idx === activeSvclScreenshotIndex ? '0 0 10px #10b981' : 'none'
                        }}
                        title={item.title}
                      />
                    ))}
                  </div>

                  {/* Quick Thumbnail Strip */}
                  <div
                    ref={svclThumbnailsRef}
                    className="no-scrollbar"
                    style={{
                      display: 'flex',
                      gap: '10px',
                      maxWidth: '310px',
                      overflowX: 'auto',
                      padding: '4px 2px 4px 2px'
                    }}
                  >
                    {svclScreenshots.map((item, idx) => (
                      <div
                        key={item.id}
                        onClick={() => {
                          playCyberClick();
                          setActiveSvclScreenshotIndex(idx);
                        }}
                        style={{
                          width: '54px',
                          height: '76px',
                          borderRadius: '8px',
                          overflow: 'hidden',
                          cursor: 'pointer',
                          border: idx === activeSvclScreenshotIndex ? '2px solid #10b981' : '1px solid rgba(255,255,255,0.12)',
                          opacity: idx === activeSvclScreenshotIndex ? 1 : 0.65,
                          transform: idx === activeSvclScreenshotIndex ? 'scale(1.05)' : 'scale(1)',
                          transition: 'all 0.2s ease',
                          flexShrink: 0,
                          boxShadow: idx === activeSvclScreenshotIndex ? '0 0 14px rgba(16,185,129,0.5)' : 'none'
                        }}
                      >
                        <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                    ))}
                  </div>

                  {/* Interactive Sleek Scrollbar Track & Glowing Thumb */}
                  <div
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const clickX = e.clientX - rect.left;
                      const ratio = Math.max(0, Math.min(1, clickX / rect.width));
                      const newIdx = Math.round(ratio * (svclScreenshots.length - 1));
                      playCyberClick();
                      setActiveSvclScreenshotIndex(newIdx);
                    }}
                    title="Click to scrub screenshots"
                    style={{
                      width: '160px',
                      height: '5px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '10px',
                      marginTop: '8px',
                      position: 'relative',
                      cursor: 'pointer',
                      border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: `${(activeSvclScreenshotIndex / (svclScreenshots.length - 1)) * (160 - 40)}px`,
                        width: '40px',
                        height: '100%',
                        background: 'linear-gradient(90deg, #10b981, #00f2fe)',
                        borderRadius: '10px',
                        boxShadow: '0 0 8px #10b981',
                        transition: 'left 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    />
                  </div>
                </div>

                {/* Right Column: Detailed Official Store & Architecture Information */}
                <div>
                  {/* Official App Header Card */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
                    <img
                      src="/screenshots/svcl_icon.png"
                      alt="SVCL Sarthi Icon"
                      style={{ width: '60px', height: '60px', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.15)' }}
                    />
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                        <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#fff', margin: 0 }}>
                          SVCL Sarthi — Loan & EMI App
                        </h3>
                        <span style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.4)', color: '#10b981', fontSize: '0.72rem', padding: '2px 8px', borderRadius: '6px', fontWeight: '700' }}>
                          ✓ LIVE ON PLAY STORE
                        </span>
                      </div>
                      <div style={{ fontSize: '0.82rem', color: '#94a3b8', marginTop: '4px' }}>
                        Package: <code style={{ color: '#10b981', fontFamily: 'var(--font-mono)' }}>com.svcl.sarthi</code> · S V Creditline Limited
                      </div>
                    </div>
                  </div>

                  {/* Play Store Verified Badges */}
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '20px' }}>
                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Star size={16} color="#ffb703" fill="#ffb703" />
                      <span style={{ color: '#fff', fontWeight: '700', fontSize: '0.88rem' }}>4.0 ★</span>
                      <span style={{ color: '#64748b', fontSize: '0.75rem' }}>(140+ Reviews)</span>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Award size={16} color="#10b981" />
                      <span style={{ color: '#fff', fontWeight: '700', fontSize: '0.88rem' }}>50K+</span>
                      <span style={{ color: '#64748b', fontSize: '0.75rem' }}>Downloads</span>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '0.9rem' }}>🏛️</span>
                      <span style={{ color: '#fff', fontWeight: '700', fontSize: '0.88rem' }}>RBI NBFC</span>
                      <span style={{ color: '#64748b', fontSize: '0.75rem' }}>Regulated Entity</span>
                    </div>
                  </div>

                  {/* Selected Screen Deep-Dive Card */}
                  <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '16px', padding: '20px', marginBottom: '22px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
                      <span style={{ color: '#10b981', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        SCREEN 0{activeSvclScreenshotIndex + 1} OF 06 · {svclScreenshots[activeSvclScreenshotIndex].category}
                      </span>
                      <span style={{ color: '#94a3b8', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                        {svclScreenshots[activeSvclScreenshotIndex].metrics}
                      </span>
                    </div>

                    <h4 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#fff', marginBottom: '4px' }}>
                      {svclScreenshots[activeSvclScreenshotIndex].title}
                    </h4>
                    <div style={{ fontSize: '0.84rem', color: '#6ee7b7', fontWeight: '600', marginBottom: '12px' }}>
                      {svclScreenshots[activeSvclScreenshotIndex].subtitle}
                    </div>

                    <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '16px' }}>
                      {svclScreenshots[activeSvclScreenshotIndex].description}
                    </p>

                    {/* Feature Checkpoints */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                      {svclScreenshots[activeSvclScreenshotIndex].features.map((feat, fIdx) => (
                        <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.82rem', color: '#f1f5f9' }}>
                          <CheckCircle2 size={15} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {svclScreenshots[activeSvclScreenshotIndex].tags.map((t) => (
                        <span
                          key={t}
                          style={{
                            background: 'rgba(16,185,129,0.1)',
                            border: '1px solid rgba(16,185,129,0.25)',
                            color: '#10b981',
                            padding: '4px 10px',
                            borderRadius: '6px',
                            fontSize: '0.74rem',
                            fontFamily: 'var(--font-mono)'
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.svcl.sarthi"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => playCyberClick()}
                      className="btn-neon-primary"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        textDecoration: 'none',
                        padding: '10px 20px',
                        borderRadius: '10px',
                        fontSize: '0.86rem',
                        fontWeight: '700',
                        background: 'linear-gradient(135deg, #10b981, #00f2fe)',
                        color: '#070913',
                        border: 'none'
                      }}
                    >
                      <ExternalLink size={16} /> View on Google Play Store
                    </a>

                    <button
                      onClick={() => {
                        playCyberClick();
                        setViewMode('sandbox');
                      }}
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        color: '#fff',
                        padding: '10px 18px',
                        borderRadius: '10px',
                        fontSize: '0.86rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <Sparkles size={16} color="#10b981" /> Test Interactive Live Sandbox
                    </button>
                  </div>
                </div>
              </div>
            )
          )}

        </div>
      </div>
    </section>
  );
};

export default InteractiveAppSimulator;
