
import React from 'react';

interface VoiceControlsProps {
  isListening: boolean;
  onToggleListening: () => void;
  audioLevel: number;
}

const VoiceControls = ({ isListening, onToggleListening, audioLevel }: VoiceControlsProps) => {
  return (
    <>
      {/* Audio level indicator */}
      {isListening && (
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 w-52 h-1 bg-white/20 rounded-sm overflow-hidden z-10">
          <div 
            className="h-full bg-gradient-to-r from-orange-500 via-blue-600 to-white transition-all duration-100 ease-out"
            style={{ width: `${Math.min(audioLevel * 50, 100)}%` }}
          />
        </div>
      )}
    </>
  );
};

export default VoiceControls;
