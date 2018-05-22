'use strict'

class CelulaController {

    async index({view}) {
        let data = {
            title: 'Células',
            subtitle: 'Lista'
        }

        return view.render('celulas.index', data)
    }
}

module.exports = CelulaController
