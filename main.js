/* ALGORITMOS "IF" */

const container = document.getElementById("container");
const container2 = document.getElementById("container2");
const container3 = document.getElementById("container3");
const container4 = document.getElementById("container4");

/*
1.- Hacer un programa para ingresar un numero y luego se emita por pantalla un cartel aclaratorio si "Es Mayor a 10" o "No es Mayor a 10"
*/
/*
const numero = parseFloat(prompt("Introduzca un numero"));

function mayorMenor(numero) {
  if (numero > 10) {
    container.textContent = "Es Mayor a 10";
  } else if (numero < 10) {
    container.textContent = "No Es Mayor a 10";
  } else {
    container.textContent = "NO ES UN NUMERO. POR FAVOR COLOQUE UN NUMERO";
  }
}

mayorMenor(numero);
*/

/*
2.- Hacer un programa para ingresar dos numeros distintos y luego se muestre por pantalla el menor de ellos.
*/

/*
const n1 = parseFloat(prompt("Introduzca primer numero"));
const n2 = parseFloat(prompt("Introduzca segundo numero"));

function numeroMenor(n1, n2) {
  if (n1 > n2) {
    container.textContent = "El numero Menor es: " + n2;
  } else if (n1 < n2) {
    container.textContent = "El numero Menor es: " + n1;
  } else {
    container.textContent = "O ES UN NUMERO. POR FAVOR COLOQUE UN NUMERO";
  }
}

numeroMenor(n1, n2);
*/

/*
3.- Hacer un programa para ingresar dos numeros y que luego emita por pantalla "el mayor de ellos" o un cartel aclaratorio "son iguales" en el caso de que asi sea.
*/
/*
const n1 = parseFloat(prompt("Introduzca primer numero"));
const n2 = parseFloat(prompt("Introduzca segundo numero"));

function numeroMayor(n1, n2) {
  if (n1 > n2) {
    container.textContent = "El numero Mayor es: " + n1;
  } else if (n1 < n2) {
    container.textContent = "El numero Mayor es: " + n2;
  } else if (n1 === n2) {
    container.textContent = "Los numeros son iguales: " + n1;
  } else {
    container.textContent = "NO ES UN NUMERO. POR FAVOR COLOQUE UN NUMERO";
  }
}

numeroMayor(n1, n2);
*/

/*
4.- Hacer un programa para ingresar un numero y mostrar por pantalla un cartel aclaratorio si el mismo es "PAR" o "IMPAR".
*/

/*
const numero = parseInt(prompt("Introduzca un Número"));

function parImpar(numero) {
  if (numero % 2 === 0) {
    container.textContent = numero + "Este número es PAR";
  } else {
    container.textContent = numero + "Este número es IMPAR";
  }
}

parImpar(numero);
*/

/*
5.- Hacer un programa para ingresar un numero y luego se emita un cartel por pantalla "POSITIVO" si el numero es mayor a cero, "NEGATIVO" si el numero es menor a cero, o "CERO" si el numero es igual a cero.
*/

/*
const numero = parseInt(prompt("Introduzca un numero"));

function positivoNegativo(numero) {
  if (numero > 0) {
    container.textContent = numero + " Es Positivo";
  } else if (numero < 0) {
    container.textContent = numero + " Es Negativo";
  } else if (numero === 0) {
    container.textContent = numero + " Es Igual a Cero";
  } else {
    container.textContent = "NO ES UN NUMERO. POR FAVOR COLOQUE UN NUMERO";
  }
}

positivoNegativo(numero);
*/

/*
6.- Una casa de video juegos otorga un descuento dependiendo del importe de la compra realizada segun los siguientes valores:

    - Si el importe es menor a $1000, no hay descuento.

    - Si el importe es $1000 o mas pero menor a $5000, aplica un descuento del 10%.

    - Si el importe es $5000 o mas, aplica un descuento del 18%

  Hacer un programa para ingresar un importe de venta y luego muestre por pantalla el importe final con el descuento que corresponda.
*/

