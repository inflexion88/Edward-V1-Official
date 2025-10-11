
import React from 'react';
import BaseVoiceCircles from './BaseVoiceCircles';

interface VoiceCirclesProps {
  isListening: boolean;
  audioLevel: number;
  isElevenLabsActive?: boolean;
}

const VoiceCircles = ({ isListening, audioLevel, isElevenLabsActive = false }: VoiceCirclesProps) => {
  return (
    <BaseVoiceCircles 
      isListening={isListening}
      audioLevel={audioLevel}
      isElevenLabsActive={isElevenLabsActive}
      size="desktop"
    />
  );
};

export default VoiceCircles;
