'use strict'

const Model = use('Model')

class Operadoracel extends Model {
    static get table() {
        return 'operadorascel'
    }

    static get primaryKey() {
        return 'id'
    }
}

module.exports = Operadoracel
