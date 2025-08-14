# Sector 600 - Guía de Despliegue (Actualizada: 14 Agosto 2025)

## Configuración para Netlify

Este proyecto está configurado para ser desplegado en Netlify con las siguientes características:

1. **Sitio Estático con Next.js**: Configurado como sitio estático usando `output: 'export'`
2. **Variables de Entorno**: Configuración robusta de Firebase con variables de entorno
3. **Optimizado para Rendimiento**: Construcción optimizada y manejo de errores mejorado
4. **Compatible con SPA**: Configuración de redirecciones para manejar navegación SPA

## Requisitos Previos

- Una cuenta de [Netlify](https://www.netlify.com/)
- Proyecto de Firebase configurado en la [Consola de Firebase](https://console.firebase.google.com/)
- Permisos de Firestore configurados correctamente

## Pasos para Desplegar

### 1. Preparar el Repositorio

Asegúrate de que tu código incluye:
- Archivo `next.config.mjs` actualizado
- Archivo `netlify.toml` con la configuración correcta
- Inicialización de Firebase solo en cliente (`lib/firebase.ts`)

### 2. Configurar Netlify

1. Conecta tu repositorio Git a Netlify
2. Configura las siguientes variables de entorno en Netlify (Settings > Environment variables):

```
NEXT_PUBLIC_FIREBASE_API_KEY=tu-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=tu-proyecto.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=tu-proyecto
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=tu-proyecto.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=tu-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=tu-app-id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=tu-measurement-id
NEXT_PUBLIC_ENVIRONMENT=production
```

3. Configura las opciones de build:
   - **Build command**: `next build`
   - **Publish directory**: `out`
   - **Node version**: 20 (añade `NODE_VERSION=20` en variables de entorno)

### 3. Realizar el Despliegue

Puedes desplegar de dos maneras:

#### Opción 1: Despliegue Continuo
Push a tu rama principal y Netlify desplegará automáticamente.

#### Opción 2: Despliegue Manual
1. Ejecuta `npm run build` localmente
2. Arrastra la carpeta `out` a la interfaz de despliegue manual de Netlify

## Manejo de Errores

El sitio está configurado con:

1. Inicialización robusta de Firebase (solo cliente)
2. Manejo de errores en carga de datos
3. Validación de datos de Firestore
4. Página 404 personalizada

## Solución de Problemas Comunes

Si experimentas problemas de conexión con Firebase:

1. **Verifica las variables de entorno**: Asegúrate que estén configuradas correctamente en Netlify
2. **Limpia la caché del navegador**: Los datos obsoletos pueden causar problemas
3. **Revisa la consola del navegador**: Para identificar errores específicos
4. **Revisa la configuración de Firebase**: Asegúrate que tu proyecto de Firebase tiene habilitadas las APIs necesarias

Si experimentas problemas de despliegue:

1. **Revisa los logs de build en Netlify**: Para identificar errores en el proceso de build
2. **Asegúrate de que la versión de Node es 20+**: Configura `NODE_VERSION=20` en las variables de entorno de Netlify
