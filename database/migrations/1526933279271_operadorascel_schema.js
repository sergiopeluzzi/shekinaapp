'use strict'

const Schema = use('Schema')

class OperadorascelSchema extends Schema {
  up () {
    this.create('operadorascel', (table) => {
      table.increments()
      table.string('descricao')
      table.timestamps()
    })
  }

  down () {
    this.drop('operadorascel')
  }
}

module.exports = OperadorascelSchema
