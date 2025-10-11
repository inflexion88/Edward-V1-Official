import React from 'react';
const AnimatedBackground = () => {
  return <div className="fixed inset-0 z-0 py-0">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-30 animate-grid-flow" style={{
      backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
      backgroundSize: '30px 30px'
    }} />
      
      <style>{`
        @keyframes gridFlow {
          0% {
            transform: translate(0, 0) scale(1.2);
          }
          100% {
            transform: translate(-30px, -30px) scale(0.8);
          }
        }
        
        .animate-grid-flow {
          animation: gridFlow 15s linear infinite;
        }
      `}</style>
    </div>;
};
export default AnimatedBackground;