'use strict'

const Model = use('Model')

class Estadocivil extends Model {
    static get table() {
        return 'estadocivil'
    }

    static get primaryKey() {
        return 'id'
    }
}

module.exports = Estadocivil
