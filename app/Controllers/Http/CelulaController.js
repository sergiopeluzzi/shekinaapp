'use strict'

const Celula = use('App/Models/Celula')
const Membro = use('App/Models/Membro')

class CelulaController {

    constructor() {
        this.data = {
            title: 'Células',
            subtitle: 'Lista'
        } 
    }

    async index({view}) {
        let celulas = await Celula.all()

        this.data.celulas = celulas.toJSON()

        return view.render('celulas.index', this.data)
    }

    async create({view}) {

        let membros = await Membro.query().where('lider', 1).fetch()

        this.data.subtitle = 'Novo'
        this.data.membros = membros.toJSON()

        return view.render('celulas.create', this.data)
    }

    async store() {

    }

    async show() {

    }


}

module.exports = CelulaController
