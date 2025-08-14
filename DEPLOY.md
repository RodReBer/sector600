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

## Características del Manejo de Errores

El sitio está configurado con mejoras significativas para robustez:

1. **Inicialización robusta de Firebase**:
   - Solo se inicializa en el cliente
   - Utiliza un patrón singleton global para evitar inicializaciones múltiples
   - Manejo de errores por servicio (Firestore, Auth, Analytics)
   - Timeout para evitar bloqueos en caso de problemas de conexión

2. **Manejo de errores en carga de datos**:
   - Validación de datos de Firestore con valores fallback
   - Mensajes de error amigables al usuario
   - Estados de carga visuales durante operaciones
   - Aislamiento de errores para evitar que un error en una parte afecte toda la aplicación

3. **UI Resiliente**:
   - Componentes que manejan valores nulos o indefinidos
   - Estados de carga y error para todas las operaciones
   - Botones de reintentar para recuperarse de errores

4. **Navegación y SEO**:
   - Página 404 personalizada
   - Redirecciones configuradas para SPA
   - Manejo adecuado de rutas dinámicas

## Solución de Problemas Comunes

### Problemas de Conexión con Firebase:

1. **Verifica las variables de entorno**:
   - Asegúrate que estén configuradas correctamente en Netlify
   - Confirma que coinciden exactamente con tu proyecto de Firebase
   - Verifica que empiezan con `NEXT_PUBLIC_`

2. **Problemas del Navegador**:
   - Limpia la caché del navegador
   - Prueba en modo incógnito
   - Verifica la consola del navegador para errores específicos

3. **Firestore y Permisos**:
   - Asegúrate que las reglas de seguridad de Firestore permiten las operaciones
   - Verifica que tu proyecto de Firebase tiene habilitadas las APIs necesarias
   - Confirma que tu plan de Firebase permite el volumen de operaciones

### Problemas de Despliegue:

1. **Errores de Build**:
   - Revisa los logs de build en Netlify para identificar errores específicos
   - Asegúrate que la versión de Node es 20+ (`NODE_VERSION=20` en variables de entorno)
   - Verifica que `next.config.mjs` tiene la configuración correcta para export estático

2. **Errores de Runtime**:
   - Errores 404: Verifica la configuración de redirecciones en `netlify.toml`
   - Páginas en blanco: Probablemente errores de JavaScript, revisa la consola
   - Datos no cargan: Verifica la inicialización de Firebase y las variables de entorno

## Mejores Prácticas

1. **Despliegues Progresivos**:
   - Utiliza ramas de desarrollo antes de desplegar a producción
   - Habilita despliegues de preview en Netlify

2. **Monitoreo**:
   - Configura alertas en Netlify para fallos de build
   - Utiliza Firebase Analytics para monitorear el uso
   - Revisa regularmente los logs de consola

3. **Mantenimiento**:
   - Actualiza regularmente las dependencias con `npm update`
   - Monitorea las cuotas y uso de Firebase
   - Haz pruebas periódicas de todos los flujos críticos
