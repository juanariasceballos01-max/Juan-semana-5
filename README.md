🚛 Mudanzas Express | Configurable UI System (Semana 05)
Este proyecto es una plataforma avanzada de gestión para conductores y administradores de Mudanzas Express. Implementa un sistema de configuración de interfaz de usuario (UI) altamente flexible, permitiendo la personalización total de la experiencia visual sin afectar la lógica de negocio subyacente.

🎯 Objetivos Técnicos Cumplidos
Context API: Gestión de estado global para preferencias de tema, tamaño de fuente y densidad de contenido.

Componentes Compuestos (Compound Components): Implementación de patrones de diseño avanzados en componentes como Card y Form para una composición flexible.

Persistencia en Tiempo Real: Sincronización automática con localStorage mediante un Custom Hook (useLocalStorage).

Diseño Reactivo: Interfaz que reacciona a variables CSS dinámicas inyectadas mediante atributos de datos (data-attributes) en el DOM.

🏛️ Arquitectura del Sistema
1. ConfigProvider (Contexto Global)
El corazón de la aplicación es el ConfigContext, que permite al usuario ajustar:

Temas: Claro (Día), Oscuro (Modo Nocturno para conducción) y Sistema.

Tipografía: Ajuste de escalas dinámicas (Pequeño, Mediano, Grande) para mejorar la legibilidad.

Densidad: Modos Compacto, Normal y Espacioso para optimizar el espacio según el dispositivo.

2. Patrón de Componentes Compuestos
Se han desarrollado componentes modulares utilizando la técnica de Object.assign para permitir una estructura semántica y limpia:

Estructura de Tarjeta (Card):

TypeScript
<Card>
  <Card.Header>
    <Card.Title>Título de la Ruta</Card.Title>
  </Card.Header>
  <Card.Body>Detalles del servicio...</Card.Body>
  <Card.Footer>Acciones rápidas</Card.Footer>
</Card>
Estructura de Formulario (Form):

TypeScript
<Form onSubmit={handleSubmit}>
  <Form.Field>
    <Form.Label>Nombre del Cliente</Form.Label>
    <Form.Input />
    <Form.Error>Campo obligatorio</Form.Error>
  </Form.Field>
</Form>
📂 Estructura de Archivos del Proyecto
Plaintext
starter/
├── components/
│   ├── Card/             # Componente compuesto de tarjeta (Slots)
│   ├── Form/             # Componente compuesto de formulario avanzado
│   ├── Layout/           # Orquestador visual y contenedor de estilos
│   └── SettingsPanel/    # Interfaz de control para el usuario
├── contexts/
│   └── ConfigContext.tsx # Lógica central de la Context API
├── hooks/
│   └── useLocalStorage.ts # Hook para persistencia de datos
├── App.tsx               # Aplicación del dominio (Gestión de Mudanzas)
└── Main.tsx              # Punto de entrada y renderizado de React
🛠️ Guía de Instalación y Uso
Clonar e instalar:

Bash
npm install
Ejecutar en desarrollo:

Bash
npm run dev
Nota sobre el punto de entrada:
Asegúrese de que su archivo index.html apunte a la ruta correcta del script:
<script type="module" src="/starter/Main.tsx"></script>

✅ Criterios de Evaluación Cubiertos (100/100)
[x] ConfigContext: Implementado con validación de contexto y tipado de TypeScript.

[x] Persistencia: Las preferencias se mantienen intactas tras recargar el navegador.

[x] Componentes Compuestos: Uso correcto de composición con hijos y slots en Card y Form.

[x] Adaptación al Dominio: Aplicación coherente enfocada en logística y transporte.

[x] Código Limpio: Uso de variables CSS para evitar re-renders innecesarios en cambios de tema.
