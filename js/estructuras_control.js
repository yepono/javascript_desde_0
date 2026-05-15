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
        } else {
            if (nota >= 75 & nota <= 89) {
                console.log("Alumno " + (index + 1));
                console.log("Bien. Aprobado con " + nota);
            } else {
                if (nota >= 60 & nota <= 74) {
                    console.log("Alumno " + (index + 1));
                    console.log("Suficiente. Aprobado con " + nota);
                } else {
                    console.log("Alumno " + (index + 1));
                    console.log("No aprobado. Nota " + nota);
                }
            }
        }
    } else {
        console.log("Alumno " + (index + 1));
        console.log("Nota invalida.")
    }

}
