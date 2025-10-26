import React from 'react';
const VoiceHeader = () => {
  return <div className="absolute top-40 left-1/2 transform -translate-x-1/2 z-10 max-w-4xl px-4">
      <h1 className="font-bold text-white text-center text-4xl md:text-6xl mb-4">Hi, I'm Edward</h1>
      <p className="text-center opacity-85 text-base py-0 text-zinc-100 md:text-xl mb-3 whitespace-nowrap">
        Positioning Intelligence Agent, Brought to you by <a href="https://troyassoignon.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors underline decoration-cyan-400/30 hover:decoration-cyan-300">Troy Assoignon</a> @ PositioningiQ
      </p>
      <p className="text-center text-white/50 text-sm md:text-base font-light">Press the call button above to have a conversation with Edward</p>
    </div>;
};
export default VoiceHeader;