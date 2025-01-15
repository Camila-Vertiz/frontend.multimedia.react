# Proyecto Frontend Multimedia - React + Vite

Este proyecto es una aplicación frontend enfocada en multimedia, construida utilizando React, estilizada con CSS y utilizando Vite como servidor de desarrollo. Sigue esta guía para configurar y ejecutar el proyecto en tu computadora desde cero.

---

## Prerrequisitos

Antes de comenzar, asegúrate de tener instalados los siguientes programas en tu sistema:

1. **Node.js** (v18 o superior)

   - Descarga e instala desde el [sitio oficial de Node.js](https://nodejs.org/).
   - Verifica la instalación:
     ```bash
     node -v
     npm -v
     ```

2. **Git** (opcional, para control de versiones)
   - Descarga e instala desde el [sitio oficial de Git](https://git-scm.com/).
   - Verifica la instalación:
     ```bash
     git --version
     ```

---

## Pasos de Instalación

1. **Clonar el Repositorio**
   Si tienes Git instalado, clona el repositorio del proyecto:

   ```bash
   git clone <https://github.com/Camila-Vertiz/frontend.multimedia.react.git>
   ```

   Alternativamente, descarga el proyecto como un archivo ZIP desde el repositorio y extráelo en tu directorio deseado.

2. **Navegar al Directorio del Proyecto**

   ```bash
   cd frontend.multimedia.react
   ```

3. **Instalar Dependencias**
   Ejecuta el siguiente comando para instalar los paquetes necesarios:
   ```bash
   npm install
   ```
   Este comando leerá el archivo `package.json` e instalará todas las dependencias necesarias.

---

## Estructura del Proyecto

Aquí tienes una breve descripción de la estructura del proyecto:

- `src/`

  - `assets/`: Contiene recursos estáticos (por ejemplo, imágenes, fuentes, etc.).
  - `components/`: Contiene los componentes de React organizados en carpetas:
    - `Grid/`
      - `Grid.tsx`: Lógica y estructura del componente.
      - `Grid.css`: Estilos para el componente Grid.
    - `SearchBar/`
      - `SearchBar.tsx`: Lógica y estructura del componente.
      - `SearchBar.css`: Estilos para el componente SearchBar.
  - `App.tsx`: Archivo principal de la aplicación.
  - `index.css`: Estilos globales.
  - `main.tsx`: Punto de entrada de la aplicación.

- Archivos de configuración:
  - `.eslintrc.cjs`: Configuración de ESLint.
  - `tsconfig.json`: Configuración de TypeScript.
  - `vite.config.ts`: Configuración del servidor de desarrollo Vite.

---

## Ejecutar la Aplicación

1. **Iniciar el Servidor de Desarrollo**
   Usa el siguiente comando para iniciar el servidor de desarrollo de Vite:

   ```bash
   npm run dev
   ```

   El servidor se iniciará y proporcionará una URL de desarrollo local, típicamente `http://localhost:5173/`.

2. **Abrir la Aplicación**
   Abre tu navegador web y navega a la URL proporcionada (por ejemplo, `http://localhost:5173/`).

---

## Crear una Build para Producción

Para crear una versión lista para producción de la aplicación, ejecuta:

```bash
npm run build
```

Los archivos generados se guardarán en la carpeta `dist/`. Puedes desplegar estos archivos en cualquier proveedor de hosting estático (por ejemplo, Netlify, Vercel, AWS S3, etc.).

---

## Pruebas de la Aplicación

(Actualmente, este proyecto no incluye configuraciones de pruebas. Agrega tu biblioteca de pruebas preferida, como Jest o React Testing Library, según sea necesario.)

---

## Solución de Problemas

- **Puerto ya en uso**
  Si el servidor de desarrollo no inicia debido a un conflicto de puertos, especifica un puerto diferente en el archivo `vite.config.ts` o usa:

  ```bash
  npm run dev -- --port=<nuevo-puerto>
  ```

- **Dependencias faltantes**
  Si encuentras errores relacionados con paquetes faltantes, vuelve a ejecutar:

  ```bash
  npm install
  ```

```

- **Errores de TypeScript**
 Asegúrate de que tu archivo `tsconfig.json` esté configurado correctamente y que coincida con la versión de TypeScript instalada.

---

## Mejoras Futuras

- Agregar pruebas unitarias e integrales.
- Implementar diseño responsivo para un mejor soporte móvil.
- Optimizar el rendimiento para builds de producción.

---

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Siéntete libre de usarlo y modificarlo según tus necesidades.

---

## Contacto

Para preguntas o soporte, contacta al mantenedor del proyecto en [camila.vrtz@gmail.com].
```
