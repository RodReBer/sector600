# Contribución al Proyecto Sector 600

¡Gracias por tu interés en contribuir al proyecto Sector 600! Esta guía te ayudará a comprender la estructura del proyecto y las mejores prácticas para mantener y mejorar la aplicación.

## Estructura del Proyecto

Este proyecto utiliza:
- **Next.js 14** como framework principal
- **Tailwind CSS** para estilos
- **shadcn/ui** para componentes de interfaz
- **Firebase** (Firestore, Auth, Analytics) para backend

### Directorios Principales

- `/app`: Rutas de la aplicación (Next.js App Router)
- `/components`: Componentes reutilizables
- `/lib`: Utilidades y configuración
- `/public`: Archivos estáticos

## Guías de Desarrollo

### 1. Inicialización de Firebase

El proyecto utiliza Firebase solo en el cliente. La inicialización se maneja en `lib/firebase.ts` utilizando:

- Un patrón singleton global para evitar inicializaciones múltiples
- Verificación explícita para ejecución solo en el cliente
- Manejo de errores robusto para cada servicio

**Importante:** Nunca accedas a Firebase durante el SSR (Server-Side Rendering).

```typescript
// Patrón correcto para usar Firebase
"use client";

import { db } from "@/lib/firebase";
import { useEffect, useState } from "react";

export default function MyComponent() {
  const [firebaseData, setFirebaseData] = useState(null);
  
  useEffect(() => {
    // Firebase operations inside useEffect
    const loadData = async () => {
      if (!db) return;
      
      try {
        // Firebase operations here
      } catch (error) {
        console.error("Error:", error);
      }
    };
    
    loadData();
  }, []);
  
  return (/* component JSX */);
}
```

### 2. Manejo de Errores

Implementa manejo de errores en todos los niveles:

1. **Nivel de componente**: Usa estados de carga/error y UI apropiada
2. **Nivel de Firebase**: Envuelve todas las operaciones en try/catch
3. **Nivel de datos**: Valida datos antes de usarlos, proporciona valores por defecto

### 3. Variables de Entorno

Las variables de Firebase se gestionan con `.env` que nunca debe estar en el repositorio.
Usa `.env.example` como plantilla.

Todos los valores de configuración de Firebase deben usar:
```
NEXT_PUBLIC_FIREBASE_API_KEY=valor
```

### 4. Deployment

El proyecto está configurado para Netlify con:
- Export estático (`output: 'export'`)
- Redirecciones para SPA
- Variables de entorno seguras

## Pruebas

Realiza pruebas en múltiples contextos:
1. Desarrollo local
2. Despliegue de prueba en Netlify
3. Navegadores móviles y desktop
4. Con/sin conexión a internet

## Convenciones de Código

- **TypeScript**: Define interfaces para todos los objetos
- **Componentes**: Prefiere componentes de función con hooks
- **Estado**: Maneja correctamente loading/error/success
- **Importaciones**: Agrupa por tipo (React, Next.js, Firebase, componentes)

## Seguridad

- **Reglas de Firestore**: Configura reglas adecuadas para proteger los datos
- **Auth**: Usa siempre la autorización correcta para operaciones admin
- **Variables de entorno**: Nunca expongas claves secretas

---

Para preguntas o aclaraciones, contacta al equipo de desarrollo.
