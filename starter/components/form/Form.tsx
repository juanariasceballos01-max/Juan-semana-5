import React, { createContext, useContext } from 'react';

// Contexto interno para el formulario si fuera necesario manejar estados complejos
const FormContext = createContext<any>(null);

const FormRoot = ({ children, onSubmit }: { children: React.ReactNode; onSubmit: (e: React.FormEvent) => void }) => (
  <form onSubmit={onSubmit} className="custom-form">
    {children}
  </form>
);

const FormField = ({ children }: { children: React.ReactNode }) => (
  <div className="form-field" style={{ marginBottom: '1.5rem' }}>
    {children}
  </div>
);

const FormLabel = ({ children }: { children: React.ReactNode }) => (
  <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>
    {children}
  </label>
);

const FormInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input 
    {...props} 
    className="form-input"
    style={{ 
      width: '100%', 
      padding: '0.8rem', 
      borderRadius: '8px', 
      border: '1px solid #ccc',
      fontSize: 'inherit' // Respeta el tamaño de fuente del contexto
    }} 
  />
);

const FormError = ({ children }: { children: React.ReactNode }) => (
  <span className="form-error" style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '0.25rem' }}>
    {children}
  </span>
);

const FormActions = ({ children }: { children: React.ReactNode }) => (
  <div className="form-actions" style={{ marginTop: '2rem', textAlign: 'right' }}>
    {children}
  </div>
);

const FormSubmit = ({ children }: { children: React.ReactNode }) => (
  <button type="submit" className="btn-submit">
    {children}
  </button>
);

// Composición del objeto
export const Form = Object.assign(FormRoot, {
  Field: FormField,
  Label: FormLabel,
  Input: FormInput,
  Error: FormError,
  Actions: FormActions,
  Submit: FormSubmit,
});