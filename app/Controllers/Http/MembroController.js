'use strict'

const Membro = use('App/Models/Membro')

class MembroController {

    async index({view, request}) {
        let data = {
            title: 'Membros',
            subtitle: 'Lista'
        }

        data.membros = await Membro.all()

        return view.render('membros.index', data)
    }

    async create({view}) {
        let data = {
            title: 'Membros',
            subtitle: 'Novo'
        }

        return view.render('membros.create', data)
    }

    async store({request}) {
        let formdata = request.all()
        let membro = new Membro()

        await membro.create(formdata)

        return Response.redirect('back')

    }

    async delete() {
        
    }
}

module.exports = MembroController
