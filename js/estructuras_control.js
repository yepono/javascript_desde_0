// Reto Comparaciones y decisiones en JavaScript

//let nota = 0;

// Sistema de captura de nota de alumnos. Si la nota es valida se clasifica y si la nota es invalida se le notifica al usuario
let cantidad_alumnos = prompt("Ingrese la cantidad de estudiantes")


for (let index = 0; index < cantidad_alumnos; index++) {
    //const element = array[index];
    let nota = prompt("Capture la nota del alumno " + (index + 1));
    if (nota >= 0 & nota <= 100) {
        if (nota >= 90) {
            console.log("Alumno " + (index + 1));
            console.log("Excelente. Aprobado con " + nota);
        } else if (nota >= 75 & nota <= 89) {

            console.log("Alumno " + (index + 1));
            console.log("Bien. Aprobado con " + nota);

        } else if (nota >= 60 & nota <= 74) {
            console.log("Alumno " + (index + 1));
            console.log("Suficiente. Aprobado con " + nota);

        } else {
            console.log("Alumno " + (index + 1));
            console.log("No aprobado. Nota " + nota);
        }
    } else {
        console.log("Alumno " + (index + 1));
        console.log("Nota invalida.")
    }
}


    // Notas de Clase

    /* Una función es un bloque de codigo diseñado para realizar una tarea especifica.
    Las funciones se pueden reutilizar en todo el programa
    */

/*     // funcion clasica
    function cuadrado(numero) {
        let cuadrado = numero * numero;
        return cuadrado;
    }

    saludo();
    let numero = prompt("Ingrese un número para calcular su cuadrado:");
    let resultado = cuadrado(numero);
    console.log("El cuadrado de " + numero + " es: " + resultado);

    // funcion sin input
    function saludo() {
        console.log("¡Hola! Bienvenido a la programación en JavaScript.");
    }

    // funcion con multiples parametros
    function areaRectangulo(base, altura) {
        let area = base * altura;
        return area;
    }

    let base = prompt("Ingrese la base del rectángulo:");
    let altura = prompt("Ingrese la altura del rectángulo:");
    let area = areaRectangulo(base, altura);
    console.log("El área del rectángulo es: " + area);

    // funcion flecha
    // cuadrado de un numero utilizando una funcion flecha
    const cuadradoFlecha = (numero) => {
        return numero * numero;
    } */

    // funcion anonima
    /* la funcion anonima no tiene un nobre definido y se asiga a una variable
    se utiliza principalmente en funciones que se ejecutan de inmediato.
    */
/*     const saludoAnonimo = function () {
        console.log("¡Hola! Este es un saludo desde una función anónima.");
    } */

    // Scope de las variables
    /* El scope de una variable se refiere a la parte del programa donde la variable es accesible.
    Las variables pueden tener un scope global o local.
    */

/*     let variableGlobal = "Soy una variable global";

    function mostrarVariable() {
        let variableLocal = "Soy una variable local";
        console.log(variableGlobal);
        console.log(variableLocal);
    } */

/*     mostrarVariable();
    console.log(variableLocal); */ // no es accesible fuera de la función.

    // Diferencias entre var, let y const
    /* 
    var: tiene un scope global o de función, y puede ser redeclarada y reasignada.
    
    let: tiene un scope de bloque, no puede ser redeclarada pero sí reasignada.
    
    const: tiene un scope de bloque, no puede ser redeclarada ni reasignada.
    */
/* 
    var variableVar = "Soy una variable var";
    let variableLet = "Soy una variable let";
    const variableConst = "Soy una variable const"; */  + (index + 1)