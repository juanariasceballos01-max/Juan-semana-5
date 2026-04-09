import React from 'react';
import { useConfig } from '../../contexts/ConfigContext';

export const SettingsPanel = () => {
  const { config, updateConfig, resetConfig } = useConfig();

  return (
    <section className="settings-panel">
      <h2>⚙️ Configuración del Sistema</h2>
      
      <div className="setting-group">
        <label>Tema Visual</label>
        <select value={config.theme} onChange={(e) => updateConfig({ theme: e.target.value as any })}>
          <option value="light">Claro</option>
          <option value="dark">Oscuro (Modo Nocturno)</option>
          <option value="system">Sistema</option>
        </select>
      </div>

      <div className="setting-group">
        <label>Tamaño de Texto</label>
        <input 
          type="range" min="0" max="2" step="1" 
          value={config.fontSize === 'small' ? 0 : config.fontSize === 'medium' ? 1 : 2}
          onChange={(e) => {
            const vals: any[] = ['small', 'medium', 'large'];
            updateConfig({ fontSize: vals[parseInt(e.target.value)] });
          }}
        />
        <span>{config.fontSize}</span>
      </div>

      <div className="setting-group">
        <label>Alertas de Sonido</label>
        <input 
          type="checkbox" 
          checked={config.notifications.sound}
          onChange={(e) => updateConfig({ 
            notifications: { ...config.notifications, sound: e.target.checked } 
          })}
        />
      </div>

      <button className="btn-reset" onClick={resetConfig}>Restablecer Valores</button>
    </section>
  );
};