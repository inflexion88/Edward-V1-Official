import React, { useEffect, useState } from 'react';
import { useVoiceRecognition } from '../hooks/useVoiceRecognition';
import VoiceHeader from './voice/VoiceHeader';
import VoiceControls from './voice/VoiceControls';
import AnimatedBackground from './voice/AnimatedBackground';
import VoiceCircles from './voice/VoiceCircles';
import EmailOptIn from './EmailOptIn';
import GlassNavigation from './GlassNavigation';

// Type declarations for custom elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': {
        'agent-id': string;
        className?: string;
      };
    }
  }
}

const VoiceResponsiveCircles = () => {
  const {
    isListening,
    audioLevel,
    toggleListening,
    startListening
  } = useVoiceRecognition();
  const [isElevenLabsActive, setIsElevenLabsActive] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  useEffect(() => {
    // Listen for ElevenLabs widget events
    const handleElevenLabsStart = () => {
      console.log('ElevenLabs widget activated - starting our microphone');
      setIsElevenLabsActive(true);
      if (!isListening) {
        startListening();
      }
    };

    const handleElevenLabsStop = () => {
      setIsElevenLabsActive(false);
    };

    // Listen for various ElevenLabs events that might indicate widget activation
    const elevenLabsWidget = document.querySelector('elevenlabs-convai');
    if (elevenLabsWidget) {
      // Listen for click events on the widget
      elevenLabsWidget.addEventListener('click', handleElevenLabsStart);

      // Listen for custom events that ElevenLabs might dispatch
      window.addEventListener('elevenlabs-start', handleElevenLabsStart);
      window.addEventListener('elevenlabs-conversation-start', handleElevenLabsStart);
      window.addEventListener('elevenlabs-conversation-end', handleElevenLabsStop);
    }

    // Also listen for general microphone activation events
    const handleMicrophoneAccess = () => {
      if (!isListening) {
        startListening();
      }
    };

    // Listen for media stream events
    navigator.mediaDevices?.addEventListener?.('devicechange', handleMicrophoneAccess);
    return () => {
      if (elevenLabsWidget) {
        elevenLabsWidget.removeEventListener('click', handleElevenLabsStart);
      }
      window.removeEventListener('elevenlabs-start', handleElevenLabsStart);
      window.removeEventListener('elevenlabs-conversation-start', handleElevenLabsStart);
      window.removeEventListener('elevenlabs-conversation-end', handleElevenLabsStop);
      navigator.mediaDevices?.removeEventListener?.('devicechange', handleMicrophoneAccess);
    };
  }, [isListening, startListening]);

  return <div className="flex flex-col items-center justify-center min-h-screen bg-black overflow-hidden relative">
      <AnimatedBackground />
      
      {/* Glass Navigation Header */}
      <GlassNavigation />

      <VoiceHeader />
      <VoiceCircles isListening={isListening} audioLevel={audioLevel} isElevenLabsActive={isElevenLabsActive} />
      <VoiceControls isListening={isListening} onToggleListening={toggleListening} audioLevel={audioLevel} />

      {/* ElevenLabs Conversational AI Widget */}
      <elevenlabs-convai agent-id="agent_9201k5x8gk3wevhsnhepg3xqgsd3" className="my-0 py-0"></elevenlabs-convai>

      {/* Email Modal Trigger Button */}
      <button
        onClick={() => setIsEmailModalOpen(true)}
        className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-10
                   px-6 py-3 rounded-full
                   bg-cyan-500/10 backdrop-blur-md
                   border border-cyan-400/30
                   text-white text-sm font-medium tracking-wide
                   hover:bg-cyan-500/15 hover:border-cyan-400/50 hover:scale-105
                   transition-all duration-300 ease-out
                   shadow-[0_0_20px_rgba(0,255,255,0.15)] hover:shadow-[0_0_30px_rgba(0,255,255,0.25)]"
      >
        Click here for Access to Edward V2
      </button>

      {/* Email Modal */}
      {isEmailModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/75 backdrop-blur-xl"
          onClick={() => setIsEmailModalOpen(false)}
        >
          <div
            className="relative w-full animate-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsEmailModalOpen(false)}
              className="absolute -top-14 right-0 w-10 h-10 flex items-center justify-center
                         text-white/50 hover:text-white
                         bg-white/5 hover:bg-white/10
                         border border-white/10 hover:border-white/20
                         rounded-full backdrop-blur-md
                         transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <EmailOptIn />
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="fixed bottom-12 left-0 right-0 z-0 flex justify-center pb-4">
        <a
          href="https://troyassoignon.com/contact.html"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-full
                     bg-cyan-500/20 backdrop-blur-md
                     border border-cyan-400/40
                     text-white text-sm font-medium tracking-wide
                     hover:bg-cyan-500/30 hover:border-cyan-400/60 hover:scale-105
                     transition-all duration-300 ease-out
                     shadow-[0_0_30px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.35)]
                     group"
        >
          <span className="block text-center">
            Want this built for your company?{' '}
            <span className="text-cyan-400 group-hover:text-cyan-300 font-semibold">
              Contact us →
            </span>
          </span>
        </a>
      </div>

      {/* Attribution Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-0 py-2 bg-gradient-to-t from-black/80 to-transparent">
        <p className="text-[10px] text-white/30 text-center tracking-wide">
          Developed by Troy Assoignon & PositioningiQ · Interface by Instalanding.ai · Voice by Elevenlabs.io
        </p>
      </footer>
    </div>;
};

export default VoiceResponsiveCircles;
