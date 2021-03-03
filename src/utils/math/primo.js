
function esPrimo(numero) {

    let divisores = 0;

    for (let index = numero; index > 0; index--) {
        const residuo = numero % index;

        if (residuo === 0) {
            divisores++;
        }

    }

    const validacion = (divisores === 2) ? true : false;

    return validacion
}


function ListaPrimos(numero) {

    let listado = [];

    for (let index = numero; index > 0; index--) {

        const primo = esPrimo(index);

        if (primo || index === 1) {
            listado.push(index);
        }
    }

    return listado
}

module.exports = {
    esPrimo,
    ListaPrimos
}