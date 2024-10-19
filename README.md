# Marketplace Backend - Express (Gestión de Compras y Reseñas)

Este es el backend del microservicio de gestión de compras y reseñas en el marketplace. Está construido con **Node.js (Express)** y proporciona rutas para registrar compras y gestionar reseñas de productos.

## Requisitos

- **Node.js** (versión 14 o superior)
- **npm** (se instala automáticamente con Node.js)

## Instrucciones para configurar el proyecto

### 1. Clonar el repositorio

### 2. Instalar dependencias
npm install
### 3. Ejecutar el servidor
node server.js
### 4. Probar las rutas
Puedes probar las siguientes rutas:

POST /compras: Registrar una nueva compra.
POST /resenas: Agregar una nueva reseña.
GET /resenas/:productoId: Obtener todas las reseñas de un producto.
GET /compras: Obtener todas las compras.
