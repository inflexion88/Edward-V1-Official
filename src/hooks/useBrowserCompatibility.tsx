
import { useState, useEffect } from 'react';

interface BrowserInfo {
  name: string;
  version: string;
  isSupported: boolean;
  issues: string[];
}

export const useBrowserCompatibility = () => {
  const [browserInfo, setBrowserInfo] = useState<BrowserInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const detectBrowser = () => {
      const userAgent = navigator.userAgent;
      const issues: string[] = [];
      let name = 'Unknown';
      let version = 'Unknown';
      let isSupported = true;

      console.log('User Agent:', userAgent);
      console.log('Platform:', navigator.platform);
      console.log('Language:', navigator.language);

      // Detect Firefox
      if (userAgent.includes('Firefox')) {
        name = 'Firefox';
        const match = userAgent.match(/Firefox\/(\d+)/);
        version = match ? match[1] : 'Unknown';

        console.log(`Detected Firefox version: ${version}`);

        // Check for known Firefox issues
        if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
          issues.push('Speech Recognition API not supported - voice features limited');
          isSupported = false; // This is critical for Edward
          console.warn('Firefox: Speech Recognition not available');
        }

        if (!navigator.mediaDevices?.getUserMedia) {
          issues.push('getUserMedia not supported - microphone access unavailable');
          isSupported = false; // This is critical
          console.warn('Firefox: getUserMedia not available');
        }

        // Check for CSS support (non-critical, just a warning)
        if (!CSS.supports('color', 'oklch(1 0 0)')) {
          console.warn('Firefox: OKLCH colors not supported - RGBA fallbacks will be used');
        }

        // Firefox version specific checks (warning only)
        const versionNum = parseInt(version);
        if (versionNum < 100) {
          console.warn('Firefox version may be outdated - recommend updating');
        }
      }
      
      // Detect Safari
      else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
        name = 'Safari';
        const match = userAgent.match(/Version\/(\d+)/);
        version = match ? match[1] : 'Unknown';

        console.log(`Detected Safari version: ${version}`);

        // Check for Safari-specific critical issues
        if (!window.webkitAudioContext && !window.AudioContext) {
          issues.push('Audio Context not supported - audio features unavailable');
          isSupported = false; // Critical for Edward
          console.warn('Safari: AudioContext not available');
        }

        if (!navigator.mediaDevices?.getUserMedia) {
          issues.push('getUserMedia not supported - microphone access unavailable');
          isSupported = false; // Critical for Edward
          console.warn('Safari: getUserMedia not available');
        }

        // Safari version specific checks
        const versionNum = parseInt(version);
        if (versionNum < 14) {
          issues.push('Safari version outdated - please update to Safari 14 or later');
          isSupported = false;
        }

        // Check for iOS Safari (not critical, just informational)
        if (userAgent.includes('Mobile')) {
          console.log('Detected iOS Safari - user interaction may be required for some features');
        }
      }
      
      // Detect Chrome/Chromium
      else if (userAgent.includes('Chrome')) {
        name = 'Chrome';
        const match = userAgent.match(/Chrome\/(\d+)/);
        version = match ? match[1] : 'Unknown';

        console.log(`Detected Chrome version: ${version}`);

        // Chrome version specific checks (warning only, Chrome is generally well-supported)
        const versionNum = parseInt(version);
        if (versionNum < 90) {
          console.warn('Chrome version may be outdated - recommend updating');
        }
      }

      // Detect Edge (Chromium-based)
      else if (userAgent.includes('Edg')) {
        name = 'Edge';
        const match = userAgent.match(/Edg\/(\d+)/);
        version = match ? match[1] : 'Unknown';

        console.log(`Detected Edge version: ${version}`);

        // Edge version specific checks
        const versionNum = parseInt(version);
        if (versionNum < 90) {
          console.warn('Edge version may be outdated - recommend updating');
        }
      }

      // Check for required APIs - only mark as unsupported for truly critical issues
      console.log('Checking API support...');

      // MediaDevices is critical for microphone access
      if (!navigator.mediaDevices) {
        issues.push('Media Devices API not available - microphone access blocked');
        isSupported = false;
        console.error('CRITICAL: MediaDevices API not supported');
      } else {
        console.log('MediaDevices API supported ✓');
      }

      // Custom Elements is needed for ElevenLabs widget but not critical for basic functionality
      if (!window.customElements) {
        console.warn('Custom Elements API not supported - ElevenLabs widget may not work');
      } else {
        console.log('Custom Elements API supported ✓');
      }

      // AudioContext is critical for voice circles and audio visualization
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) {
        issues.push('AudioContext not supported - audio visualization unavailable');
        isSupported = false;
        console.error('CRITICAL: AudioContext not supported');
      } else {
        console.log('AudioContext supported ✓');
      }

      // Speech Recognition is critical for Edward's core functionality
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        issues.push('Speech Recognition not supported - voice features unavailable');
        isSupported = false;
        console.error('CRITICAL: Speech Recognition not supported');
      } else {
        console.log('Speech Recognition supported ✓');
      }

      // Check HTTPS requirement (warning only for non-localhost)
      if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
        console.warn('Non-HTTPS connection - microphone may be blocked');
      }

      console.log('Browser Detection Complete:', { name, version, issues, isSupported });

      setBrowserInfo({ name, version, isSupported, issues });
      setIsLoading(false);
    };

    detectBrowser();
  }, []);

  return { browserInfo, isLoading };
};
