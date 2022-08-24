"use strict";

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

let jonas = new Person("Jonas", 1985);

let matilda = new Person("Matilda", 1992);

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

Person.prototype.specie = "homo sapiens";

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2022 - this.birthYear);
  }
}

const carlos = new PersonCl("Carlos", 1967);

console.log(carlos);
carlos.calcAge();

PersonCl.prototype.greet = function () {
  console.log(`Hola mi nombre es ${this.firstName}`);
};

carlos.greet();

const cuenta = {
  nombre: "Juan",
  movimiento: [200, 300, 150, 800, 100],
  //GET
  get latest() {
    return this.movimiento.slice(-1).pop();
  },

  //SET
  set latest(mov) {
    this.movimiento.push(mov);
  },
};

console.log(cuenta.latest);

cuenta.latest = 77;
console.log(cuenta.movimiento);

class AnimalCl {
  constructor(raza, nombreCompleto, birthYear) {
    this.raza = raza;
    this.nombreCompleto = nombreCompleto;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2022 - this.birthYear);
  }
  //GET
  get age() {
    return 2022 - this.birthYear;
  }

  set nombreCompleto(name) {
    if (name.includes(" ")) {
      this._nombreCompleto = name;
    } else {
      console.log(`${name} no es un nombre completo.`);
    }
  }

  get nombreCompleto() {
    return this._nombreCompleto;
  }
}

const perro = new AnimalCl("Labrador", "Rocco II", 2005);

console.log(perro.age);

console.log(perro);

Person.hey = function () {
  console.log("hola !!");
};

Person.hey();

class EquipoCl {
  constructor(nombre, alias, anio) {
    this.nombre = nombre;
    this.alias = alias;
    this.anio = anio;
  }

  completo() {
    return `${this.nombre} ${this.alias}`;
  }

  //metodo STATIC
  static edad() {
    return 2022;
  }
}

const river = new EquipoCl("River", "CARP", 1901);

console.log(river);
console.log(river.completo());

console.log(EquipoCl.edad());

class StudentCl extends PersonCl {
  constructor(firstName, birthYear, course) {
    super(firstName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`Hola mi nombre es ${this.firstName}`);
  }
}

const marta = new StudentCl("Marta", 2012, "Lengua");

console.log(marta);
marta.introduce();
marta.calcAge();
