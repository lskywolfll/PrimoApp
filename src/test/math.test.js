const {
    ListaPrimos,
    esPrimo
} = require('../utils/math/primo');


test('Listar Primos a partir del numero 15 ', () => {

})

test('Validar si es primo el numero 1 ', () => {
    const validacion = esPrimo(1);

    expect(validacion).toBe(false);
})

