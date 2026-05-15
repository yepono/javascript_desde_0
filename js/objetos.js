const libro = {
    titulo: "Cien anios de soledad",
    autor: "Gabriel García Márquez",
    anio: 1967,
    estado: "disponible",
    capitulos: ["Muchos años despues...", "La llegada de los gitanos"],

    // funciones expresivas
    describirLibro: function () {
        console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el aioo ${this.anio}. El estado actual es: ${this.estado}.`);
    },

    agregarCapitulo: function (nombreCapitulo) {
        this.capitulos.push(nombreCapitulo);
        console.log(`Capitulo "${nombreCapitulo}" agregado con exito.`);
    },

    eliminarCapitulo: function (indice) {
        if (indice >= 0 && indice < this.capitulos.length) {
            const eliminado = this.capitulos.splice(indice, 1);
            console.log(`Capítulo "${eliminado}" eliminado.`);
        } else {
            console.log("Error: Índice de capítulo no válido.");
        }
    },

    mostrarCapitulos: function () {
        console.log(`Capítulos de ${this.titulo}:`, this.capitulos.join(", "));
    }
};

libro.describirLibro();
libro.mostrarCapitulos();
libro.agregarCapitulo("La peste del insomnio");
libro.eliminarCapitulo(0);
libro.mostrarCapitulos();