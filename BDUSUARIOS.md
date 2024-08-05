¡Claro! Aquí tienes el contenido en formato Markdown para tu archivo `BDUSUARIOS.md`:

```markdown
# Documentación de la Base de Datos: Tabla `usuarios`

## Descripción de la Tabla `usuarios`

**Campos:**
- `id`: Autoincremental, clave primaria.
- `username`: Nombre de usuario.
- `password`: Contraseña del usuario.
- `nivel`: Rol de usuario donde `1` = admin y `0` = user.
- `created_at`: Fecha de creación del registro, valor por defecto es `CURRENT_TIMESTAMP`.

## Creación de la Tabla

```sql
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    nivel TINYINT(1) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Ejemplos de Consultas

### Inserción de Datos

```sql
-- Inserta un nuevo usuario con nivel de acceso user (0)
INSERT INTO usuarios (username, password, nivel) 
VALUES ('usuario', 'contrasenia24', 0);
```

### Actualización de Datos

```sql
-- Actualiza el username y password del usuario con id 1 y nivel de acceso admin (1)
UPDATE usuarios 
SET username = 'leonxjass', password = 'temporal2024' 
WHERE id = 1 AND nivel = 1;
```

### Eliminación de Datos

```sql
-- Elimina el usuario con id 2 y nivel de acceso user
DELETE FROM usuarios 
WHERE id = 2 AND nivel = 0;
```

### Eliminación de la Tabla

```sql
-- Elimina la tabla usuarios si existe
DROP TABLE IF EXISTS usuarios;
```

---

Para cualquier consulta adicional o detalles sobre la estructura, por favor contacta con el administrador de la base de datos.
```
