class Animal {
  public name: "Generic Animal";
  private age = 10;
  protected identity = "";

  constructor() {}

  sayHi() {
    console.log("Grrrr " + this.age);
  }
}

class Dog extends Animal {
  type: "Pastor Aleman";

  constructor() {
    super();
    console.log("Perro registrado!");
  }

  sayHi(): void {
    this.identity;
  }
}

const myAnimal: Animal = new Animal();

myAnimal.sayHi();

const myDog: Dog = new Dog();
myDog.type;
