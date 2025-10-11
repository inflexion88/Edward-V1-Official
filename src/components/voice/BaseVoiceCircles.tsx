
import React from 'react';

interface BaseVoiceCirclesProps {
  isListening: boolean;
  audioLevel: number;
  isElevenLabsActive?: boolean;
  size: 'mobile' | 'desktop';
}

const BaseVoiceCircles = ({ 
  isListening, 
  audioLevel, 
  isElevenLabsActive = false,
  size 
}: BaseVoiceCirclesProps) => {
  // Size configurations
  const sizeConfig = {
    mobile: {
      circleSize: 120,
      containerClass: 'w-32 h-32 my-0',
      circleClass: 'mobile-voice-circle',
      containerPrefix: 'mobile-voice-circles-container',
      glowIntensityBase: 15,
      glowIntensityMultiplier: 30,
      outerGlowBase: 20,
      outerGlowMultiplier: 15,
      innerGlowBase: 10,
      innerGlowMultiplier: 8,
      farGlowBase: 40,
      farGlowMultiplier: 20,
      farGlowInnerBase: 15,
      farGlowInnerMultiplier: 10
    },
    desktop: {
      circleSize: 150,
      containerClass: '',
      circleClass: 'voice-circle',
      containerPrefix: 'voice-circles-container',
      glowIntensityBase: 20,
      glowIntensityMultiplier: 40,
      outerGlowBase: 30,
      outerGlowMultiplier: 20,
      innerGlowBase: 15,
      innerGlowMultiplier: 10,
      farGlowBase: 60,
      farGlowMultiplier: 30,
      farGlowInnerBase: 20,
      farGlowInnerMultiplier: 15
    }
  };

  const config = sizeConfig[size];

  // Enhanced scaling based on audio level - always engaged
  const getScale = (baseScale: number, index: number) => {
    const responsiveness = [1.8, 1.2, 2.2][index];
    const pulseIntensity = Math.sin(Date.now() * 0.01) * 0.1;
    return baseScale + (audioLevel * 0.5 + pulseIntensity) * responsiveness;
  };

  const getRotationSpeed = () => {
    const speedMultiplier = Math.max(0.2, 1 - audioLevel * 0.8);
    return `${4 * speedMultiplier}s`;
  };

  const getBorderRadius = () => {
    const variation = audioLevel * 35 + Math.sin(Date.now() * 0.008) * 15;
    return `${Math.max(30, Math.min(80, 55 + variation))}%`;
  };

  const getGlow = () => {
    const intensity = audioLevel * config.glowIntensityMultiplier + config.glowIntensityBase;
    return `0 0 ${intensity}px ${intensity/2}px rgba(255, 120, 0, ${0.3 + audioLevel * 0.4})`;
  };

  const widgetScale = size === 'desktop' ? 2 : 1;

  return (
    <>
      <style>{`
        .${config.containerPrefix} {
          --rotation-duration: ${getRotationSpeed()};
          --dynamic-border-radius: ${getBorderRadius()};
          --dynamic-glow: ${getGlow()};
          --widget-scale: ${widgetScale};
        }

        .${config.circleClass} {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: ${config.circleSize}px;
          height: ${config.circleSize}px;
          border-radius: var(--dynamic-border-radius);
          box-shadow: var(--dynamic-glow);
          animation: rotateShape var(--rotation-duration) infinite ease-in-out;
          transition: all 0.15s ease-out;
          z-index: 2;
        }

        .${config.circleClass}.circle-1, .${config.circleClass}.mobile-circle-1 {
          background: radial-gradient(circle, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 67%, rgba(255, 120, 0, 1) 73%, rgba(255, 120, 0, 1) 100%);
          transform: translate(-50%, -50%) scale(${getScale(1, 0)});
        }

        .${config.circleClass}.circle-2, .${config.circleClass}.mobile-circle-2 {
          background: 
            radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.4) 0%, transparent 50%),
            radial-gradient(circle, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 60%, 
              rgba(0, 255, 255, 0.9) 70%, rgba(0, 255, 255, 1) 75%, 
              rgba(150, 150, 150, 0.9) 85%, rgba(0, 255, 255, 1) 100%);
          animation: rotateShape var(--rotation-duration) infinite reverse ease-in-out, voiceResponse 1s infinite ease-in-out;
          transform: translate(-50%, -50%) scale(${getScale(0.66, 1)}) rotate(240deg);
          box-shadow: 
            0 0 ${config.outerGlowBase + audioLevel * config.outerGlowMultiplier}px ${config.innerGlowBase + audioLevel * config.innerGlowMultiplier}px rgba(0, 255, 255, ${0.3 + audioLevel * 0.3}),
            inset 0 0 ${size === 'desktop' ? '20px' : '15px'} rgba(255, 255, 255, 0.1),
            0 0 ${config.farGlowBase + audioLevel * config.farGlowMultiplier}px ${config.farGlowInnerBase + audioLevel * config.farGlowInnerMultiplier}px rgba(0, 255, 255, ${0.1 + audioLevel * 0.2});
          border: 1px solid rgba(0, 255, 255, ${0.5 + audioLevel * 0.3});
        }

        .${config.circleClass}.circle-3, .${config.circleClass}.mobile-circle-3 {
          background: radial-gradient(circle, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 70%, rgba(255, 255, 255, 1) 73%, rgba(255, 255, 255, 1) 100%);
          transform: translate(-50%, -50%) scale(${getScale(0.53, 2)}) rotate(80deg);
        }

        ${size === 'mobile' ? `.${config.circleClass}.mobile-circle-1 { margin: 50px 0; }` : ''}
        ${size === 'mobile' ? `.${config.circleClass}.mobile-circle-2 { margin: 50px 0; }` : ''}
        ${size === 'mobile' ? `.${config.circleClass}.mobile-circle-3 { padding: 0; margin: 50px 0; }` : ''}

        @keyframes rotateShape {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) scale(1);
            border-radius: var(--dynamic-border-radius);
          }
          25% {
            border-radius: 45% 65% 40% 60%;
          }
          50% {
            transform: translate(-50%, -50%) rotate(180deg) scale(1.15);
            border-radius: 60% 40% 65% 45%;
          }
          75% {
            border-radius: 40% 60% 55% 45%;
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) scale(1);
            border-radius: var(--dynamic-border-radius);
          }
        }

        @keyframes voiceResponse {
          0%, 100% {
            filter: brightness(1) contrast(1) saturate(1);
          }
          50% {
            filter: brightness(${1.2 + audioLevel * 0.5}) contrast(${1.1 + audioLevel * 0.3}) saturate(${1.2 + audioLevel * 0.8});
          }
        }

        .pulsing, .mobile-pulsing {
          animation: pulse 0.3s ease-in-out infinite alternate;
        }

        @keyframes pulse {
          0% { opacity: 0.8; }
          100% { opacity: 1; }
        }
      `}</style>

      <div 
        className={`relative z-2 ${config.containerPrefix} ${size === 'mobile' ? 'mobile-pulsing' : 'pulsing'} transition-transform duration-500 ease-out ${config.containerClass}`}
        style={size === 'desktop' ? { transform: `scale(${widgetScale})` } : {}}
      >
        <div className={`${config.circleClass} ${size === 'mobile' ? 'mobile-circle-1' : 'circle-1'}`}></div>
        <div className={`${config.circleClass} ${size === 'mobile' ? 'mobile-circle-2' : 'circle-2'}`}></div>
        <div className={`${config.circleClass} ${size === 'mobile' ? 'mobile-circle-3' : 'circle-3'}`}></div>
      </div>
    </>
  );
};

export default BaseVoiceCircles;
