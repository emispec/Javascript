// Ejercicio 1
// En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
// likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
// los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
// obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
// que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.
const likes = [12, 20, 43, 0, 3, 26];

const determinarLikes = (arr) => {
  let aux;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
      }
    }
  }
  console.log(`Primero: ${arr[arr.length - 1]}`);
  console.log(`Segundo: ${arr[arr.length - 2]}`);
  console.log(`Tercero: ${arr[arr.length - 3]}`);
  console.log(`Ultimo: ${arr[0]}`);
};

determinarLikes(likes);

// Ejercicio 2
// El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
// objeto temperatura donde registra día —valor numérico del día—, mes —valor
// numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
// día. Las temperaturas —objeto temperatura— están cargados en un array.
// a) Ordenar por temperatura mínima de menor a mayor.
// b) Ordenar por temperatura máxima de mayor a menor.

// a)
const temperaturas = [
  {
    dia: 3,
    mes: 5,
    temp_max: 23,
    temp_min: 13,
  },
  {
    dia: 5,
    mes: 6,
    temp_max: 27,
    temp_min: 15,
  },
  {
    dia: 19,
    mes: 8,
    temp_max: 10,
    temp_min: 4,
  },
  {
    dia: 24,
    mes: 8,
    temp_max: 28,
    temp_min: 15,
  },
  {
    dia: 10,
    mes: 9,
    temp_max: 20,
    temp_min: 10,
  },
];

const ordenarTempMinima = (arr) => {
  let aux;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j].temp_min > arr[j + 1].temp_min) {
        aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
      }
    }
  }
  return arr;
};

console.log(ordenarTempMinima(temperaturas));

// b
const ordenarTempMaxima = (arr) => {
  let aux;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j].temp_max < arr[j + 1].temp_max) {
        aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
      }
    }
  }
  return arr;
};

console.log(ordenarTempMaxima(temperaturas));