/*
const importe = parseFloat(prompt("Introduzca el Importe"));

function functionDescuento(importe) {
  if (importe > 1000 && importe < 5000) {
    const importe10 = importe * 0.1;
    const descuento10 = importe - importe10;
    container.textContent = "El Precio con el descuento es de: " + descuento10;
  } else if (importe >= 5000) {
    const importe18 = importe * 0.18;
    const descuento18 = importe - importe18;
    container.textContent = "El Precio con el descuento es de: " + descuento18;
  } else {
    container.textContent = "El Precio es de: " + descuento;
  }
}

functionDescuento(importe);
*/

/*
7.- Hacer un programa para ingresar cuatro numeros distintos y luego mostrar por pantalla el mayor de ellos.
*/

/*
const n1 = prompt("Introduzca primer numero");
const n2 = prompt("Introduzca segundo numero");
const n3 = prompt("Introduzca tercero numero");
const n4 = prompt("Introduzca cuarto numero");

function numMayor(n1, n2, n3, n4) {
  if (n1 > n2 && n1 > n3 && n1 > n4) {
    container.textContent = "El primer numero es el mayor: " + n1;
  } else if (n2 > n1 && n2 > n3 && n2 > n4) {
    container.textContent = "El segundo numero es el mayor: " + n2;
  } else if (n3 > n1 && n3 > n2 && n3 > n4) {
    container.textContent = "El tercer numero es el mayor: " + n3;
  } else if (n4 > n1 && n4 > n2 && n4 > n3) {
    container.textContent = "El cuarto numero es el mayor: " + n4;
  } else if (n1 === n2 && n1 === n3 && n1 === n4) {
    container.textContent = "Todos los numeros son iguales a: " + n1;
  } else {
    container.textContent = "Hay dos o tres numeros que se repiten";
  }
}

numMayor(n1, n2, n3, n4);
*/

/*
8.- Hacer un programa para ingresar cuatro numeros distintos y luego mostrar por pantalla el menor de ellos.
*/
/*
const n1 = prompt("Introduzca primer numero");
const n2 = prompt("Introduzca segundo numero");
const n3 = prompt("Introduzca tercero numero");
const n4 = prompt("Introduzca cuarto numero");

function numMenor(n1, n2, n3, n4) {
  if (n1 < n2 && n1 < n3 && n1 < n4) {
    container.textContent = "El primer numero es el menor: " + n1;
  } else if (n2 < n1 && n2 < n3 && n2 < n4) {
    container.textContent = "El segundo numero es el menor: " + n2;
  } else if (n3 < n1 && n3 < n2 && n3 < n4) {
    container.textContent = "El tercer numero es el menor: " + n3;
  } else if (n4 < n1 && n4 < n2 && n4 < n3) {
    container.textContent = "El cuarto numero es el menor: " + n4;
  } else if (n1 === n2 && n1 === n3 && n1 === n4) {
    container.textContent = "Todos los numeros son iguales a: " + n1;
  } else {
    container.textContent = "Hay dos o tres numeros que se repiten";
  }
}

numMenor(n1, n2, n3, n4);
*/

