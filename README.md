Aquí tienes el `README.md` completo con toda la información solicitada:

```markdown
# Proyecto DocView

## Versión 1.2

La versión 1.2 de DocView introduce importantes mejoras y nuevas funcionalidades. A continuación, se describen los principales cambios y mejoras en comparación con la versión 1.1.

### Mejoras en esta versión:

1. **Implementación de Sistema de Login:**
   - **login.php:** Añadido para permitir a los usuarios iniciar sesión en el sistema.
   - **logout.php:** Permite a los usuarios cerrar sesión de manera segura.

2. **Autorización de Usuarios:**
   - **admin_dashboard.php:** Nueva página de panel para administradores con acceso completo.
   - **user_dashboard.php:** Nueva página de panel para usuarios con acceso restringido.

3. **Visor de Documentos Mejorado:**
   - **Integración de visor PDF:** Ahora los usuarios pueden ver documentos PDF directamente en el navegador.
   - **Popup de Visualización:** Implementado un popup para la visualización de documentos con un botón de cierre.

4. **Actualización de la Estructura de Archivos:**
   - **Actualización de archivos CSS y JavaScript:** Mejoras en el estilo y funcionalidad del visor de documentos y el sistema de login.

### Instalación

1. **Clonar el Repositorio:**

   ```bash
   git clone https://github.com/tu_usuario/docview.git
   ```

2. **Instalar Dependencias:**

   Asegúrate de tener un servidor web (por ejemplo, XAMPP) y una base de datos MySQL configurada.

3. **Configuración de la Base de Datos:**

   - Importa el archivo `docview.sql` para configurar las tablas necesarias en tu base de datos.

4. **Configuración de Archivo de Conexión:**

   - Edita el archivo `config.php` para configurar la conexión a la base de datos. Asegúrate de ingresar las credenciales correctas de tu servidor MySQL.

5. **Subir Archivos al Servidor:**

   - Asegúrate de subir todos los archivos del proyecto a tu servidor web en el directorio adecuado.

### Uso

1. **Acceso al Sistema:**

   - **Admin:** Usa las credenciales de administrador para acceder al `admin_dashboard.php`. Aquí tendrás acceso completo a todas las funcionalidades.
   - **Usuario:** Usa las credenciales de usuario para acceder al `user_dashboard.php`. Tendrás acceso restringido según tu nivel de usuario.

2. **Visualización de Documentos:**

   - Navega a través del dashboard para ver los documentos disponibles.
   - Haz clic en un documento para abrirlo en un popup. El popup te permitirá visualizar el contenido del documento PDF y cerrar la vista cuando termines.

### Notas

- La funcionalidad de hash de contraseñas se implementará en versiones futuras. Actualmente, el sistema de autenticación usa contraseñas en texto claro para facilitar pruebas.
- Se recomienda mantener la versión 1.1 en producción hasta que todas las pruebas con la nueva versión estén completas.

### Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un Pull Request con tus mejoras y correcciones. Asegúrate de seguir las mejores prácticas de codificación y de probar tus cambios antes de enviar.

### Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.
```

Este `README.md` proporciona una visión completa de la nueva versión, instrucciones claras para la instalación y el uso, así como notas importantes sobre la versión actual y las contribuciones.
