//BUSQUEDA LINEAL

let numeros = [14, 52, 12, 24, 13, 2, 5, 8];

console.log(numeros.indexOf(5));

encontrarNumero = (arr, elemento) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elemento) {
      return i;
    }
  }
};

console.log(encontrarNumero(numeros, 5));

// Binary Search


let numeros2 = [2, 14, 17, 22, 31, 44];


let encontrar = (arr, buscado) => {
  // declaro las posiciones de los extremos
  let menor = 0;
  let mayor = arr.length - 1;
  // mid guarda la posicion del medio.
  let mid;
  let encontrado; // el elem. encontrado

  while (menor <= mayor) {
    mid = Math.floor((menor + mayor) / 2); 
    encontrado = arr[mid];

    if (encontrado === buscado) {
      return mid;
    }

    if (encontrado > buscado) {
      mayor = mid - 1; //una posicion antes del mid.
    } else {
      menor = mid + 1; //una posicion mas del mid.
    }
  }

  return null; // "tu numero no se encuentra en la lista"
};

console.log(encontrar(numeros2, 44));

// POR EJ: buscar el nombre de una cancion en un objeto

let persona = [
  { nombre: "Alberto", edad: 17, casado: true },
  { nombre: "Daniel", edad: 22, casado: true },
  { nombre: "Juan", edad: 33, casado: false },
];

let encontrarObj = (arr, buscado) => {
  let menor = 0;
  let mayor = 0;
  let mid;
  let encontrado;

  while (menor <= mayor) {
    mid = Math.floor((menor + mayor) / 2);
    encontrado = arr[mid].nombre;

    if (encontrado == buscado) {
      return arr[mid];
    }

    if (encontrado > buscado) {
      mayor = mid - 1;
    } else {
      menor = mid + 1;
    }
  }

  return "no encontrado";
};

console.log(encontrarObj(persona, "Alberto"));
