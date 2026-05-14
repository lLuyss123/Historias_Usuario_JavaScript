const productos = [
    {
        "id": 1,
        "name": "Producto1",
        "price": 2000
    },
    {
        "id": 2,
        "name": "Producto2",
        "price": 3000
    },
    {
        "id": 3,
    },


    {
        123: 4,
        "name": "Producto4",
        "price": 5000
    }
]


const repetidos = new Set([1, 2, 3, 4, 4, 4, 5])
console.log(repetidos);
repetidos.add(4)
console.log(repetidos.has(4));

