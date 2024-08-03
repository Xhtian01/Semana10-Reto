/*Ejercicio 1
Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se
deberá imprimir en pantalla.*/

/*function sumar(num1, num2) {
  let resultado = num1 + num2;
  alert(`La suma de los número es ${resultado}`);
}

let num1 = parseFloat(prompt('Ingrese el primer número'));

let num2 = parseFloat(prompt('Ingrese el segundo número'));

sumar(num1, num2);*/

/*Ejercicio 2
Verificar si un número es par o impar.*/

/*let numero = parseInt(prompt('Ingrese el número'));

if (numero % 2 == 0) {
  alert('El número es par');
} else {
  alert('El número es impar');
}*/

/*Ejercicio 3
Calcular el mayor de tres números.*/

/*let num1 = parseFloat(prompt('Ingrese el primer número'));
let num2 = parseFloat(prompt('Ingrese el segundo número'));
let num3 = parseFloat(prompt('Ingrese el tercer número'));

if (num1 > num2 && num2 > num3) {
  alert('El primer número es mayor');
} else if (num2 > num1 && num1 > num3) {
  alert('El segundo número es mayor');
} else {
  alert('El tercer número es mayor');
}*/

/*Ejercicio 4
Un estudiante realiza 4 exámenes, calcular el promedio de estos.*/

/*let nota1 = parseFloat(prompt('Ingrese la primera nota'));
let nota2 = parseFloat(prompt('Ingrese la segunda nota'));
let nota3 = parseFloat(prompt('Ingrese la tercera nota'));
let nota4 = parseFloat(prompt('Ingrese la cuarta nota'));

function promedio() {
  let promedio = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(2);
  alert(`El promedio de los exámenes es ${promedio}`);
}

promedio();*/

/*Ejercicio 5
Calcular el área de un rectángulo.*/

/*let base = parseFloat(prompt('Ingrese la base del rectángulo'));

let altura = parseFloat(prompt('Ingrese la altura del rectángulo'));

function area() {
  let area = (base * altura).toFixed(2);
  alert(`El área del rectángulo es ${area}`);
}

area();*/

/*Ejercicio 6
Calcular el área de un triángulo.*/

/*let base = parseFloat(prompt('Ingrese la base del triángulo'));

let altura = parseFloat(prompt('Ingrese la altura del triángulo'));

function area() {
  let area = ((base * altura) / 2).toFixed(2);
  alert(`El área del triángulo es ${area}`);
}

area();*/

/*Calcular el área de una circunferencia. (π = 3.14)*/

/*let radio = parseFloat(prompt('Ingrese el radio de la circunferencia'));

function area() {
  let area = (Math.PI * Math.pow(radio, 2)).toFixed(2);
  alert(`El área de la circunferencia es ${area}`);
}

area();
*/

/*Ejercicio 8
Crea un programa que al ingresar un número diga si es positivo, negativo o cero*/

/*let numero = parseFloat(prompt('Ingrese el número'));

if (numero > 0) {
  alert('El número es positivo');
} else if (numero < 0) {
  alert('El número es negativo');
} else {
  alert('El número es igual a cero');
}*/

/*Ejercicio 9
Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor.
No considerar el caso en que ambos números son iguales.*/

/*let num1 = parseFloat(prompt('Ingrese el primer número'));

let num2 = parseFloat(prompt('Ingrese el segundo número'));

if (num1 > num2) {
  alert(`El número ${num2} es menor`);
} else {
  alert(`El número ${num1} es menor`);
}*/

/*Ejercicio 10
Solicitar al usuario un número, y determinar si es divisible entre dos o no.
Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x número
no es divisible entre 2”.*/

/*let num = parseFloat(prompt('Ingrese el número'));

if (num % 2 == 0) {
  alert(`El número ${num} es divisible entre 2`);
} else {
  alert(`El número ${num} no es divisible entre 2`);
}*/

/*Ejercicio 11
Verificar si un día es fin de semana o día laborable.*/

/*let dia = prompt('Ingrese un día de la semana');

if (dia == 'sabado' || dia == 'domingo') {
  alert(`El ${dia} es un fin de semana`);
} else if (dia == 'lunes' || dia == 'martes' || dia == 'miercoles' || dia == 'jueves' || dia == 'viernes') {
  alert(`El ${dia} es un dia laborable`);
} else {
  alert('La palabra que ha ingresado no es un día de la semana');
}*/

/*Ejercicio 12
Verificar si un número es divisible por 3 y por 5.*/

/*let num = parseInt(prompt('Ingrese un número'));

if (num % 3 == 0 && num % 5 == 0) {
  alert(`El número ${num} es divisible por 3 y por 5`);
} else {
  alert(`El número ${num} no es divisible por 3 y por 5`);
}*/

/*Ejercicio 13
 Determinar si un número es múltiplo de 2, 3 o ambos.*/

/*let num = parseFloat(prompt("'Ingrese el número'"));

if (num % 2 == 0 && num % 3 == 0) {
  alert(`El número ${num} es múltiplo de 2 y de 3`);
} else if (num % 2 == 0) {
  alert(`El número ${num} es múltiplo de 2`);
} else if (num % 3 == 0) {
  alert(`El número ${num} es múltiplo de 3`);
} else {
  alert(`El número ${num} no es múltiplo de 2 ni de 3`);
}*/

/*Ejercicio 14
Una empresa que contrata personal requiere determinar la edad de las personas
que solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta
el año en que nacieron.*/

/*const nacimiento = parseInt(prompt('Ingrese su año de nacimiento'));

const añoActual = 2024;

function calcularEdad() {
  const edad = añoActual - nacimiento;
  alert(`La persona tiene ${edad} años`);
}

calcularEdad(1);*/

/*Ejercicio 15
Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un
año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5 años.
Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo y
represéntelo, que permita determinar el bono que recibirá un trabajador.*/

/*const trabajo = parseInt(prompt('Ingrese cuanto años ha trabajado'));

if (trabajo == 1) {
  alert('Obtendrá un bono de $100');
} else if (trabajo == 2) {
  alert('Obtendrá un bono de $200');
} else if (trabajo == 3) {
  alert('Obtendrá un bono de $300');
} else if (trabajo == 4) {
  alert('Obtendrá un bono de $400');
} else if (trabajo == 5) {
  alert('Obtendrá un bono de $500');
} else {
  alert('Obtendrá un bono de $1000');
}*/

/*Ejercicio 16
Realice un algoritmo para determinar si una persona puede votar con base en su
edad en las próximas elecciones.*/

function votacion(mesNacimiento, añoNacimiento) {
  if (añoNacimiento <= 2007) {
    alert('Usted podrá votar en la proximas elecciones');
  } else if (añoNacimiento == 2008) {
    if (
      mesNacimiento == 'enero' ||
      mesNacimiento == 'febrero' ||
      mesNacimiento == 'marzo' ||
      mesNacimiento == 'abril' ||
      mesNacimiento == 'mayo' ||
      mesNacimiento == 'junio'
    ) {
      alert('Usted podrá votar en la proximas elecciones');
    } else {
      alert('Usted no podrá votar en la proximas elecciones');
    }
  } else {
    alert('Usted no podrá votar en la proximas elecciones');
  }
}

let mesNacimiento = prompt('Ingrese el mes en el que nació');
let añoNacimiento = parseInt(prompt("'Ingrese su año de Nacimiento'"));
votacion(mesNacimiento, añoNacimiento);
