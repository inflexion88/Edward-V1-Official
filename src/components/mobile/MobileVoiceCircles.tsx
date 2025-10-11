
import React from 'react';
import BaseVoiceCircles from '../voice/BaseVoiceCircles';

interface MobileVoiceCirclesProps {
  isListening: boolean;
  audioLevel: number;
  isElevenLabsActive?: boolean;
}

const MobileVoiceCircles = ({
  isListening,
  audioLevel,
  isElevenLabsActive = false
}: MobileVoiceCirclesProps) => {
  return (
    <BaseVoiceCircles 
      isListening={isListening}
      audioLevel={audioLevel}
      isElevenLabsActive={isElevenLabsActive}
      size="mobile"
    />
  );
};

export default MobileVoiceCircles;
