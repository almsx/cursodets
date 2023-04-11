interface Person {
  name: string;
  code: string | number;
  charge: number;
  description?: string;
  sayHello: () => string;
}

let person: Person = {
  name: "Alberto",
  code: "01",
  charge: 1,
  description: "Hola, Soy Alberto.",
  sayHello: () => {
    return "Hola 1";
  },
};

person.code = 50;

let secondPerson: Person = {
  name: "",
  code: "",
  charge: 0,
  sayHello: () => "Hola 2",
};

// en caso de que no exista nos ayuda a que no
// se rompa la aplicación.
secondPerson.description?.toUpperCase();
