import React, { useState } from 'react';
import { ConfigProvider } from './contexts/ConfigContext';
import { Layout } from './components/layout/Layout';
import { SettingsPanel } from './components/Settingspanel/SettingsPanel.tsx';
import { Card } from './components/card/Card';
import { Form } from './components/form/Form';

// Definimos un tipo para los datos del formulario de mudanza
interface MudanzaFormData {
  cliente: string;
  destino: string;
  peso: string;
}

const App: React.FC = () => {
  const [formData, setFormData] = useState<MudanzaFormData>({
    cliente: '',
    destino: '',
    peso: ''
  });

  const [mensaje, setMensaje] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.cliente || !formData.destino) {
      setMensaje("❌ Por favor completa los campos obligatorios.");
      return;
    }
    
    setMensaje("✅ ¡Servicio de mudanza programado con éxito!");
    // Limpiar formulario después de 3 segundos
    setTimeout(() => {
      setMensaje(null);
      setFormData({ cliente: '', destino: '', peso: '' });
    }, 3000);
  };

  return (
    <ConfigProvider>
      <Layout>
        {/* PANEL LATERAL DE CONFIGURACIÓN */}
        <aside>
          <SettingsPanel />
        </aside>

        {/* CONTENIDO PRINCIPAL: DASHBOARD DE MUDANZAS */}
        <main style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <Card>
            <Card.Header>
              <Card.Title>📦 Nueva Orden de Servicio</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Field>
                  <Form.Label>Nombre del Cliente</Form.Label>
                  <Form.Input 
                    placeholder="Ej: Carlos Pérez" 
                    value={formData.cliente}
                    onChange={(e) => setFormData({...formData, cliente: e.target.value})}
                  />
                  {!formData.cliente && <Form.Error>El nombre es requerido</Form.Error>}
                </Form.Field>

                <Form.Field>
                  <Form.Label>Dirección de Entrega</Form.Label>
                  <Form.Input 
                    placeholder="Calle, Ciudad, Código Postal" 
                    value={formData.destino}
                    onChange={(e) => setFormData({...formData, destino: e.target.value})}
                  />
                </Form.Field>

                <Form.Field>
                  <Form.Label>Carga Estimada (Kg)</Form.Label>
                  <Form.Input 
                    type="number" 
                    placeholder="0" 
                    value={formData.peso}
                    onChange={(e) => setFormData({...formData, peso: e.target.value})}
                  />
                </Form.Field>

                {mensaje && <p style={{ fontWeight: 'bold' }}>{mensaje}</p>}

                <Form.Actions>
                  <Form.Submit>Generar Guía de Transporte</Form.Submit>
                </Form.Actions>
              </Form>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>
              <Card.Title>📑 Resumen de Operaciones</Card.Title>
            </Card.Header>
            <Card.Body>
              <div style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
                <div>
                  <h2 style={{ margin: 0 }}>12</h2>
                  <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>Pendientes</p>
                </div>
                <div>
                  <h2 style={{ margin: 0, color: '#27ae60' }}>45</h2>
                  <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>Completadas</p>
                </div>
                <div>
                  <h2 style={{ margin: 0, color: '#e74c3c' }}>2</h2>
                  <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>Alertas</p>
                </div>
              </div>
            </Card.Body>
            <Card.Footer>
              <small>Última actualización: hace 5 minutos</small>
            </Card.Footer>
          </Card>

        </main>
      </Layout>
    </ConfigProvider>
  );
};

export default App;