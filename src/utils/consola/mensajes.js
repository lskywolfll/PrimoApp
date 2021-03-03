require("colors");


const mostrarMenu = () => {

    return new Promise((resolve, reject) => {

        console.clear();
        console.log('============================'.green);
        console.log("Seleccione una opción".green);
        console.log('============================\n'.green);

        console.log(`${'1'.green}. ${"Buscar Primos".blue}`)
        console.log(`${'2'.green}. ${"Historial".yellow}`)
        console.log(`${'2'.green}. ${"Salir".red}\n`)

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question("Seleccione una opción: ", opcion => {
            resolve(opcion);
            readline.close();
        });
    })
}

const pausa = () => {
    return new Promise((resolve, reject) => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(`Presione ${"ENTER".green}`, opcion => {
            resolve(opcion);
            readline.close();
        });
    })
}

module.exports = {
    mostrarMenu,
    pausa
}