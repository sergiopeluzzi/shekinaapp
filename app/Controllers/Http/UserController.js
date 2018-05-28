'use strict'

const User = use('App/Models/User')

class UserController {
    constructor() {
        this.data = {
            title: 'Usuários',
            subtitle: 'Lista'
        }
    }

    async login({request, auth, response}) {
        const { username, password } = request.except(['_csrf'])

        await auth.attempt(username, password)

        return response.redirect('back')
    }

    async logout({response, auth}) {
        await auth.logout()
    
        return response.redirect('/admin')
      }

    async index({view}) {

        let users = await User.all()

        this.data.users = users.toJSON()

        return view.render('usuarios.index', this.data)

    }

    async create({view}) {

        this.data.subtitle = 'Novo'

        return view.render('usuarios.create', this.data)

    }

    async store({request, view}) {
        let formdata = request.except(['_csrf', 'confirm_password'])

        let user = await User.create(formdata)

        let users = await User.all()

        this.data.users = users.toJSON()

        return view.render('usuarios.index', this.data)
    }

    async delete({params, view}) {

        let user = await User.find(params.id)

        await user.delete()

        let users = await User.all()

        this.data.users = users.toJSON()

        return view.render('usuarios.index', this.data)

    }

}

module.exports = UserController
