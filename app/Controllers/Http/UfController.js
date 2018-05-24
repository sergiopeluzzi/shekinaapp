'use strict'

const Uf = use('App/Models/Uf')

class UfController {
    constructor() {
        this.data = {
            title: 'Unidades Federativas',
            subtitle: 'Lista'
        }
    }

    async index({view, response}) {
        
        let ufs = await Uf.all()

        this.data.ufs = ufs.toJSON()

        return view.render('uf.index', this.data)
    }

    async create({view}) {

        this.data.subtitle = 'Novo'

        return view.render('uf.create', this.data)
    }

    async delete({params, view}) {
        
        let uf = await Uf.find(params.id)

        await uf.delete()

        let ufs = await Uf.all()

        this.data.ufs = ufs.toJSON()

        return view.render('uf.index', this.data)
    }

    async store({request, view, response}) {

        let formdata = request.only(['sigla', 'descricao'])

        let uf = await Uf.create(formdata)

        let ufs = await Uf.all()

        this.data.ufs = ufs.toJSON()

        return view.render('uf.index', this.data)
    }
}

module.exports = UfController
