import React from 'react';
import { useConfig } from '../../contexts/ConfigContext';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { config } = useConfig();

  // Clase dinámica basada en la densidad
  const layoutClass = `layout-wrapper density-${config.density}`;

  return (
    <div className={layoutClass}>
      <header className="main-header">
        <div className="container">
          <h1>🚛 Mudanzas Express</h1>
          <div className="user-badge">
            Conductor: Juan Arias
          </div>
        </div>
      </header>

      <div className="layout-body container">
        {children}
      </div>

      <style>{`
        .layout-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .main-header {
          padding: 1rem 0;
          background-color: var(--primary);
          color: white;
          margin-bottom: 2rem;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .layout-body {
          flex: 1;
          display: grid;
          grid-template-columns: 350px 1fr; /* Panel Config | Contenido */
          gap: 2rem;
        }
        @media (max-width: 900px) {
          .layout-body { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};