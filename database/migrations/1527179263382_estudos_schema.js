'use strict'

const Schema = use('Schema')

class EstudosSchema extends Schema {
  up () {
    this.create('estudos', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('estudos')
  }
}

module.exports = EstudosSchema
