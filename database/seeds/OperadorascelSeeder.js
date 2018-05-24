'use strict'

/*
|--------------------------------------------------------------------------
| OperadorascelSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const Database = use('Database')

class OperadorascelSeeder {
  async run () {
    const op = await Database.from('operadorascel').insert([
      { descricao: 'Oi' },
      { descricao: 'Claro' },
      { descricao: 'Vico' },
      { descricao: 'Tim' }
    ])
  }
}

module.exports = OperadorascelSeeder
