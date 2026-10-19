import React, { useState } from 'react';
import { Layers, ArrowRight, RefreshCw, Cpu, Database, Radio, Shield, Sparkles } from 'lucide-react';
import { playCyberClick } from '../utils/soundEffects';

const ArchitectureVisualizer = () => {
  const [activeLayer, setActiveLayer] = useState('js');

  const layers = {
    js: {
      title: 'JavaScript Thread & React Component Layer',
      tech: 'React Native / React.js / Redux / Custom Hooks',
      desc: 'Renders the UI component hierarchy at 60 FPS. Dispatches actions, executes state logic, manages Optimistic UI state, and communicates with Native bridge via asynchronous JSON RPC calls.',
      metrics: '60 FPS Rendering · Optimistic Updates · Zero Blocking Main Thread'
    },
    bridge: {
      title: 'React Native C++ / JSI Bridge Layer',
      tech: 'Hermes Engine / JSI / NativeModules / Event Emitters',
      desc: 'Translates JavaScript function invocations directly to C++ pointers and native iOS (Objective-C/Swift) and Android (Java/Kotlin) methods with sub-millisecond serialization.',
      metrics: '<1.2ms Bridge Serialization · Shared Array Buffers · Zero Memory Overhead'
    },
    native: {
      title: 'iOS & Android Native Runtime Layer',
      tech: 'Amazon Chime SDK / Biometrics / FCM / GPS / Razorpay Native SDK',
      desc: 'Direct OS hardware access: camera frames, WebRTC audio processing, biometric TouchID/FaceID security, background GPS location tracking, and native push notifications.',
      metrics: 'Hardware Level Encryption · Background Thread Execution · 99.8% Reliability'
    }
  };

  return (
    <section id="architecture" style={{ padding: '90px 0', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#10b981', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginBottom: '12px' }}>
            <Layers size={16} /> SYSTEM ARCHITECTURE DIAGRAM
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', marginBottom: '16px' }}>
            Interactive <span className="gradient-text-emerald">System Pipeline</span>
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '640px', margin: '0 auto', fontSize: '1rem' }}>
            Click on any architectural layer below to inspect data flow, thread boundaries, and native memory management.
          </p>
        </div>

        {/* Pipeline Nodes Graphic */}
        <div className="glass-panel" style={{ padding: '36px', borderRadius: '24px' }}>
          <div className="responsive-grid-architecture">
            
            {/* Node 1: JS Thread */}
            <div
              onClick={() => { playCyberClick(); setActiveLayer('js'); }}
              style={{
                background: activeLayer === 'js' ? 'linear-gradient(135deg, rgba(0,242,254,0.2), rgba(79,172,254,0.3))' : 'rgba(255,255,255,0.03)',
                border: activeLayer === 'js' ? '2px solid #00f2fe' : '1px solid rgba(255,255,255,0.1)',
                borderRadius: '16px',
                padding: '24px',
                cursor: 'pointer',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                boxShadow: activeLayer === 'js' ? '0 0 30px rgba(0,242,254,0.3)' : 'none'
              }}
            >
              <Cpu size={32} color={activeLayer === 'js' ? '#00f2fe' : '#94a3b8'} style={{ marginBottom: '12px' }} />
              <div style={{ fontWeight: '800', fontSize: '1.05rem', color: '#fff', marginBottom: '4px' }}>1. JS Thread</div>
              <div style={{ fontSize: '0.75rem', color: '#00f2fe', fontFamily: 'var(--font-mono)' }}>React Native & State</div>
            </div>

            {/* Connection Arrow 1 */}
            <div className="arch-arrow" style={{ textAlign: 'center', color: '#00f2fe' }}>
              <ArrowRight size={24} className="pulse-glow" />
            </div>

            {/* Node 2: Bridge */}
            <div
              onClick={() => { playCyberClick(); setActiveLayer('bridge'); }}
              style={{
                background: activeLayer === 'bridge' ? 'linear-gradient(135deg, rgba(127,0,255,0.2), rgba(225,0,255,0.3))' : 'rgba(255,255,255,0.03)',
                border: activeLayer === 'bridge' ? '2px solid #7f00ff' : '1px solid rgba(255,255,255,0.1)',
                borderRadius: '16px',
                padding: '24px',
                cursor: 'pointer',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                boxShadow: activeLayer === 'bridge' ? '0 0 30px rgba(127,0,255,0.3)' : 'none'
              }}
            >
              <RefreshCw size={32} color={activeLayer === 'bridge' ? '#d8b4fe' : '#94a3b8'} style={{ marginBottom: '12px' }} />
              <div style={{ fontWeight: '800', fontSize: '1.05rem', color: '#fff', marginBottom: '4px' }}>2. C++ JSI Bridge</div>
              <div style={{ fontSize: '0.75rem', color: '#d8b4fe', fontFamily: 'var(--font-mono)' }}>RPC & Event Emitter</div>
            </div>

            {/* Connection Arrow 2 */}
            <div className="arch-arrow" style={{ textAlign: 'center', color: '#7f00ff' }}>
              <ArrowRight size={24} className="pulse-glow" />
            </div>

            {/* Node 3: Native */}
            <div
              onClick={() => { playCyberClick(); setActiveLayer('native'); }}
              style={{
                background: activeLayer === 'native' ? 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(0,242,254,0.3))' : 'rgba(255,255,255,0.03)',
                border: activeLayer === 'native' ? '2px solid #10b981' : '1px solid rgba(255,255,255,0.1)',
                borderRadius: '16px',
                padding: '24px',
                cursor: 'pointer',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                boxShadow: activeLayer === 'native' ? '0 0 30px rgba(16,185,129,0.3)' : 'none'
              }}
            >
              <Shield size={32} color={activeLayer === 'native' ? '#10b981' : '#94a3b8'} style={{ marginBottom: '12px' }} />
              <div style={{ fontWeight: '800', fontSize: '1.05rem', color: '#fff', marginBottom: '4px' }}>3. Native OS Layer</div>
              <div style={{ fontSize: '0.75rem', color: '#10b981', fontFamily: 'var(--font-mono)' }}>iOS / Android Hardware</div>
            </div>

          </div>

          {/* Active Layer Details Inspection Box */}
          <div style={{ background: '#090d16', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
              <h4 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#fff' }}>
                {layers[activeLayer].title}
              </h4>
              <span style={{ fontSize: '0.8rem', background: 'rgba(0,242,254,0.1)', color: '#00f2fe', padding: '4px 12px', borderRadius: '8px', fontFamily: 'var(--font-mono)' }}>
                {layers[activeLayer].tech}
              </span>
            </div>

            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '20px' }}>
              {layers[activeLayer].desc}
            </p>

            <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px dashed rgba(16,185,129,0.3)', borderRadius: '10px', padding: '12px 16px', color: '#10b981', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>
              ⚡ Performance Benchmark: {layers[activeLayer].metrics}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ArchitectureVisualizer;