/*
9.- Hacer un programa para ingresar cinco numeros distintos y luego muestre por pantalla el mayor y el menor de ellos.
*/
/*
const n1 = prompt("Introduzca primer numero");
const n2 = prompt("Introduzca segundo numero");
const n3 = prompt("Introduzca tercero numero");
const n4 = prompt("Introduzca cuarto numero");

function numeroMayorMenor(n1, n2, n3, n4) {
  if (n1 > n2 && n1 > n3 && n1 > n4) {
    container.textContent = "El primer numero es el mayor: " + n1;
  } else if (n2 > n1 && n2 > n3 && n2 > n4) {
    container.textContent = "El segundo numero es el mayor: " + n2;
  } else if (n3 > n1 && n3 > n2 && n3 > n4) {
    container.textContent = "El tercer numero es el mayor: " + n3;
  } else if (n4 > n1 && n4 > n2 && n4 > n3) {
    container.textContent = "El cuarto numero es el mayor: " + n4;
  } else if (n1 === n2 && n1 === n3 && n1 === n4) {
    container.textContent = "Todos los numeros son iguales a: " + n1;
  } else {
    container.textContent = "Hay dos o tres numeros que se repiten";
  }

  if (n1 < n2 && n1 < n3 && n1 < n4) {
    container2.textContent = "El primer numero es el menor: " + n1;
  } else if (n2 < n1 && n2 < n3 && n2 < n4) {
    container2.textContent = "El segundo numero es el menor: " + n2;
  } else if (n3 < n1 && n3 < n2 && n3 < n4) {
    container2.textContent = "El tercer numero es el menor: " + n3;
  } else if (n4 < n1 && n4 < n2 && n4 < n3) {
    container2.textContent = "El cuarto numero es el menor: " + n4;
  } else if (n1 === n2 && n1 === n3 && n1 === n4) {
    container2.textContent = "Todos los numeros son iguales a: " + n1;
  } else {
    container2.textContent = "Hay dos o tres numeros que se repiten";
  }
}

numeroMayorMenor(n1, n2, n3, n4);
*/
/*
10.- Hacer un programa para ingresar cuatro numeros y luego mostrar por pantalla cuales son mayores a 100.
*/

/*
const n1 = prompt("Introduzca primer numero");
const n2 = prompt("Introduzca segundo numero");
const n3 = prompt("Introduzca tercer numero");
const n4 = prompt("Introduzca cuarto numero");

function n100(n1, n2, n3, n4) {
  if (n1 > 100) {
    container.textContent = "Numero Mayor a 100 n1: " + n1;
  } else {
    container.textContent = "";
  }

  if (n2 > 100) {
    container2.textContent = "Numero Mayor a 100 n2: " + n2;
  } else {
    container2.textContent = "";
  }

  if (n3 > 100) {
    container3.textContent = "Numero Mayor a 100 n3: " + n3;
  } else {
    container3.textContent = "";
  }

  if (n4 > 100) {
    container4.textContent = "Numero Mayor a 100 n4: " + n4;
  } else {
    container4.textContent = "";
  }
}

n100(n1, n2, n3, n4);
 */

/*
11.- Hacer un programa para ingresar cuatro numeros y luego mostrar por pantalla cuantos son menores a 100
*/

/*
const n1 = prompt("Introduzca primer numero");
const n2 = prompt("Introduzca segundo numero");
const n3 = prompt("Introduzca tercer numero");
const n4 = prompt("Introduzca cuarto numero");

function n100(n1, n2, n3, n4) {
  if (n1 < 100) {
    container.textContent = "Numero Menor a 100 n1: " + n1;
  } else {
    container.textContent = "";
  }

  if (n2 < 100) {
    container2.textContent = "Numero Menor a 100 n2: " + n2;
  } else {
    container2.textContent = "";
  }

  if (n3 < 100) {
    container3.textContent = "Numero Menor a 100 n3: " + n3;
  } else {
    container3.textContent = "";
  }

  if (n4 < 100) {
    container4.textContent = "Numero Menor a 100 n4: " + n4;
  } else {
    container4.textContent = "";
  }
}

n100(n1, n2, n3, n4);
*/

/*
12.- Hacer un programa para ingresar un valor que estara expresado en minutos. Si los minutos superan los 60, pasar el valor a horas, de lo contrario dejarlo en minuitos. Mostrar el resultado en pantalla aclarando si se muestran minutos u horas
*/

/* TENGO DUDAS DE COMO HACERLO */

/*
13.- Hacer un programa que solicite el ingreso de un numero y que luego emita un cartel por pantalla aclarando si el mismo es multiplo de 5
*/

