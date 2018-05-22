'use strict'

const Schema = use('Schema')

class EstadocivilSchema extends Schema {
  up () {
    this.create('estadocivil', (table) => {
      table.increments()
      table.string('descricao')
      table.timestamps()
    })
  }

  down () {
    this.drop('estadocivil')
  }
}

module.exports = EstadocivilSchema
