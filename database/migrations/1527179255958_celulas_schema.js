'use strict'

const Schema = use('Schema')

class CelulasSchema extends Schema {
  up () {
    this.create('celulas', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('celulas')
  }
}

module.exports = CelulasSchema
