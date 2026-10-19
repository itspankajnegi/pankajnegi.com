import React, { useState } from 'react';
import { Mail, Send, Terminal, CheckCircle2, Sparkles, MessageSquare, PhoneCall, Globe, Loader2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playCyberClick, playSuccessChime } from '../utils/soundEffects';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', role: 'Senior React Native Developer', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [terminalOutput, setTerminalOutput] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    playCyberClick();
    setIsSubmitting(true);
    setSubmitError(null);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '679a2299-8890-464f-b113-eaf9ef9366dc';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          role: formData.role,
          message: formData.message,
          subject: `Portfolio Inquiry: ${formData.name} · ${formData.role}`,
          from_name: `${formData.name} via Portfolio`,
          botcheck: ''
        })
      });

      const result = await response.json();

      if (result.success) {
        playSuccessChime();

        // Trigger celebratory confetti burst!
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#00f2fe', '#7f00ff', '#10b981', '#f59e0b']
        });

        setSubmitted(true);
        setTerminalOutput({
          status: 200,
          timestamp: new Date().toISOString(),
          delivery: 'DELIVERED_TO_INBOX',
          recipient: 'Pankaj Negi <itspankajnegi@gmail.com>',
          sender: `${formData.name} <${formData.email}>`,
          inquiry: formData.role,
          messagePayload: formData.message,
          responseNotice: 'Transmission received. Pankaj will respond to your email within 24 hours!'
        });
      } else {
        setSubmitError(result.message || 'Transmission failed. Please try again or reach out directly via email.');
      }
    } catch (err) {
      console.error('Contact Form Submission Error:', err);
      setSubmitError('Network transmission error. Please check your internet connection or email directly at itspankajnegi@gmail.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" style={{ padding: '90px 0', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#00f2fe', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginBottom: '12px' }}>
            <Mail size={16} /> DIRECT RECRUITER & LEAD INQUIRIES
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', marginBottom: '16px' }}>
            Let's Build <span className="gradient-text">Next-Gen Products</span>
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '640px', margin: '0 auto', fontSize: '1rem' }}>
            Available for Senior React Native, Frontend Lead, and High-Impact Engineering opportunities.
          </p>
        </div>

        <div className="responsive-grid-contact">
          
          {/* Left Column Direct Contact & Links */}
          <div className="glass-panel" style={{ padding: '36px', borderRadius: '24px' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#fff', marginBottom: '20px' }}>
              Direct Connection Channels
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
              
              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ background: 'rgba(0,242,254,0.1)', padding: '12px', borderRadius: '12px' }}>
                  <Mail size={22} color="#00f2fe" />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Official Email</div>
                  <a href="mailto:itspankajnegi@gmail.com" style={{ color: '#fff', fontWeight: '700', textDecoration: 'none', fontSize: '1rem' }}>
                    itspankajnegi@gmail.com
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ background: 'rgba(79,172,254,0.1)', padding: '12px', borderRadius: '12px', display: 'flex' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#4facfe"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Professional Network</div>
                  <a href="https://www.linkedin.com/in/itspankajnegi" target="_blank" rel="noreferrer" style={{ color: '#fff', fontWeight: '700', textDecoration: 'none', fontSize: '1rem' }}>
                    LinkedIn Profile &rarr;
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ background: 'rgba(127,0,255,0.1)', padding: '12px', borderRadius: '12px', display: 'flex' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#d8b4fe"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Source Repositories</div>
                  <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: '#fff', fontWeight: '700', textDecoration: 'none', fontSize: '1rem' }}>
                    GitHub Profile &rarr;
                  </a>
                </div>
              </div>

            </div>

            <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px dashed rgba(16,185,129,0.3)', padding: '16px', borderRadius: '14px', fontSize: '0.85rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Sparkles size={18} /> Open to Remote & On-Site Senior Roles worldwide
            </div>
          </div>

          {/* Right Column Cyber Form */}
          <div className="glass-panel" style={{ padding: '36px', borderRadius: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <Terminal size={20} color="#00f2fe" />
              <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#fff' }}>Interactive Message Dispatch</h3>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{ fontSize: '0.85rem', color: '#cbd5e1', display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                    Your Name / Organization
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins (Tech Recruiter / Engineering Lead)"
                    style={{
                      width: '100%',
                      background: '#090d16',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '12px',
                      padding: '14px 16px',
                      color: '#fff',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', color: '#cbd5e1', display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                    Your Work Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@company.com"
                    style={{
                      width: '100%',
                      background: '#090d16',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '12px',
                      padding: '14px 16px',
                      color: '#fff',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', color: '#cbd5e1', display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                    Role Focus Interest
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    style={{
                      width: '100%',
                      background: '#090d16',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '12px',
                      padding: '14px 16px',
                      color: '#fff',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  >
                    <option value="Senior React Native Developer">Senior React Native Developer</option>
                    <option value="Senior Frontend Engineer (React.js)">Senior Frontend Engineer (React.js)</option>
                    <option value="Cross-Platform Mobile & Web Engineer">Cross-Platform Mobile & Web Engineer</option>
                    <option value="Technical Consulting">Technical Consulting</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', color: '#cbd5e1', display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                    Project or Opportunity Description
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your tech stack, team size, and goals..."
                    style={{
                      width: '100%',
                      background: '#090d16',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '12px',
                      padding: '14px 16px',
                      color: '#fff',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                {/* Anti-spam honeypot */}
                <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                {/* Error Banner if transmission fails */}
                {submitError && (
                  <div style={{
                    background: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    color: '#f87171',
                    fontSize: '0.84rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <AlertCircle size={18} style={{ flexShrink: 0 }} />
                    <span>{submitError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-neon-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '16px',
                    fontSize: '1rem',
                    opacity: isSubmitting ? 0.75 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} /> Transmitting to Inbox...
                    </>
                  ) : (
                    <>
                      <Send size={18} /> Dispatch Message & Signal
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#10b981' }}>
                  <CheckCircle2 size={28} />
                  <div style={{ fontWeight: '800', fontSize: '1.2rem' }}>Message Transmitted Successfully!</div>
                </div>

                <div className="cyber-terminal">
                  <div style={{ color: '#00f2fe', marginBottom: '8px' }}>// TERMINAL LOG RESPONSE</div>
                  <pre style={{ overflowX: 'auto', fontSize: '0.8rem' }}>
                    <code>{JSON.stringify(terminalOutput, null, 2)}</code>
                  </pre>
                </div>

                <button
                  onClick={() => {
                    playCyberClick();
                    setFormData({ name: '', email: '', role: 'Senior React Native Developer', message: '' });
                    setSubmitted(false);
                    setTerminalOutput(null);
                  }}
                  className="btn-neon-secondary"
                  style={{ width: 'fit-content' }}
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
