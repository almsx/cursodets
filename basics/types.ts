let edad: string = "20";
let meses: number = 5;
let calor: boolean = true;
let persona: Object = {};

let frutas1: Array<string> = ["Manzana", "Platano", "Melón"];
let frutas2: string[] = ["Manzana", "Platano", "Melón"];
let frutas3: Object[] = [{}, { name: "Manzana" }];

// No recomendado
let respuesta: any = "Hola";
respuesta = 20;
respuesta = true;
respuesta = ["Hola", 123];

// Void no devuelve nada.
function saludar(): void {
  console.log("hola");
}

let response: unknown;
response = true;

// Combinación de Tipos
type ResponseTypeService = string | undefined;

let response5: ResponseTypeService;

let responseProducts: ResponseTypeService;
let responsePartners: ResponseTypeService;

responsePartners?.concat("");

// Type Assertion
let message: any = "";
(message as string).toString();

let message2: any = "";
let messageUppercase = <string>message2;
messageUppercase.toUpperCase();

// Para el manejo del DOM, el Casteo sirve bastante.
const canvas = <HTMLCanvasElement>document.getElementById("canvas");
canvas.DOCUMENT_NODE;
