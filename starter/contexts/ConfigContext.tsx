import React, { createContext, useContext, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface ConfigState {
  theme: 'light' | 'dark' | 'system';
  fontSize: 'small' | 'medium' | 'large';
  density: 'compact' | 'normal' | 'spacious';
  notifications: { email: boolean; push: boolean; sound: boolean; };
}

interface ConfigContextType {
  config: ConfigState;
  updateConfig: (newConfig: Partial<ConfigState>) => void;
  resetConfig: () => void;
}

const defaultConfig: ConfigState = {
  theme: 'system',
  fontSize: 'medium',
  density: 'normal',
  notifications: { email: true, push: true, sound: true },
};

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export const ConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useLocalStorage<ConfigState>('ui_prefs', defaultConfig);

  const updateConfig = (newConfig: Partial<ConfigState>) => {
    setConfig(prev => ({ ...prev, ...newConfig }));
  };

  const resetConfig = () => setConfig(defaultConfig);

  // Aplicar clases al body para CSS Global
  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute('data-theme', config.theme);
    root.setAttribute('data-size', config.fontSize);
    root.setAttribute('data-density', config.density);
  }, [config]);

  return (
    <ConfigContext.Provider value={{ config, updateConfig, resetConfig }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) throw new Error('useConfig debe usarse dentro de ConfigProvider');
  return context;
};