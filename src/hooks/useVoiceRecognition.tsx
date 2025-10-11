
import { useState, useEffect, useRef } from 'react';

// Type declarations for Web Speech API
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
    webkitAudioContext: any;
  }
}

export const useVoiceRecognition = () => {
  const [isListening, setIsListening] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0);
  const [browserType, setBrowserType] = useState<string>('unknown');
  
  const recognitionRef = useRef<any>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const microphoneRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    // Detect browser type
    const userAgent = navigator.userAgent;
    let detectedBrowser = 'unknown';
    
    if (userAgent.includes('Firefox')) {
      detectedBrowser = 'firefox';
    } else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
      detectedBrowser = 'safari';
    } else if (userAgent.includes('Chrome')) {
      detectedBrowser = 'chrome';
    }
    
    setBrowserType(detectedBrowser);
    console.log('Detected browser:', detectedBrowser);

    // Check if speech recognition is supported
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.warn('Speech Recognition not supported in this browser - voice features will be limited');
      return;
    }

    if (!navigator.mediaDevices?.getUserMedia) {
      console.warn('getUserMedia not supported in this browser - microphone access will not work');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    
    recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
      if (event.error === 'not-allowed') {
        console.warn('Microphone access denied');
      }
    };
    
    recognitionRef.current = recognition;

    return () => {
      stopListening();
    };
  }, []);

  const startListening = async () => {
    try {
      console.log('Starting voice recognition...');
      
      // Start speech recognition
      if (recognitionRef.current) {
        recognitionRef.current.start();
      }

      // Setup audio analysis for volume detection
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        }
      });
      
      console.log('Got media stream, setting up audio context...');
      
      // Create audio context with browser-specific fallbacks
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) {
        console.error('AudioContext not supported - audio visualization will not work');
        return;
      }

      audioContextRef.current = new AudioContextClass();
      
      // Safari requires user interaction to start audio context
      if (audioContextRef.current.state === 'suspended') {
        console.log('Audio context suspended, attempting to resume...');
        await audioContextRef.current.resume();
      }
      
      analyserRef.current = audioContextRef.current.createAnalyser();
      microphoneRef.current = audioContextRef.current.createMediaStreamSource(stream);
      
      analyserRef.current.fftSize = 256;
      microphoneRef.current.connect(analyserRef.current);
      
      console.log('Audio analysis setup complete');
      
      setIsListening(true);
      analyzeAudio();
    } catch (error) {
      console.error('Error accessing microphone:', error);
      if (error instanceof Error) {
        console.error('Error details:', error.message);
      }
      // Don't block the app, just log the error - user may need to grant permissions
    }
  };

  const stopListening = () => {
    console.log('Stopping voice recognition...');
    
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
    }
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    setIsListening(false);
    setAudioLevel(0);
  };

  const analyzeAudio = () => {
    if (!analyserRef.current) return;

    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const analyze = () => {
      if (!isListening) return;

      analyserRef.current!.getByteFrequencyData(dataArray);

      // Calculate average volume with enhanced sensitivity
      const average = dataArray.reduce((sum, value) => sum + value, 0) / bufferLength;
      const normalizedLevel = Math.min(average / 40, 3); // More sensitive and higher cap

      setAudioLevel(normalizedLevel);
      animationRef.current = requestAnimationFrame(analyze);
    };

    analyze();
  };

  const toggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  return {
    isListening,
    audioLevel,
    browserType,
    toggleListening,
    startListening
  };
};
