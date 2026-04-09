import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'; 
//@ts-ignore
import './App.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  throw new Error("No se pudo encontrar el elemento root. Revisa tu index.html");
}