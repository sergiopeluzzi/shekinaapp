'use strict'

const Operadoracel = use('App/Models/Operadoracel')

class OperadoracelController {
    async index({view, response}) {
        let data = {
            title: 'Operadoras de Celular',
            subtitle: 'Lista'
        }

        let ufs = await Operadoracel.all()
        return view.render('operadoracel.index', { 
            ufs: ufs.toJSON()
        })
    }

    async create({view}) {
        let data = {
            title: 'Operadoras de Celular',
            subtitle: 'Novo'
        }

        return view.render('operadoracel.create', data)
    }

    async delete({params, view}) {
        let uf = await Operadoracel.find(params.id)

        await uf.delete()

        let ufs = await Operadoracel.all()
        return view.render('operadorascel.index', {
            title: 'Operadoras de Celular',
            ufs: ufs.toJSON()
        })
    }

    async store({request, view, response}) {
        let formdata = request.only(['descricao'])
        let uf = await Operadoracel.create(formdata)

        let operadorascel = await Operadoracel.all()
        return view.render('operadoracel.index', { 
            title: 'Operadoras de Celular',
            operadorascel: operadorascel.toJSON()
        })
    }
}

module.exports = OperadoracelController
