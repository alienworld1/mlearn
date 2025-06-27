import { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';

interface OfflineStatusProps {
  className?: string;
}

export function OfflineStatus({ className = '' }: OfflineStatusProps) {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isPWAInstalled, setIsPWAInstalled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Check if PWA is installed
    const isStandalone = window.matchMedia(
      '(display-mode: standalone)',
    ).matches;
    const isInWebAppBrowser =
      'standalone' in window.navigator && window.navigator.standalone;
    setIsPWAInstalled(isStandalone || Boolean(isInWebAppBrowser));

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className={`flex items-center space-x-2 text-sm ${className}`}>
      {/* Online/Offline Status */}
      <div className="flex items-center space-x-1">
        <div
          className={`w-2 h-2 rounded-full ${
            isOnline ? 'bg-green-500' : 'bg-red-500'
          }`}
          aria-hidden="true"
        />
        <span className={isOnline ? 'text-green-700' : 'text-red-700'}>
          {isOnline ? t('status.online') : t('status.offline')}
        </span>
      </div>

      {/* PWA Status */}
      {isPWAInstalled && (
        <div className="flex items-center space-x-1 text-blue-700">
          <span aria-hidden="true">📱</span>
          <span>{t('status.pwaInstalled')}</span>
        </div>
      )}

      {/* Offline Available Indicator */}
      {!isOnline && (
        <div className="flex items-center space-x-1 text-gray-600">
          <span aria-hidden="true">💾</span>
          <span>{t('status.cachedContent')}</span>
        </div>
      )}
    </div>
  );
}
