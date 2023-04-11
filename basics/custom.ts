// Custom Types
type Persona = {
  name: string;
  code: string | number;
  description?: string;
};

const newPerson: Persona = {
  name: "Alberto",
  code: "w",
};

// Puede ser un unknown type

type ServiceResponse = string | null | number | undefined;
let response: ServiceResponse;

type UserCharges = "admin" | "normal" | "superuser";

const myUserType: UserCharges = "superuser";
