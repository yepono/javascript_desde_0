// Reto

let frutas = ["melon", "manzana", "fresa", "jicama", "sandria", "melon", "pera", "fresa", "fresa", "fresa", "jicama"];

let cantidad = {};

let cantidad_frutas = 0;

for (let index = 0; index < frutas.length; index++) {

    let fruta = frutas[index];
    if (cantidad[fruta]) {
        cantidad[fruta]++;
    } else {
        cantidad[fruta] = 1;
    }
}

console.log("Conteo con ciclo for:", cantidad);

/* let j = 0;
while (j < frutas.length) {
    let fruta = frutas[j];

    if (cantidad[fruta]) {
        cantidad[fruta]++;
    } else {
        cantidad[fruta] = 1;
    }    // Usamos un operador ternario para una sintaxis más limpia
    conteoWhile[fruta] = (conteoWhile[fruta] || 0) + 1;

    j++;
} */