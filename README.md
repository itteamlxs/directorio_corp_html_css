## Descripción

Este proyecto es un sitio web para compartir y visualizar documentos en formato PDF. Los documentos se organizan en bloques con un ícono y nombre, y se abren en una ventana emergente al hacer clic. Se han implementado medidas para mejorar la usabilidad y la seguridad, como la desactivación del clic derecho y la tecla F12, junto con notificaciones push que informan al usuario cuando una acción no está permitida. La interfaz es responsiva y los elementos están estilizados para una experiencia de usuario óptima.

## Características

- Organización de documentos en bloques.
- Visualización de documentos en ventanas emergentes.
- Desactivación del clic derecho y tecla F12.
- Notificaciones push para acciones no permitidas.
- Diseño responsivo y estilizado.
- Pagina de Login
- Dashboard para usuarios
- Dashboard para administradores

## Requisitos

- Navegador web moderno
- Conexión a Internet

## Instalación

1. Clona el repositorio:
    ```sh
    git clone https://github.com/itteamlxs/docview-v1.1.0.git
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd Descargas
    ```
    o

    ```sh
    cd Desktop
    ```

## Uso

1. Abre el archivo `index.html` en tu navegador.
2. Haz clic en los documentos para visualizarlos en la ventana emergente.
3. Las acciones de clic derecho y la tecla F12 están deshabilitadas para mejorar la seguridad.

## Estructura del Proyecto

- `index.html`: Archivo principal de HTML.
- `styles.css`: Archivo de estilos CSS.
- `script.js`: Archivo de JavaScript.
- `images/`: Carpeta con íconos y otras imágenes.
  
**Descripción del Proyecto DocView**

DocView es una plataforma web diseñada para la gestión y visualización de documentos en formato PDF. Su objetivo principal es proporcionar un entorno intuitivo y accesible para usuarios con diferentes niveles de autorización, facilitando la administración y visualización de archivos importantes dentro de una organización o cooperativa.

**Características Principales:**

- **Sistema de Login Seguro:** Los usuarios pueden iniciar sesión con credenciales específicas para acceder a la plataforma. El sistema diferencia entre administradores y usuarios regulares, otorgando distintos niveles de acceso.
  
- **Paneles de Usuario y Administrador:** 
  - **Panel de Administrador:** Ofrece acceso completo a todas las funcionalidades del sistema, permitiendo la gestión de documentos y usuarios.
  - **Panel de Usuario:** Proporciona acceso restringido basado en el nivel de autorización, limitando la visibilidad y edición de documentos según el perfil del usuario.

- **Visor de Documentos Integrado:** Los documentos PDF pueden ser visualizados directamente en el navegador mediante un visor integrado. Los usuarios pueden abrir documentos en un popup, facilitando la consulta sin necesidad de descargar los archivos.

- **Interfaz de Usuario Mejorada:** Incluye una interfaz amigable y responsiva con estilos actualizados, optimizada para diferentes dispositivos y tamaños de pantalla.

**Tecnologías Utilizadas:**

- **Frontend:** HTML, CSS, JavaScript para una experiencia de usuario moderna y fluida.
- **Backend:** PHP para la gestión del sistema de login y la interacción con la base de datos.
- **Base de Datos:** MySQL para almacenar datos de usuarios y documentos.
- **Visor de Documentos:** Integración de PDF.js para la visualización de documentos PDF.

DocView está diseñado para ser fácil de instalar y configurar, proporcionando una solución completa para la gestión de documentos en entornos corporativos o cooperativos.
