'use strict'

const Model = use('Model')

class Membro extends Model {
    static get table() {
        return 'membros'
    }

    static get primaryKey() {
        return 'id'
    }
}

module.exports = Membro
