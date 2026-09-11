# Lab 02 - Docker Compose

Proyecto de laboratorio para desplegar una API y una base de datos usando Docker Compose, configurando réplicas y persistencia de datos.

## Estructura y Stack

* **API**: Node.js con Express (`Minimal API`).
  * Endpoint en la raíz que devuelve un JSON con un mensaje y el `hostname` del contenedor.
  * Construcción local mediante `Dockerfile`.
  * Escalada a **3 réplicas** con rango de puertos del host (`3000-3002`).
* **Base de Datos**: PostgreSQL 16 (`postgres:16-alpine`).
  * Datos guardados en un volumen nombrado para mantener la persistencia.

---

## Comandos Principales

* **Levantar y construir servicios**:
  `docker compose up -d --build`

* **Ver estado de los contenedores**:
  `docker compose ps`

* **Revisar logs de la API**:
  `docker compose logs api`

* **Detener y limpiar el entorno**:
  `docker compose down`

---

## Variables de Entorno (.env)

El archivo `.env` contiene los datos sensibles y no se sube a Git. Se incluye `.env.example` con la plantilla base:

* `MESSAGE`: Mensaje devuelto por la API.
* `PORT`: Puerto de exposición.
* `POSTGRES_USER`: Usuario de la base de datos.
* `POSTGRES_PASSWORD`: Contraseña de la base de datos.
* `POSTGRES_DB`: Nombre de la base de datos.

---

## Preguntas Teóricas

### 1. Tipos de redes en Docker
* **Bridge**: Es la red predeterminada. Permite que los contenedores en el mismo equipo se comuniquen entre sí aislados de la red externa.
* **Host**: Quita el aislamiento entre el contenedor y el host, haciendo que el contenedor use directamente la interfaz de red del equipo.
* **None**: Desactiva todas las interfaces de red del contenedor, dejándolo sin conectividad.

### 2. Tipos de volúmenes en Docker
* **Named Volumes**: Administrados por Docker dentro de su propio directorio. Es la forma recomendada para guardar información persistente.
* **Bind Mounts**: Enlazan una ruta específica de la máquina local dentro del contenedor. Muy útil en desarrollo para reflejar cambios en tiempo real.
* **Tmpfs Mounts**: Almacenan los datos directamente en la memoria RAM del sistema. Al detener el contenedor, la información se borra.

---

## Datos del alumno

* **Nombre**: Said Sebastian Miñan Sandoval
* **ID**: 000290136