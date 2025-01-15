# Proyecto Frontend Multimedia - React + Vite

Este proyecto es una aplicación frontend enfocada en multimedia, construida utilizando React, estilizada con CSS y utilizando Vite como servidor de desarrollo. Siga esta guía para configurar y ejecutar el proyecto en su computadora desde cero.

---

## Prerrequisitos

Antes de comenzar, asegurarse de tener instalados los siguientes programas en el sistema:

1. **Node.js** (v18 o superior)

   - Descargar e instalar desde el [sitio oficial de Node.js](https://nodejs.org/).
   - Verificar la instalación:
     ```bash
     node -v
     npm -v
     ```

2. **Git** (opcional, para control de versiones)
   - Descargar e instalar desde el [sitio oficial de Git](https://git-scm.com/).
   - Verificar la instalación:
     ```bash
     git --version
     ```

---

## Pasos de Instalación

1. **Clonar el Repositorio**
   Si se tiene Git instalado, clonar el repositorio del proyecto:

   ```bash
   git clone https://github.com/Camila-Vertiz/frontend.multimedia.react.git
   ```

   Alternativamente, se puede descargar el proyecto como un archivo ZIP desde el repositorio y extraerlo en el directorio deseado.

2. **Navegar al Directorio del Proyecto**

   ```bash
   cd frontend.multimedia.react
   ```

3. **Instalar Dependencias**
   Ejecutar el siguiente comando para instalar los paquetes necesarios:
   ```bash
   npm install
   ```
   Este comando leerá el archivo `package.json` e instalará todas las dependencias necesarias.

---

## Estructura del Proyecto

- `src/`

  - `assets/`: Contiene recursos estáticos (por ejemplo, imágenes, fuentes, etc.). Actualmente no contiene información relevante.
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
   Usar el siguiente comando para iniciar el servidor de desarrollo de Vite:

   ```bash
   npm run dev
   ```

   El servidor se iniciará y proporcionará una URL de desarrollo local, típicamente `http://localhost:5173/`.

2. **Abrir la Aplicación**
   Abre el navegador web y navegar a la URL proporcionada (por ejemplo, `http://localhost:5173/`).

---

## Crear una Build para Producción

Para crear una versión lista para producción de la aplicación, ejecutar:

```bash
npm run build
```

Los archivos generados se guardarán en la carpeta `dist/`. Para su posterior despliegue.

---

## Solución de Problemas

- **Puerto ya en uso**
  Si el servidor de desarrollo no inicia debido a un conflicto de puertos, especificar un puerto diferente en el archivo `vite.config.ts` o usar:

  ```bash
  npm run dev -- --port=<nuevo-puerto>
  ```

- **Dependencias faltantes**
  Si se encuentran errores relacionados con paquetes faltantes, volver a ejecutar:

  ```bash
  npm install
  ```

```

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Siéntete libre de usarlo y modificarlo según tus necesidades.

---

## Contacto

Para preguntas o soporte, contacta al mantenedor del proyecto en [camila.vrtz@gmail.com].
```
