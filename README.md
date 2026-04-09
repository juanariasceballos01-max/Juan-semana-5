# 🚛 Mudanzas Express | Configurable UI System (Semana 05)

Este proyecto es una plataforma avanzada de gestión para conductores y administradores de **Mudanzas Express**. Implementa un sistema de configuración de interfaz de usuario altamente flexible, permitiendo la personalización total de la experiencia visual sin afectar la lógica de negocio.

## 🎯 Objetivos Técnicos Cumplidos

1.  **Context API**: Gestión de estado global para preferencias de tema, tamaño de fuente y densidad.
2.  **Componentes Compuestos**: Implementación de patrones de diseño avanzados en componentes como `Card` y `Form`.
3.  **Persistencia**: Sincronización automática con `localStorage` mediante un Custom Hook.
4.  **Diseño Adaptativo**: UI que reacciona a variables CSS dinámicas basadas en los atributos del DOM.

## 🏛️ Arquitectura del Proyecto

### 1. Sistema de Configuración (ConfigProvider)
El corazón de la aplicación es el `ConfigContext`, que permite:
- **Temas**: Claro, Oscuro (Modo Nocturno para conductores) y Sistema.
- **Tipografía**: Ajuste de escalas (Pequeño, Mediano, Grande).
- **Densidad**: Modos Compacto, Normal y Espacioso para optimizar el espacio en pantallas de tablets o móviles.

### 2. Patrón de Componentes Compuestos
Se han desarrollado componentes utilizando la técnica de **Object.assign** para permitir una composición semántica:

- **Componente Card**:
  ```tsx
  <Card>
    <Card.Header><Card.Title>...</Card.Title></Card.Header>
    <Card.Body>...</Card.Body>
    <Card.Footer>...</Card.Footer>
  </Card>
