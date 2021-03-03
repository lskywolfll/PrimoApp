
require("colors");
const { mostrarMenu, pausa } = require("./utils/consola/mensajes");

const main = async () => {

    let opt = "";

    do {

        opt = await mostrarMenu();

        await pausa();

    } while (opt !== '0');

    // pausa();
}

main()