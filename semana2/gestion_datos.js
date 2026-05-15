//Creamos un arreglo de productos con sus claves y su valores

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
        'id': 4,
        "name": "Producto4",
        "price": 5000
    }
]


console.log(productos);

//creamos un set con datos repetidos pero como el set no acepta repetios el los elimina y se queda con un valór unico sin repetidos
const repetidos = new Set([1, 2, 3, 4, 4, 4, 5])
console.log(repetidos);
// usamos el add para agregar en un set 
repetidos.add(4)
// usamos el metodo delete para borrar un dato del set
repetidos.delete(1)
// usamos el has para verificar si el set tiene el valor dentro del arreglo
console.log(repetidos.has(4));
// usamos un for of para recorrer el arreglo Set
for (const element of repetidos) {
    console.log(element);
}


console.log("MAPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP");

const arreglo = new Map();
arreglo.set("clave1", 1)
console.log(arreglo);

