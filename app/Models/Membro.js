'use strict'

const Model = use('Model')

class Membro extends Model {
    static get table() {
        return 'membros'
    }

    static get primaryKey() {
        return 'id'
    }

    estadocivil() {
        return this.belongsTo('App/Models/Estadocivl')
    }

    uf() {
        return this.belongsTo('App/Models/Uf')
    }

    operadoracel() {
        return this.belongsTo('App/Models/Operadoracel')
    }
}

module.exports = Membro
