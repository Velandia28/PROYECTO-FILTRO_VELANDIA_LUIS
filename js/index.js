const contenedorTarjetas = document.getElementById("productos_contenedor");

function crertarjetasproductos(productos) {
    productos.forEach(producto => {
        const nuevo_producto = document.createElement("div");
        nuevo_producto.classList = "tarjeta-producto";
        nuevo_producto.innerHTML = `
            <img src="${producto.img}">
            <h3>${producto.nombre}</h3>
            <p>precio US: ${producto.precio}</p>
            <button>Agregar al carrito</button>
        `;
        contenedorTarjetas.appendChild(nuevo_producto);
        nuevo_producto.getElementsByTagName("button")[0].addEventListener("click",()=>AgregarALcarrito(producto))
    });
}
crertarjetasproductos(mercancia);
