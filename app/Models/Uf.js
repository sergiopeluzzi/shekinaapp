'use strict'

const Model = use('Model')

class Uf extends Model {
    static get table() {
        return 'uf'
    }

    static get primaryKey() {
        return 'id'
    }
}

module.exports = Uf
