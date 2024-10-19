const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors()); 
app.use(bodyParser.json());
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
        productoId: parseInt(req.body.productoId),  // Asegúrate de que productoId sea un número
        usuario: req.body.usuario,
        comentario: req.body.comentario
    };
    resenas.push(nuevaResena);  // Agregamos la nueva reseña al array
    console.log('Reseña agregada:', nuevaResena);  // Verificamos en la consola
    res.status(201).json(nuevaResena);
});

// Ruta para obtener todas las reseñas de un producto
app.get('/resenas/:productoId', (req, res) => {
    const productoId = parseInt(req.params.productoId);  // Convertimos productoId a número
    const resenasProducto = resenas.filter(r => r.productoId === productoId);  // Filtramos las reseñas
    console.log('Reseñas del producto:', resenasProducto);  // Imprimimos las reseñas para depuración
    res.json(resenasProducto);  // Devolvemos las reseñas
});




// rDSAuta para obtener todas las compras
app.get('/compras', (req, res) => {
    res.json(compras);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));



// Ruta para eliminar una reseña por su ID
app.delete('/resenas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = resenas.findIndex(r => r.id === id);  // Encontramos el índice de la reseña
    if (index !== -1) {
        resenas.splice(index, 1);  // Eliminamos la reseña del array
        res.json({ mensaje: `Reseña con ID ${id} eliminada` });
    } else {
        res.status(404).json({ error: 'Reseña no encontrada' });
    }
});



app.delete('/resenas', (req, res) => {
    resenas = [];  // Reiniciamos el array de reseñas
    res.json({ mensaje: 'Todas las reseñas eliminadas' });
});
