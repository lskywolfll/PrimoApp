
require("colors");
const Primos = require("./models/primos");
const {
    menu,
    pausa,
    leerInput
} = require("./utils/consola/inquirer");

const main = async () => {

    let opt = "";

    const primos = new Primos();

    do {
        opt = await menu();

        switch (opt) {
            case "1":
                // Buscar Primos
                const numero = await leerInput("Numero para buscar primos: ");
                primos.crearTarea(numero);

                break;
            case "2":
                console.log(primos._listado)
                break;
            default:
                break;
        }

        if (opt !== "0") await pausa();

    } while (opt !== '0');

}

main()