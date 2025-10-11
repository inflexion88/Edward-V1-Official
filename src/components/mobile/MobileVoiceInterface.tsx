import React, { useEffect, useState } from 'react';
import { useVoiceRecognition } from '../../hooks/useVoiceRecognition';
import MobileHeader from './MobileHeader';
import MobileVoiceCircles from './MobileVoiceCircles';
import MobileEmailOptIn from './MobileEmailOptIn';
import MobileNavigation from './MobileNavigation';
import AnimatedBackground from '../voice/AnimatedBackground';

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

const MobileVoiceInterface = () => {
  const {
    isListening,
    audioLevel,
    isSupported,
    startListening
  } = useVoiceRecognition();
  const [isElevenLabsActive, setIsElevenLabsActive] = useState(false);

  useEffect(() => {
    const handleElevenLabsStart = () => {
      setIsElevenLabsActive(true);
      if (!isListening) {
        startListening();
      }
    };
    const handleElevenLabsStop = () => {
      setIsElevenLabsActive(false);
    };
    const elevenLabsWidget = document.querySelector('elevenlabs-convai');
    if (elevenLabsWidget) {
      elevenLabsWidget.addEventListener('click', handleElevenLabsStart);
      window.addEventListener('elevenlabs-start', handleElevenLabsStart);
      window.addEventListener('elevenlabs-conversation-start', handleElevenLabsStart);
      window.addEventListener('elevenlabs-conversation-end', handleElevenLabsStop);
    }
    return () => {
      if (elevenLabsWidget) {
        elevenLabsWidget.removeEventListener('click', handleElevenLabsStart);
      }
      window.removeEventListener('elevenlabs-start', handleElevenLabsStart);
      window.removeEventListener('elevenlabs-conversation-start', handleElevenLabsStart);
      window.removeEventListener('elevenlabs-conversation-end', handleElevenLabsStop);
    };
  }, [isListening, startListening]);

  if (!isSupported) {
    return <div className="flex items-center justify-center min-h-screen bg-black text-white p-4">
        <div className="text-center">
          <p className="text-lg mb-4">Voice input not supported in this browser</p>
          <p className="text-gray-400">Please use Chrome, Edge, or Safari</p>
        </div>
      </div>;
  }

  return <div className="flex flex-col min-h-screen bg-black overflow-hidden relative">
      {/* Add the animated background */}
      <AnimatedBackground />
      
      {/* Mobile Navigation */}
      <MobileNavigation />
      
      {/* Main Content - much more generous spacing */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 relative z-10 pt-20 pb-8">
        <div className="flex flex-col items-center justify-center space-y-12 w-full max-w-md mx-auto">
          <MobileHeader />
          <MobileVoiceCircles isListening={isListening} audioLevel={audioLevel} isElevenLabsActive={isElevenLabsActive} />
          
          {/* Audio level indicator with proper spacing */}
          {isListening && <div className="w-48 h-1 bg-white/20 rounded-sm overflow-hidden">
              <div className="h-full bg-gradient-to-r from-orange-500 via-blue-600 to-white transition-all duration-100 ease-out" style={{
            width: `${Math.min(audioLevel * 50, 100)}%`
          }} />
            </div>}
        </div>
      </div>

      {/* ElevenLabs Widget - positioned for mobile with proper spacing */}
      <div className="flex justify-center pb-6 relative z-10">
        <elevenlabs-convai agent-id="agent_01jz5ys89vfz3v6x7sjk0rhzkf" className="scale-90"></elevenlabs-convai>
      </div>

      {/* Email Opt-in - bottom section with proper spacing */}
      <div className="px-6 pb-8 relative z-10">
        <MobileEmailOptIn />
      </div>
    </div>;
};

export default MobileVoiceInterface;
