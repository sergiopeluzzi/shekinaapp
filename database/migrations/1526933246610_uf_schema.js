'use strict'

const Schema = use('Schema')

class UfSchema extends Schema {
  up () {
    this.create('uf', (table) => {
      table.increments()
      table.string('sigla')
      table.string('descricao')
      table.timestamps()
    })
  }

  down () {
    this.drop('uf')
  }
}

module.exports = UfSchema
