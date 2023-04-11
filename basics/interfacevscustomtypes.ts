type Persona3 = {
  name: string;
  age: number;
};

interface Employee extends Persona3 {
  charge: string;
}

const newEmployee: Employee = {
  name: "Alberto",
  age: 30,
  charge: "",
};

// Union Types
type User = {
  id: string;
};

type Admin = User & Employee;

const newAdmin: Admin = {
  id: "abc",
  name: "Alberto",
  age: 30,
  charge: "",
};

type ServiceResponseToken = string | null | undefined | number;
type UserTypes = "admin" | "superUser" | 0;

// la variable solamente admitirá 3 valores permitidos.
const myUser: UserTypes = "admin";

// Unión, merge o sobre escritura de interfaces

interface Developer {
  name: string;
  stack: string[];
}

interface Developer {
  phone: string;
}

const me: Developer = {
  name: "Alberto",
  stack: ["JavaScript", "Python"],
  phone: "553132",
};
