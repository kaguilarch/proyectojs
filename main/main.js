const productos =
[

    {
        id: 1,
        nombre: "Suspension",
        description: "variedad de suspensiones",
        precio: 750,
        cantidad: 0,
    },

    {
        id: 2,
        nombre: "Faros delanteros",
        description: "Ponle estilo a tu coche",
        precio: 220,
        cantidad: 0,

    },

    {
        id: 3,
        nombre: "Alerones",
        description: "lo mejores estilos en alerones",
        precio: 170,
        cantidad: 0,
    },

    {
        id: 4,
        nombre: "Aros y llantas",
        description: "Compra aros y llantas",
        precio: 500,
        cantidad: 0,
    },

    {
        id: 5,
        nombre: "Pantallas y audio",
        description: "el mejor sondo y las mejores pantallas",
        precio: 50,
        cantidad: 0,
    },

    {
        id: 6,
        nombre: "Sistema de turbo",
        description: "Añade el mejor turbo para tu carro",
        precio: 1550,
        cantidad: 0,
     },
]
const carrito = []

const ordenarMenorMayor = () => {
    productos.sort(( a, b ) => a.precio - b.precio)
    console.log(productos);
    mostrarProductos()
};
const mostrarProductos =()=> {
    const listaProductos = productos.map(producto => {
        return '- '+ producto.nombre+' $'+ producto.precio
    })
    console.log(listaProductos);
    alert('Lista de productos'+'\n\n'+ listaProductos.join('\n'));
    comprarProductos(listaProductos)
};
const comprarProductos = (listaProductos) => {
    let productoNombre =''
    let productoCantidad = 0
    let otroProducto = false

    do {
        productoNombre = prompt('que producto desea comprar?'+'\n\n'+listaProductos.join('\n'))
        productoCantidad = parseInt(prompt('cuantos queres comprar?'))
        const producto = productos.find(producto => producto.nombre.toLocaleLowerCase() == productoNombre.toLocaleLowerCase())
            
        if (prodcuto) {
            agregarAlCarrito (producto, producto.id, productoCantidad)
            
        }else {
            alert('el producto no esta disponible')
        }
        
        otroProducto = confirm('agregas mas compras?')
        
    } while (otroProducto);
};
const agregarAlCarrito=(producto, productoId, productoCantidad) =>{
    
}
ordenarMenorMayor()
