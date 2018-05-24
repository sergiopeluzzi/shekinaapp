'use strict'

/*
|--------------------------------------------------------------------------
| EstadocivilSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const Database = use('Database')

class EstadocivilSeeder {
  async run () {
    const ec = await Database.from('estadocivil').insert([
      { descricao: 'Solteiro(a)' },
      { descricao: 'Casado(a)' },
      { descricao: 'Divorciado(a)' },
      { descricao: 'Viúvo(a)' }
    ])
  }
}

module.exports = EstadocivilSeeder
