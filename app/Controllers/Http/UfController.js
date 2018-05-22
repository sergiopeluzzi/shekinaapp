'use strict'

const Uf = use('App/Models/Uf')

class UfController {
    async index({view, response}) {
        let data = {
            title: 'Unidades Federativas',
            subtitle: 'Lista'
        }

        let ufs = await Uf.all()
        return view.render('uf.index', { 
            ufs: ufs.toJSON()
        })
    }

    async create({view}) {
        let data = {
            title: 'Unidades Federativas',
            subtitle: 'Novo'
        }

        return view.render('uf.create', data)
    }

    async delete({params, view}) {
        let uf = await Uf.find(params.id)

        await uf.delete()

        let ufs = await Uf.all()
        return view.render('uf.index', {
            title: 'Unidades Federativas', 
            ufs: ufs.toJSON()
        })
    }

    async store({request, view, response}) {
        let formdata = request.only(['sigla', 'descricao'])
        let uf = await Uf.create(formdata)

        let ufs = await Uf.all()
        return view.render('uf.index', {
            title: 'Unidades Federativas',
            ufs: ufs.toJSON()
        })
    }
}

module.exports = UfController
