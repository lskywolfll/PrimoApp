const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: "list",
        name: "opcion",
        message: "¿Qué desea hacer?",
        choices: [
            {
                value: "1",
                name: "1. Buscar Primos"
            },
            {
                value: "2",
                name: "2. Historial"
            },
            {
                value: "0",
                name: "0. Salir"
            }
        ]
    }
]

const menu = async () => {

    console.clear();
    console.log('============================'.green);
    console.log("Seleccione una opción".green);
    console.log('============================\n'.green);

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;
}

const pausa = async () => {

    const question = [
        {
            type: "input",
            name: "enter",
            message: `Presione ${"Enter".green} para continuar`
        }
    ]

    console.log("\n")
    await inquirer.prompt(question)
}

const leerInput = async (message) => {
    const question = [
        {
            type: "input",
            name: "numero",
            message,
            validate(value) {

                if (isNaN(value)) {
                    return 'Por favor ingrese un numero'
                }

                return true
            }
        }
    ]

    const { numero } = await inquirer.prompt(question);

    return numero
}

module.exports = {
    menu,
    pausa,
    leerInput
}