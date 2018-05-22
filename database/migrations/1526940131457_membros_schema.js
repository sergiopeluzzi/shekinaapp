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
      table.integer('estadocivil_id').unsigned()
      table.string('cpf')
      table.string('rg')
      table.string('fonecel')
      table.integer('operadoracel_id').unsigned()
      table.string('foneres')
      table.string('fonecom')
      table.string('email')
      table.string('endereco')
      table.integer('endnum')
      table.string('bairro')
      table.string('cep')
      table.string('cidade')
      table.integer('uf_id').unsigned()
      table.integer('ativo').defaultTo(1)
      table.timestamps()

      table.foreign('estadocivil_id').references('id').inTable('estadocivil')
      table.foreign('operadoracel_id').references('id').inTable('operadoracel')
      table.foreign('uf_id').references('id').inTable('uf')
    })
  }

  down () {
    this.drop('membros')
  }
}

module.exports = MembrosSchema
