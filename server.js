const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
 // Habilita CORS en todas las rutas


const app = express();
app.use(cors()); 
app.use(bodyParser.json());

// Simular bases de datos para compras y reseñas
let compras = [];
let resenas = [];

// Ruta para registrar una compra
app.post('/compras', (req, res) => {
    const nuevaCompra = {
        id: compras.length + 1,
        productoId: req.body.productoId,
        usuario: req.body.usuario,
        cantidad: req.body.cantidad
    };
    compras.push(nuevaCompra);
    res.status(201).json(nuevaCompra);
});

// Ruta para agregar una reseña
app.post('/resenas', (req, res) => {
    const nuevaResena = {
        id: resenas.length + 1,
        productoId: req.body.productoId,
        usuario: req.body.usuario,
        comentario: req.body.comentario
    };
    resenas.push(nuevaResena);
    res.status(201).json(nuevaResena);
});

// Ruta para obtener todas las reseñas de un producto
app.get('/resenas/:productoId', (req, res) => {
    const productoId = parseInt(req.params.productoId);
    const resenasProducto = resenas.filter(r => r.productoId === productoId);
    res.json(resenasProducto);
});

// Ruta para obtener todas las compras
app.get('/compras', (req, res) => {
    res.json(compras);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));


