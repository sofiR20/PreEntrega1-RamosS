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

// CLASE NÚMERO 3 (CICLOS E ITERACIONES)

// FOR
function contarHasta(numeroFinal) {
    if (isNaN(numeroFinal) || numeroFinal <= 0) {
        alert("Por favor, ingresa un número mayor que 0.");
        return;
    }
    for (let i = 0; i <= numeroFinal; i++) {
        console.log("Contando hasta", i);
    }
}

// WHILE
function repetirMensaje() {
    let continuar = true;
    while (continuar) {
        console.log("Mostrando mensaje por el while");
        continuar = confirm("¿Desea continuar?");
    }
}

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

// CLASE NÚMERO 4 (FUNCIONES / FUNCTION)
/* Fueron aplicadas en módulos reutilizables a todo el código. */

// Función principal para llamar a las demás funciones.
function ejecutarPrograma() {
    let opcion;
    do {
        alert("Bienvenido al programa de interacción");
        opcion = prompt(
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
                break;
            default:
                alert("Por favor, elige una opción entre 1 y 5");
                break;
        }
    } while (opcion !== "5");
}   
ejecutarPrograma();

// CLASE NÚMERO 5 (OBJETOS)
// Representaciones en código de entidades de la vida real.

const emprendedora = {
    nombre: "Sofía Ramos",
    edad: 20,
    cargo: "Artista",
    instagramLaboral: "@kurama_painting",
    instagramPersonal: "@sofiramosss_",
}
alert(emprendedora.instagramLaboral);
alert(emprendedora.instagramPersonal);

// Objeto o Función Constructor/a
function ProductoLlaveros (forma, precio, stock) { // Primera letra en MAYUSCULA para diferenciar de funcion normal.
    this.forma = forma,
    this.precio = precio,
    this.stock = stock
    this.importeConIva = function(){return this.precio * 1.21}
}

const llavero1 = new ProductoLlaveros ("círculo", 6500, 15)
const llavero2 = new ProductoLlaveros ("cuadrado", 6500, 5)
const llavero3 = new ProductoLlaveros ("corazón", 6500, 7)
const llavero4 = new ProductoLlaveros ("rectángulo", 6500, 8)
const llavero5 = new ProductoLlaveros ("estrella", 6500, 10)

alert(llavero3.importeConIva())

function ProductoVidrios (forma, medidas, precio, stock) {
    this.forma = forma,
    this.medidas = medidas,
    this.precio = precio,
    this.stock = stock
    this.importeConIva = function(){return this.precio * 1.21}
}

const vidrio1 = new ProductoVidrios ("cuadrado", "12x12", 14900, 7)
const vidrio2 = new ProductoVidrios ("cuadrado", "15x15", 18500, 10)
const vidrio3 = new ProductoVidrios ("rectángulo", "13x18", 22300, 5)
const vidrio4 = new ProductoVidrios ("cuadrado", "20x20", 27500, 9)
const vidrio5 = new ProductoVidrios ("rectángulo", "20x25", 34300, 6)
const vidrio6 = new ProductoVidrios ("rectángulo", "25x30", 41900, 11)
const vidrio7 = new ProductoVidrios ("círculo", "15cm", 20500, 6 )
const vidrio8 = new ProductoVidrios ("círculo", "20cm", 29500, 8)
const vidrio9 = new ProductoVidrios ("círculo", "25cm", 38500, 4)

alert(vidrio5.importeConIva())

// IN y FOR...IN
const persona1 = {
    nombre: "Sofía",
    edad: 20,
    ciudad: "San Martín"
}
console.log("nombre" in persona1) // devuelve TRUE.
console.log("origen" in persona1) // devuelve FALSE.
for (const propiedad in persona1) {
    console.log (persona1 [propiedad]);
}

// CLASE NÚMERO 6 (ARRAYS)

// Array con productos anteriores.
const productos = [
    {id: 1, nombre: "Llaveros círculo", precio: 6500, stock: 15},
    {id: 2, nombre: "Llaveros cuadrado", precio: 6500, stock: 5},
    {id: 3, nombre: "Vidrio cuadrado 12x12", precio: 14900, stock: 7},
    {id: 4, nombre: "Vidrio rectángulo 20x25", precio: 34300, stock: 6}
];
// Recorrer el array para mostrar info de los productos.
for (let i = 0; i < productos.length; i++) {
    console.log("Producto: " + productos[i].nombre + ", Precio: $" + productos[i].precio + ", Stock: " + productos[i].stock);
}

// FUNCION DE ORDEN SUPERIOR - Filtrar productos con precio mayor a 10.000
const productosCaros = productos.filter(producto => producto.precio > 10000);

console.log("Productos con precio mayor a $10,000:");
productosCaros.forEach(producto => {
    console.log("Producto: " + producto.nombre + ", Precio: $" + producto.precio + ", Stock: " + producto.stock);
});

// METODOS: length, push, pop, shift, unshift, slice, splice, concat, join, index of, includes, reverse.

// Método splice
productos.splice(2, 1, {id: 5, nombre: "Vidrio redondo 15cm", precio: 25000, stock: 8});

console.log("Productos después de splice:");
for (let i = 0; i < productos.length; i++) {
    console.log("Producto: " + productos[i].nombre + ", Precio: $" + productos[i].precio + ", Stock: " + productos[i].stock);
}

// Método concat
const nuevosProductos = [
    {id: 6, nombre: "Llaveros estrella", precio: 7000, stock: 10},
    {id: 7, nombre: "Vidrio cuadrado 25x25", precio: 36000, stock: 5}
];

// Concatenar arrays.
const todosLosProductos = productos.concat(nuevosProductos);

console.log("Todos los productos después de concat:");
for (let i = 0; i < todosLosProductos.length; i++) {
    console.log("Producto: " + todosLosProductos[i].nombre + ", Precio: $" + todosLosProductos[i].precio + ", Stock: " + todosLosProductos[i].stock);
}

// CLASE NÚMERO 7 (Funciones de orden superior)
// CLASE NÚMERO 7 (Funciones de orden superior)
