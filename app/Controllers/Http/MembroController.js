'use strict'

const Membro = use('App/Models/Membro')
const Uf = use('App/Models/Uf')
const Operadoracel = use('App/Models/Operadoracel')
const Estadocivil = use('App/Models/Estadocivil')

class MembroController {
    constructor() {
        this.data = {
            title: 'Membros',
            subtitle: 'Lista'
        }
    }

    async index({view, request}) {

        let membros = await Membro.all()
        let ufs = await Uf.all()
        let operadorascel = await Operadoracel.all()
        let estadoscivis = await Estadocivil.all()

        this.data.membros = membros.toJSON()
        this.data.ufs = ufs.toJSON()
        this.data.operadorascel = operadorascel.toJSON()
        this.data.estadoscivis = estadoscivis.toJSON()        

        return view.render('membros.index', this.data)
    }

    async create({view}) {

        let ufs = await Uf.all()
        let operadorascel = await Operadoracel.all()
        let estadoscivis = await Estadocivil.all()

        this.data.ufs = ufs.toJSON()
        this.data.operadorascel = operadorascel.toJSON()
        this.data.estadoscivis = estadoscivis.toJSON()   

        return view.render('membros.create', this.data)
    }

    async store({request, view}) {
        
        let formdata = request.except(['_csrf'])
        
        let membro = await Membro.create(formdata)

        let membros = await Membro.all()

        this.data.membros = membros.toJSON()    

        return view.render('membros.index', this.data)

    }

    async delete({params, view}) {

        let membro = await Membro.find(params.id)

        await membro.delete()

        let membros = await Membro.all()

        this.data.membros = membros.toJSON()

        return view.render('membros.index', this.data)
    }

    async show({params, view, response}) {

        let membro = await Membro.find(params.id)    
        let ufs = await Uf.all()
        let operadorascel = await Operadoracel.all()
        let estadoscivis = await Estadocivil.all()    

        this.data.membro = membro.toJSON()
        this.data.ufs = ufs.toJSON()
        this.data.operadorascel = operadorascel.toJSON()
        this.data.estadoscivis = estadoscivis.toJSON()  
        this.data.subtitle = 'Visualização'

        return view.render('membros.show', this.data)
    }

    async update({params, request, view, response}) {
        
        let formdata = request.except(['_csrf'])
        
        let membro = await Membro.find(params.id)
        await membro.fill(formdata)
        membro.id = params.id
        await membro.save()
        

        let membros = await Membro.all()

        this.data.membros = membros.toJSON()    

        return view.render('membros.index', this.data)
    }
}

module.exports = MembroController
