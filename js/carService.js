function AgregarALcarrito(producto) {
    let memoria = JSON.parse(localStorage.getItem("mercancia")) || []; // Si no hay memoria, crea un array vacío
    console.log(memoria);
    
    const indiceProducto = memoria.findIndex(mercancia => mercancia.id === producto.id); // Compara con el id del producto
    
    if (indiceProducto === -1) { // Si no existe el producto en memoria
        const nuevoProducto = getNuevoProductoParaMemoria(producto); // Crea un nuevo producto
        memoria.push(nuevoProducto); // Agrega el nuevo producto a la memoria
    } else {
        memoria[indiceProducto].cantidad += 1; // Si el producto ya existe, incrementa la cantidad
    }
    
    localStorage.setItem("mercancia", JSON.stringify(memoria)); // Guarda la nueva memoria
}

function getNuevoProductoParaMemoria(producto) {
    const nuevoProducto = { ...producto }; // Crea una copia del producto original
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}
