// Programacion imperativa

// 1

const listado = [
  { Estudiante: "Juan", notaConcepto: 6, notaContenido: 6 },
  { Estudiante: "Mario", notaConcepto: 8, notaContenido: 8 },
  { Estudiante: "Julia", notaConcepto: 8, notaContenido: 5 },
  { Estudiante: "Sofia", notaConcepto: 2, notaContenido: 4 },
];

let incrementaNota = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].notaConcepto >= 6) {
      arr[i].notaContenido += 2;
    }
  }
};

incrementaNota(listado);
console.log(listado);

// 2

const paises = [
  {
    nombre: "venezuela",
    continente: "Sudamerica",
    poblacion: 25000000,
  },
  {
    nombre: "australia",
    continente: "oceania",
    poblacion: 18000000,
  },
  {
    nombre: "tailandia",
    continente: "asia",
    poblacion: 32000000,
  },
  {
    nombre: "vietnam",
    continente: "asia",
    poblacion: 23000000,
  },
  {
    nombre: "francia",
    continente: "europa",
    poblacion: 65000000,
  },
];

let ordenPais = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j].poblacion > arr[j + 1].poblacion) {
        let aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
      }
    }
  }
};

ordenPais(paises);
console.log(paises);

// 3

const matriz = [
  //mínima  // máxima
  [10, 25], // lunes
  [8, 27], // martes
  [-1, 19], // miércoles
  [7, 19], // jueves
  [2, 22], // viernes
  [4, 26], // sábado
  [5, 21], // domingo
];

// 3.A

let tempDiaria = (matriz, dia) => {
  let total = 0;

  for (let i = 0; i < matriz[dia].length; i++) {
    total += matriz[dia][i];
  }
  total = total / matriz[dia].length;
  return total;
};

console.log(`El promedio de la temperatura es: ${tempDiaria(matriz, 0)}`);

// 3.B

let nuevoMaximas = [];

let recorrerMaximas = (matriz, col) => {
  for (let i = 0; i < matriz.length; i++) {
    if (matriz[i][col] < 22) {
      nuevoMaximas.push(matriz[i][col]);
    }
  }
  return nuevoMaximas;
};

recorrerMaximas(matriz, 1);
console.log(`El array con las temp. maximas menores a 22 es: ${nuevoMaximas}`);

// 3.C

let promedioSemanal = (matriz) => {
  let suma = 0;
  let cont = 0;

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[0].length; j++) {
      suma += matriz[i][j];
      cont += 1;
    }
  }
  suma = suma / cont;

  return suma;
};

console.log(
  `El promedio de la temperatura semanal es: ${promedioSemanal(matriz)}`
);
