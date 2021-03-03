const { v4: uudiv4 } = require('uuid');
const { ListaPrimos } = require('../utils/math/primo');

class Primo {

    id = "";
    numero = 0;
    listaPrimos = [];

    constructor(numero) {
        this.id = uudiv4();
        this.numero = numero;
        this.listaPrimos = ListaPrimos(this.numero);
    }


    mostrarLista() {
        console.log("Listado de numeros primos encontrados:", this.listaPrimos);
    }
}

module.exports = Primo;