/*
const numero = prompt("Introduzca un numero");

function multiplo5(numero) {
  if (numero % 5 === 0) {
    container.innerHTML = `Este numero <b>${numero}</b> es multiplo de <b>5<b/>`;
  } else {
    container.innerHTML = `NO ES MULTIPLO DE "5" <b>${numero}<b/>`;
  }
}

multiplo5(numero);
*/

/*
14.- Hacer un programa que solicite el ingreso de dos numeros y luego calcular

    - La resta si el primero es mayor que el segundo

    - La suma si son iguales

    - El producto si el primero es menor.

    Se debera emitir un cartel por pantalla con el resultado correspondiente.
*/

/*
const n1 = parseInt(prompt("Introduzca el primer numero"));
const n2 = parseInt(prompt("Introduzca el segundo numero"));

function calcular(n1, n2) {
  if (n1 > n2) {
    const resta = n1 - n2;
    container.textContent = `El resultado de la resta es ${resta}`;
  } else if (n1 === n2) {
    const sumar = n1 + n2;
    container.textContent = `El resultado de la suma es ${sumar}`;
  } else if (n1 < n2) {
    const producto = n1 * n2;
    container.textContent = `El resultado de la multiplicacion es ${producto}`;
  } else {
    container.textContent = "NO ES VALIDO EL DATO INGRESADO";
  }
}

calcular(n1, n2);
*/

/*
15.- Hacer un programa para ingresar dos numeros. si el segundo es distinto de cero, calcular la division del primero por el segundo y mostrar el resultado por pantalla, caso contrario, emitir un cartel aclarando que no se puede dividir por cero. 
*/
/*
const n1 = parseInt(prompt("Introduzca primer numero"));
const n2 = parseInt(prompt("Introduzca segundo numero"));

function fraccion(n1, n2) {
  if (n2 !== 0) {
    const division = n1 / n2;
    container.textContent = `La division es: ${division}`;
  } else if (n2 === 0) {
    container.textContent = `No se puede dividir entre 0 tiende a infinito`;
  } else {
    container.textContent = "NO ES VALIDO EL DATO INGRESADO";
  }
}

fraccion(n1, n2);
console.log(fraccion(n1, n2));
*/

/*
16.- Un importante negocio de desinfectante liquido realiza descuentos dependiendo de la cantidad de litros vendidos segun la siguiente escala:

    - Si vende menos de 100 litros, no hay descuento.

    - Si vende entre 101 y 300 litros, el descuento es del 10%.

    - Si vende entre 301 y 500 litros, el descuento es del 15%.

    - Finalmente, si la venta es de mas de 500 litros, el descuento es del 25%.

    Hacer un programa que solicite el ingreso del importe total de la venta y la cantidad de litros vendidos y calcule y emita el importe con el descuento aplicado.
*/

/*
const importe = parseFloat(prompt("Introduzca el importe total de la venta"));
const litrosVendidos = parseFloat(
  prompt("Introduzca la cantidad de litros vendidos")
);

function importeDescuento(importe, litrosVendidos) {
  if (litrosVendidos >= 100 && litrosVendidos <= 300) {
    const descuento10 = importe * 0.1;
    const importe10 = importe - descuento10;
    container.textContent = `Descuento del importe es del 10%: ${importe10}`;
  } else if (litrosVendidos > 300 && litrosVendidos <= 500) {
    const descuento15 = importe * 0.15;
    const importe15 = importe - descuento15;
    container.textContent = `Descuento del importe es es del 15%: ${importe15}`;
  } else if (litrosVendidos > 500) {
    const descuento25 = importe * 0.25;
    const importe25 = importe - descuento25;
    container.textContent = `Descuento del importe es es del 25%: ${importe25}`;
  } else if (litrosVendidos < 100) {
    container.textContent = `No hay ningun Descuento. ${importe}`;
  } else {
    container.textContent = `No es un numero`;
  }
}

importeDescuento(importe, litrosVendidos);
*/
