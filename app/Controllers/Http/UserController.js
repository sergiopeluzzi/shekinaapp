'use strict'

class UserController {

    async login({request, auth, response}) {
        const { username, password } = request.all()

        await auth.remember(true).attempt(username, password)

        return response.redirect('back')
    }

}

module.exports = UserController
