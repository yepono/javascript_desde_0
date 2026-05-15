// Reto

let librosLeidos = [];

function agregarLibro(titulo ){
    librosLeidos.push(titulo);
}

function mostrarLibrosLeidos(){
    console.log("Libors que he leido: ");
    librosLeidos.forEach((libro) => {
        console.log(libro)
    });
}

agregarLibro("La ladrona de libros");
agregarLibro("El bosque magico");
agregarLibro("Aurora");
agregarLibro("Batallas en el desierto");

mostrarLibrosLeidos();