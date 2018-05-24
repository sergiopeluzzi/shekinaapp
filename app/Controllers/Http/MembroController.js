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

    async show({params, view}) {

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

    async update({params, request, view}) {
        
        let formdata = request.except(['_csrf'])
        
        let membro = await Membro.find(params.id)
        let lider = membro.lider
        let coord = membro.coordenador
        let superv = membro.supervisor
        let pastor = membro.pastor

        await membro.fill(formdata)
        membro.id = params.id

        if(formdata.lider != '') {
            membro.lider = formdata.lider    
        } else {
            membro.lider = lider    
        }
        
        if(formdata.supervisor != '') {
            membro.supervisor = formdata.supervisor
        } else {
            membro.supervisor = superv
        }
        
        if(formdata.coordenador != '') {
            membro.coordenador = formdata.coordenador
        } else {
            membro.coordenador = coord
        }
        
        if(formdata.pastor != '') {
            membro.pastor = formdata.pastor
        } else {
            membro.pastor = pastor
        }

        await membro.save()

        let membros = await Membro.all()

        this.data.membros = membros.toJSON()    

        return view.render('membros.index', this.data)
    }
}

module.exports = MembroController
