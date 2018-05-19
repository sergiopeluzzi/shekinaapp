'use strict'

class UserController {

    async login({view}) {
        return view.render('login.login')
    }


}

module.exports = UserController
