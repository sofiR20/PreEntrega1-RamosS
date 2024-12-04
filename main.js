// CLASE NÚMERO 1 (Conceptos generales: SINTAXIS Y VARIABLES)

// VARIABLES (contienen datos)
let edad = 20; //dato de tipo "number"
let nombre = "Sofía Ramos"; //dato de tipo "string" (cadena de caracteres/letras)

let num1 = 7;
let num2 = 13;

let result = num1+num2;
console.log("El resultado de la suma es: ", result);

let ingreso = prompt("Ingresá tu nombre").toUpperCase();
while (ingreso === null || ingreso.trim() === "") {
    // Si el usuario cancela o deja vacío, muestra el mensaje y vuelve a pedir el nombre
    ingreso = prompt("No es posible dejar el campo vacío. Por favor, ingresá tu nombre:");
}

// CLASE NÚMERO 2 (CONTROL DE FLUJOS)

// VALORES BOOLEANOS (true or false)
if (ingreso == "SOFIA RAMOS") {
    alert("Bienvenida Sofi");
}else {
    alert("Vos no sos Sofía Ramos, sos un intruso");
}

// if: si es tal cosa... // else: si es tal otra...
/*
= Asignación
== Comparación (caracteres)
=== Comparación estricta (tipo de dato)
*/

let number = parseInt(prompt("Ingresá un número"));
if (number === 20) {
    alert("Los números coinciden.");
}else { 
    alert("Los números no coinciden.");
}

function sumarDosNumeros() {
    let num1 = prompt("Ingresá un primer número").replace(",", ".");
    if (num1 === null || num1.trim() === "") {
        alert("No es posible dejar el campo vacío. Por favor, ingresá un número válido.");
        return; 
    }
    num1 = parseFloat(num1); // Convertir a número luego de validarlo.

    let num2 = prompt("Ingresá un segundo número").replace(",", ".");
    if (num2 === null || num2.trim() === "") {
        alert("No es posible dejar el campo vacío. Por favor, ingresá un número válido.");
        return;
    }
    num2 = parseFloat(num2); // Convertir a número luego de validarlo.

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingresá solo números válidos.");
    } else {
        let resultado = num1 + num2;
        alert("El resultado de la suma es: " + resultado);
    }
}
sumarDosNumeros();

// CLASE NÚMERO 3 (CICLOS E ITERACIONES)

// FOR
function contarHasta(numeroFinal) {
    for (let i = 0; i <= numeroFinal; i++) {
        console.log("Contando hasta", i);
    }
}
contarHasta();

// WHILE
function repetirMensaje() {
    let continuar = true;
    while (continuar) {
        console.log("Mostrando mensaje por el while");
        continuar = confirm("¿Desea continuar?");
    }
}
repetirMensaje();

// DO ... WHILE
function verificarUsuario() {
    let intentos = 3;
    let identificar = true;
    do { 
        let usuario = prompt("Ingresá tu usuario, solo tenés 3 intentos.");
        if (usuario === null) {
            alert("Por favor, vuelva a intentar.");
            break;
        }
        if (usuario === "Sofia Ramos") {
            alert("Bienvenido " + usuario);
            identificar = false;
        } else { 
            alert("No se reconoce el usuario " + usuario + ", le quedan " + intentos + " intentos.");
            intentos--;
            if (intentos < 0) { 
                alert("Los intentos fueron alcanzados.");
                break;
            }
        }
    } while (identificar === true);
}
verificarUsuario();

// CLASE NÚMERO 4 (FUNCIONES / FUNCTION)
/* Fueron aplicadas en módulos reutilizables a todo el código. */

// Función principal para llamar a las demas funciones
function ejecutarPrograma() {
    alert("Bienvenido al programa de interacción");
    let opcion = prompt(
        "Elegí una opción:\n1. Sumar dos números\n2. Verificar usuario\n3. Contar hasta un número\n4. Repetir mensaje\n5. Salir"
    );
    switch (opcion) {
        case "1":
            sumarDosNumeros();
            break;
        case "2":
            verificarUsuario();
            break;
        case "3":
            let numeroFinal = parseInt(prompt("¿Hasta qué número querés contar?"));
            if (!isNaN(numeroFinal)) {
                contarHasta(numeroFinal);
            } else {
                alert("Por favor, ingresá un número válido.");
            }
            break;
        case "4":
            repetirMensaje();
            break;
        case "5":
            alert("Gracias por usar el programa. ¡Adiós!");
            return; // Salir
        default:
            alert("Opción no válida, intentá de nuevo.");
            break;
    }
    ejecutarPrograma();
}
ejecutarPrograma();

// CLASE NÚMERO 5 (OBJETOS)