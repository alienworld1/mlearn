import { useTextToSpeech } from '../hooks/useTextToSpeech';
import { useLanguage } from '../hooks/useLanguage';

interface ReadAloudButtonProps {
  text: string;
  className?: string;
}

export function ReadAloudButton({
  text,
  className = '',
}: ReadAloudButtonProps) {
  const { speak, stop, isSpeaking, isSupported } = useTextToSpeech();
  const { currentLanguage, t } = useLanguage();

  if (!isSupported) {
    return null;
  }

  const handleClick = () => {
    if (isSpeaking) {
      stop();
    } else {
      speak(text, currentLanguage.code);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-md border
                 bg-white text-gray-700 border-gray-300 hover:bg-gray-50
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                 transition-colors duration-200 text-sm font-medium
                 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      aria-label={t('a11y.readAloud')}
      type="button"
    >
      <span className="text-lg" aria-hidden="true">
        {isSpeaking ? '🔊' : '🔈'}
      </span>
      {isSpeaking ? 'Stop' : t('course.readAloud')}
    </button>
  );
}
