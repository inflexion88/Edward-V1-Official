
import { useEffect, useState } from 'react';
import Index from '../pages/Index';

const ResponsiveRouteHandler = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      // Check both screen size and user agent for better mobile detection
      const screenSizeCheck = window.innerWidth < 768;
      const userAgent = navigator.userAgent.toLowerCase();
      const mobileDeviceCheck = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);

      setIsMobile(screenSizeCheck || mobileDeviceCheck);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Mobile blocking screen
  if (isMobile) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black overflow-hidden relative p-6">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-black to-orange-950/20"></div>

        {/* Content */}
        <div className="relative z-10 max-w-md w-full">
          {/* Glass container */}
          <div className="elegant-modal-container p-8">
            <div className="space-y-6 text-center">
              {/* Icon */}
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center">
                  <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-2xl font-light text-white tracking-wide">
                Desktop Required
              </h1>

              {/* Message */}
              <p className="text-white/70 font-light leading-relaxed">
                For a full user experience, please use Edward The Positioning Intelligence Agent on desktop.
              </p>

              {/* Divider */}
              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-3 bg-transparent text-white/40">In the meantime</span>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://troyassoignon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 px-6 rounded-xl
                           bg-cyan-500/10 hover:bg-cyan-500/15
                           border border-cyan-400/30 hover:border-cyan-400/50
                           text-white font-medium
                           transition-all duration-300
                           shadow-[0_0_20px_rgba(0,255,255,0.1)] hover:shadow-[0_0_30px_rgba(0,255,255,0.2)]
                           hover:scale-105"
              >
                Visit Our Website
              </a>

              {/* Small print */}
              <p className="text-xs text-white/30 font-light">
                troyassoignon.com
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <Index />;
};

export default ResponsiveRouteHandler;
