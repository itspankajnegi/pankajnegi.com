import React, { useState } from 'react';
import { Cpu, Zap, Radio, Activity, PackageCheck, Code, CheckCircle, Copy, Check, Terminal } from 'lucide-react';
import { playCyberClick, playSuccessChime } from '../utils/soundEffects';

const EngineeringHighlights = () => {
  const [activeSnippetTab, setActiveSnippetTab] = useState('chime');
  const [copied, setCopied] = useState(false);

  const snippets = {
    chime: {
      title: 'useRealtimeChimeCall.ts',
      lang: 'TypeScript / React Native',
      code: `import { useState, useEffect, useCallback } from 'react';
import { NativeEventEmitter, NativeModules } from 'react-native';

const { ChimeBridgeModule } = NativeModules;
const chimeEmitter = new NativeEventEmitter(ChimeBridgeModule);

export const useRealtimeChimeCall = (meetingId: string, attendeeId: string) => {
  const [callState, setCallState] = useState<'IDLE' | 'CONNECTING' | 'CONNECTED'>('IDLE');
  const [volumeLevel, setVolumeLevel] = useState<number>(0);

  const joinMeetingSession = useCallback(async () => {
    try {
      setCallState('CONNECTING');
      await ChimeBridgeModule.joinMeeting(meetingId, attendeeId);
      setCallState('CONNECTED');
    } catch (error) {
      console.error('[ChimeBridge] Failed joining meeting session:', error);
      setCallState('IDLE');
    }
  }, [meetingId, attendeeId]);

  useEffect(() => {
    const sub = chimeEmitter.addListener('onAudioVolumeUpdated', (data) => {
      setVolumeLevel(data.volume);
    });
    return () => sub.remove();
  }, []);

  return { callState, volumeLevel, joinMeetingSession };
};`
    },
    socket: {
      title: 'SocketChatQueue.js',
      lang: 'JavaScript / Socket.IO',
      code: `import io from 'socket.io-client';

class SocketChatEngine {
  constructor(serverUrl, authToken) {
    this.socket = io(serverUrl, {
      transports: ['websocket'],
      auth: { token: authToken },
      reconnectionAttempts: 5,
    });
    this.messageQueue = [];
    this.setupListeners();
  }

  setupListeners() {
    this.socket.on('connect', () => {
      console.log('[Socket] Connected. Flushing optimistic queue...');
      this.flushPendingQueue();
    });

    this.socket.on('astrologer_reply', (payload) => {
      this.onMessageReceivedCallback?.(payload);
    });
  }

  sendMessage(messageData) {
    if (this.socket.connected) {
      this.socket.emit('send_user_message', messageData);
    } else {
      console.warn('[Socket] Offline: Queueing message for retry...');
      this.messageQueue.push(messageData);
    }
  }

  flushPendingQueue() {
    while (this.messageQueue.length > 0 && this.socket.connected) {
      const msg = this.messageQueue.shift();
      this.socket.emit('send_user_message', msg);
    }
  }
}

export default SocketChatEngine;`
    },
    bridge: {
      title: 'BiometricAuthNativeBridge.m',
      lang: 'Objective-C / iOS Native',
      code: `#import <React/RCTBridgeModule.h>
#import <LocalAuthentication/LocalAuthentication.h>

@interface RCT_EXTERN_MODULE(BiometricAuthNativeBridge, NSObject)

RCT_EXPORT_METHOD(authenticateUser:(NSString *)reason
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  LAContext *context = [[LAContext alloc] init];
  NSError *error = nil;

  if ([context canEvaluatePolicy:LAPolicyDeviceOwnerAuthenticationWithBiometrics error:&error]) {
    [context evaluatePolicy:LAPolicyDeviceOwnerAuthenticationWithBiometrics
            localizedReason:reason
                      reply:^(BOOL success, NSError * _Nullable error) {
      if (success) {
        resolve(@{@"status": @"SUCCESS", @"authTime": @([[NSDate date] timeIntervalSince1968])});
      } else {
        reject(@"BIOMETRIC_FAILED", error.localizedDescription, error);
      }
    }];
  } else {
    reject(@"BIOMETRIC_UNAVAILABLE", @"Biometrics not configured on device", error);
  }
}

@end`
    }
  };

  const handleCopyCode = () => {
    playCyberClick();
    navigator.clipboard.writeText(snippets[activeSnippetTab].code);
    setCopied(true);
    playSuccessChime();
    setTimeout(() => setCopied(false), 2000);
  };

  const highlights = [
    {
      title: 'Real-Time Communication Architecture',
      icon: <Radio size={24} color="#00f2fe" />,
      color: '#00f2fe',
      desc: 'Implemented high-concurrency chat systems, audio/video streaming via Amazon Chime SDK, voice notes, and media attachments with optimistic UI updates and socket reconnection fallbacks.'
    },
    {
      title: 'Performance & Production Reliability',
      icon: <Zap size={24} color="#7f00ff" />,
      color: '#7f00ff',
      desc: 'Diagnosed JS thread bridge bottlenecks, reduced React Native bundle payload size, eliminated memory leaks in long-running socket streams, and achieved 99.8% crash-free sessions in production.'
    },
    {
      title: 'Analytics & Product Experimentation',
      icon: <Activity size={24} color="#10b981" />,
      color: '#10b981',
      desc: 'Integrated AppsFlyer deep-linking, Mixpanel event telemetry, and Sentry error tracking. Built feature-flag routing for user-segmented rollouts and dynamic A/B test variations.'
    },
    {
      title: 'Store Delivery & Release Automation',
      icon: <PackageCheck size={24} color="#f59e0b" />,
      color: '#f59e0b',
      desc: 'Managed end-to-end release candidate builds for Apple App Store & Google Play Store. Overseen TestFlight beta testing, Android internal app sharing, and automated CI/CD pipeline triggers.'
    }
  ];

  return (
    <section id="highlights" style={{ padding: '90px 0', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#00f2fe', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginBottom: '12px' }}>
            <Cpu size={16} /> SENIOR ENGINEERING SPECIFICATIONS
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', marginBottom: '16px' }}>
            Engineering <span className="gradient-text">Highlights & Code Architecture</span>
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '640px', margin: '0 auto', fontSize: '1rem' }}>
            Solving complex production engineering challenges beyond basic UI development.
          </p>
        </div>

        {/* Highlight Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '50px' }}>
          {highlights.map((h, i) => (
            <div
              key={i}
              className="glass-panel"
              style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                borderLeft: `4px solid ${h.color}`
              }}
            >
              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '12px', borderRadius: '12px', width: 'fit-content' }}>
                {h.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff' }}>
                {h.title}
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: '1.6' }}>
                {h.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Live Code Workbench / Playground */}
        <div className="glass-panel" style={{ padding: '28px', borderRadius: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Terminal size={20} color="#00f2fe" />
              <div>
                <div style={{ fontWeight: '700', fontSize: '1.1rem', color: '#fff' }}>Production Code Workbench</div>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>Inspect real-world code architecture patterns</div>
              </div>
            </div>

            {/* Code Tabs */}
            <div style={{ display: 'flex', gap: '8px', background: '#090d16', padding: '4px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <button
                onClick={() => { playCyberClick(); setActiveSnippetTab('chime'); }}
                style={{
                  background: activeSnippetTab === 'chime' ? '#00f2fe' : 'transparent',
                  color: activeSnippetTab === 'chime' ? '#070913' : '#94a3b8',
                  border: 'none',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  fontSize: '0.78rem',
                  fontWeight: '700',
                  cursor: 'pointer'
                }}
              >
                useRealtimeChimeCall.ts
              </button>
              <button
                onClick={() => { playCyberClick(); setActiveSnippetTab('socket'); }}
                style={{
                  background: activeSnippetTab === 'socket' ? '#7f00ff' : 'transparent',
                  color: activeSnippetTab === 'socket' ? '#fff' : '#94a3b8',
                  border: 'none',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  fontSize: '0.78rem',
                  fontWeight: '700',
                  cursor: 'pointer'
                }}
              >
                SocketChatQueue.js
              </button>
              <button
                onClick={() => { playCyberClick(); setActiveSnippetTab('bridge'); }}
                style={{
                  background: activeSnippetTab === 'bridge' ? '#10b981' : 'transparent',
                  color: activeSnippetTab === 'bridge' ? '#070913' : '#94a3b8',
                  border: 'none',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  fontSize: '0.78rem',
                  fontWeight: '700',
                  cursor: 'pointer'
                }}
              >
                BiometricAuthBridge.m
              </button>
            </div>
          </div>

          {/* Terminal Block */}
          <div className="cyber-terminal" style={{ position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '8px' }}>
              <span style={{ color: '#00f2fe', fontSize: '0.78rem' }}>
                // {snippets[activeSnippetTab].lang}
              </span>
              <button
                onClick={handleCopyCode}
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#fff',
                  borderRadius: '6px',
                  padding: '4px 10px',
                  fontSize: '0.72rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                {copied ? <Check size={12} color="#10b981" /> : <Copy size={12} />}
                {copied ? 'Copied!' : 'Copy Code'}
              </button>
            </div>

            <pre style={{ overflowX: 'auto', lineHeight: '1.5', tabSize: 2 }}>
              <code>{snippets[activeSnippetTab].code}</code>
            </pre>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EngineeringHighlights;
