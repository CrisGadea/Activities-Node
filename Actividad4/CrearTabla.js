import fs from 'fs';

const route = './tabla.txt';
let info = "";

const escribir = (base) => {
    crearDatos(base);
    fs.writeFile(route, info, error => {
    if (error) {
        console.log("Error: " + error.message);
    } else {
        console.log("Guardado!");
    }
    })
}

const crearDatos = (base) => {
    for (let value = 1; value <= 10; value++) {
        info += `${base} X ${value} = ${base * value}\n`;
    }
}

export default escribir;