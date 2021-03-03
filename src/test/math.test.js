const {
    ListaPrimos,
    esPrimo
} = require('../utils/math/primo');


test('Listar Primos a partir del numero 15 ', () => {

    const numero = 15;
    const listado = ListaPrimos(numero);

    expect(listado).toStrictEqual([13, 11, 7, 5, 3, 2, 1])

})

test('Validar si es primo el numero 1 ', () => {
    const validacion = esPrimo(1);

    expect(validacion).toBe(false);
})

