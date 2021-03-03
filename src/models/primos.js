const Primo = require("./primo");

class Primos {

    _listado = {};

    constructor() {
        this._listado = {}
    }

    crearTarea(numero = 0) {

        const primo = new Primo(numero);
        primo.mostrarLista();
        this._listado[primo.id] = primo;
    }
}

module.exports = Primos;