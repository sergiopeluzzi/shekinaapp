'use strict'

class EstudoController {
    async index({view}) {
        let data = {
            title: 'Estudos',
            subtitle: 'Lista'
        }

        return view.render('estudos.index', data)
    }

    async create() {

    }

    async show() {

    }

    async store() {
        
    }
}

module.exports = EstudoController
