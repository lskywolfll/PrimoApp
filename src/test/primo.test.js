const Primo = require("../models/primo");

test('Listado de primos a partir del numero 15', () => {
    const numero = 15;
    const primo = new Primo(numero);

    expect(primo.listaPrimos).toStrictEqual([13, 11, 7, 5, 3, 2, 1])
});

test('Listado de primos a partir del numero 2', () => {
    const numero = 2;
    const primo = new Primo(numero);

    expect(primo.listaPrimos).toStrictEqual([2, 1])
});