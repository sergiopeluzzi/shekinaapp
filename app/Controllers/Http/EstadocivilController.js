'use strict'

const Estadocivil = use('App/Models/Estadocivil')

class EstadocivilController {
    constructor() {
        this.data = {
            title: 'Estado Civil',
            subtitle: 'Lista'
        }
    }

    async index({view, response}) {
        let estadoscivis = await Estadocivil.all()
        
        this.data.estadoscivis = estadoscivis.toJSON()

        return view.render('estadocivil.index',  this.data)
    }

    async create({view}) {

        this.data.subtitle = 'Novo'

        return view.render('estadocivil.create', this.data)
    }

    async delete({params, view}) {

        let estadocivil = await Estadocivil.find(params.id)

        await estadocivil.delete()

        let estadoscivis = await Estadocivil.all()

        this.data.estadoscivis = estadoscivis.toJSON()

        return view.render('estadocivil.index', this.data)
    }

    async store({request, view, response}) {

        let formdata = request.only(['descricao'])
        
        let estadocivil = await Estadocivil.create(formdata)

        let estadoscivis = await Estadocivil.all()

        this.data.estadoscivis = estadoscivis.toJSON()

        return view.render('estadocivil.index', this.data)
    }
}

module.exports = EstadocivilController
