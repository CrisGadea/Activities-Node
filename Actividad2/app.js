const fs = require('fs');
const route = './tabla-5.txt';
let info = "";

for (let value = 1; value <= 10; value++) {
    info += `5 X ${value} = ${5 * value}\n`;
}

fs.writeFile(route, info, error => {
    if (error) {
        console.log("Error: " + error.message);
    } else {
        console.log("Guardado!");
    }
})