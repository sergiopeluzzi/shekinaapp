'use strict'

/*
|--------------------------------------------------------------------------
| UfSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const Database = use('Database')

class UfSeeder {
  async run () {
    const uf = await Database.from('uf').insert([
      { sigla: 'AC', descricao: 'Acre' },
      { sigla: 'AL', descricao: 'Alagoas' },
      { sigla: 'AP', descricao: 'Amapá' },
      { sigla: 'AM', descricao: 'Amazonas' },
      { sigla: 'BA', descricao: 'Bahia' },
      { sigla: 'CE', descricao: 'Ceará' },
      { sigla: 'DF', descricao: 'Distrito Federal' },
      { sigla: 'ES', descricao: 'Espírito Santo' },
      { sigla: 'GO', descricao: 'Goiás' },
      { sigla: 'MA', descricao: 'Maranhão' },
      { sigla: 'MT', descricao: 'Mato Grosso' },
      { sigla: 'MS', descricao: 'Mato Grosso do Sul' },
      { sigla: 'MG', descricao: 'Minas Gerais' },
      { sigla: 'PA', descricao: 'Pará' },
      { sigla: 'PB', descricao: 'Paraíba' },
      { sigla: 'PR', descricao: 'Paraná' },
      { sigla: 'PE', descricao: 'Pernambuco' },
      { sigla: 'PI', descricao: 'Piauí' },
      { sigla: 'RJ', descricao: 'Rio de Janeiro' },
      { sigla: 'RN', descricao: 'Rio Grande do Norte' },
      { sigla: 'RS', descricao: 'Rio Grande do Sul' },
      { sigla: 'RO', descricao: 'Rondônia' },
      { sigla: 'RR', descricao: 'Roraima' },
      { sigla: 'SC', descricao: 'Santa Catarina' },
      { sigla: 'SP', descricao: 'São Paulo' },
      { sigla: 'SE', descricao: 'Sergipe' },
      { sigla: 'TO', descricao: 'Tocantins' }
    ])
  }
}

module.exports = UfSeeder
