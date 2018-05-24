'use strict'

const Membro = use('App/Models/Membro')
const Celula = use('App/Models/Celula')
const Estudo = use('App/Models/Estudo')

class DashboardController {

    async index({view}) {
        
        let qntMembros = await Membro.getCount()
        let qntCelulas = await Celula.getCount()
        let qntEstudos = await Estudo.getCount()

        return view.render('dashboard', {
            title: 'Dashboard',
            subtitle: 'Painel de Controle',
            qntMembros: qntMembros,
            qntCelulas: qntCelulas,
            qntEstudos: qntEstudos
        })
    }

}

module.exports = DashboardController
