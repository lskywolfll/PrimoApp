
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


// for (let index = 15; index > 0; index--) {

//     const primo = esPrimo(index);

//     if (primo) {
//         console.log(`Numero Primo: ${index}`)
//     }

// }

module.exports = {
    esPrimo
}