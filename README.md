# Sector 600 - Plataforma Política

Este proyecto es una plataforma web para una organización política, que incluye secciones informativas, propuestas ciudadanas, agenda de eventos, y una plataforma de participación ciudadana.

![Sector 600 Logo](public/placeholder-logo.png)

## Características

- **Diseño Moderno y Responsivo**: Interfaz adaptada a todos los dispositivos
- **Plataforma de Propuestas Ciudadanas**: Los ciudadanos pueden enviar propuestas que pueden ser destacadas por administradores
- **Panel de Administración**: Gestión de propuestas y contenido del sitio
- **Estadísticas en Tiempo Real**: Visualización de datos sobre las propuestas recibidas
- **Integración con Firebase**: Base de datos en tiempo real para contenido dinámico

## Tecnologías

- **Frontend**: Next.js 14, React, Tailwind CSS
- **UI Components**: shadcn/ui, Lucide Icons
- **Backend**: Firebase (Firestore, Auth, Analytics)
- **Deployment**: Netlify (Static Export)

## Estructura del Proyecto

```
sector600/
├── app/                  # Rutas de Next.js (App Router)
│   ├── accion-politica/  # Sección de acción política
│   ├── admin/            # Panel de administración
│   ├── agenda/           # Calendario de eventos
│   ├── nosotros/         # Información institucional
│   ├── participa/        # Participación ciudadana
│   ├── propuestas/       # Visualización de propuestas
│   └── redes/            # Redes sociales
├── components/           # Componentes reutilizables
│   └── ui/               # Componentes de interfaz
├── lib/                  # Utilidades y configuración
│   └── firebase.ts       # Configuración de Firebase
├── public/               # Archivos estáticos
└── styles/               # Estilos globales
```

## Instalación y Desarrollo

1. Clona el repositorio:
   ```bash
   git clone https://github.com/RodReBer/sector600.git
   cd sector600
   ```

2. Instala las dependencias:
   ```bash
   npm install
   # o
   pnpm install
   ```

3. Crea un archivo `.env.local` basado en `.env.example`:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=tu-api-key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=tu-proyecto.firebaseapp.com
   ...
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   # o
   pnpm dev
   ```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Producción y Despliegue

Para desplegar en Netlify, sigue las instrucciones en el archivo [DEPLOY.md](DEPLOY.md).

## Contribuciones

Si deseas contribuir al proyecto, consulta el archivo [CONTRIBUTING.md](CONTRIBUTING.md) para conocer las pautas y mejores prácticas.

## Licencia

Este proyecto es privado y su uso no está autorizado sin permiso explícito.

---

© 2025 Sector 600 - Todos los derechos reservados
