'use strict'

const Operadoracel = use('App/Models/Operadoracel')

class OperadoracelController {
    constructor() {
        this.data = {
            title: 'Operadoras de Celular',
            subtitle: 'Lista'
        }
    }

    async index({view, response}) {
        
        let operadorascel = await Operadoracel.all()

        this.data.operadorascel = operadorascel.toJSON()
        
        return view.render('operadoracel.index',  this.data)
    }

    async create({view}) {

        this.data.subtitle = 'Novo'

        return view.render('operadoracel.create', this.data)
    }

    async delete({params, view}) {

        let operadoracel = await Operadoracel.find(params.id)

        await operadoracel.delete()

        let operadorascel = await Operadoracel.all()

        this.data.operadorascel = operadorascel.toJSON()

        return view.render('operadoracel.index', this.data)
    }

    async store({request, view, response}) {

        let formdata = request.only(['descricao'])
        
        let operadoracel = await Operadoracel.create(formdata)

        let operadorascel = await Operadoracel.all()

        this.data.operadorascel = operadorascel.toJSON()

        return view.render('operadoracel.index', this.data)
    }
}

module.exports = OperadoracelController
