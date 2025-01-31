# Proyecto de Gestión de Usuarios y Valijas

Este proyecto es una aplicación completa que gestiona usuarios y valijas utilizando Prisma como ORM y Node.js para el backend. La estructura del proyecto está dividida en dos partes principales: `back` y `front`.

## Instalación

1. Clona el repositorio:
    ```sh
    git clone https://github.com/Ganscert/proyecto-new-isa.git
    ```

2. Navega al directorio del backend:
    ```sh
    cd back
    ```

3. Instala las dependencias:
    ```sh
    npm install
    ```

4. Configura las variables de entorno en el archivo `.env`.

5. Ejecuta las migraciones de Prisma:
    ```sh
    npx prisma migrate dev --schema=prisma/usuariosDB/schema.prisma
    npx prisma migrate dev --schema=prisma/valijasDB/schema.prisma
    ```

6. Inicia el servidor:
    ```sh
    npm start
    ```

## Uso
Para la creacion de las valijas y sus seguimientos necesarios para el optimo funcionamiento.

### Endpoints

- **Usuarios**: Gestión de usuarios utilizando Prisma.
- **Valijas**: Gestión de valijas utilizando Prisma.

## Estructura del Código

- **prisma/**: Contiene los esquemas de Prisma y las migraciones.
- **src/**: Contiene el código fuente del backend.
  - **App.ts**: Punto de entrada de la aplicación.
  - **clientes/**: Clientes de Prisma para usuarios y valijas.
  - **routes/**: Definición de rutas.
  - **services/**: Servicios de negocio.

## Contribución

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit ([git commit -am 'Añadir nueva funcionalidad'](http://_vscodecontentref_/2)).
4. Sube tus cambios (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.


