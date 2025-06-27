import { useState, useCallback } from 'react';

export function useTextToSpeech() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported] = useState(() => 'speechSynthesis' in window);

  const speak = useCallback(
    (text: string, lang: string = 'en-US') => {
      if (!isSupported) {
        console.warn('Text-to-speech is not supported in this browser');
        return;
      }

      // Stop any current speech
      speechSynthesis.cancel();

      // Clean HTML tags from text
      const cleanText = text
        .replace(/<[^>]*>/g, '')
        .replace(/\s+/g, ' ')
        .trim();

      if (!cleanText) return;

      const utterance = new SpeechSynthesisUtterance(cleanText);

      // Set language based on current language
      utterance.lang = lang === 'es' ? 'es-ES' : 'en-US';
      utterance.rate = 0.8; // Slightly slower for better accessibility
      utterance.volume = 0.8;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      speechSynthesis.speak(utterance);
    },
    [isSupported],
  );

  const stop = useCallback(() => {
    if (isSupported) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, [isSupported]);

  return {
    speak,
    stop,
    isSpeaking,
    isSupported,
  };
}
