'use strict'

const Schema = use('Schema')

class MembrosSchema extends Schema {
  up () {
    this.create('membros', (table) => {
      table.increments()
      table.string('nome').notNullable()
      table.string('apelido')
      table.date('dtnascimento')
      table.date('dtbatismo')
      table.date('dtconversao')
      table.string('estadocivil')
      table.string('cpf')
      table.string('rg')
      table.string('fonecel')
      table.string('operadoracel')
      table.string('foneres')
      table.string('fonecom')
      table.string('email')
      table.string('endereco')
      table.integer('endnum')
      table.string('bairro')
      table.string('cep')
      table.string('cidade')
      table.string('uf')
      table.integer('ativo').defaultTo(1)
      table.integer('lider').defaultTo(0)
      table.integer('supervisor').defaultTo(0)
      table.integer('coordenador').defaultTo(0)
      table.integer('pastor').defaultTo(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('membros')
  }
}

module.exports = MembrosSchema
