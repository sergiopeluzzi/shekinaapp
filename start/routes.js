'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')


// Grupo de rotas com o prefixo admin
Route.group(() => {

    // Rotas do login
    Route.get('/', 'DashboardController.index').as('home')

    // Rotas dos membros
    Route.get('membros', 'MembroController.index').as('membros.index')
    Route.get('membros/create', 'MembroController.create').as('membros.create')
    Route.get('membros/:id', 'MembroController.show').as('membros.show')
    Route.post('membros', 'MembroController.store').as('membros.store')
    Route.post('membros/:id', 'MembroController.update').as('membros.update')
    Route.get('membros-delete/:id', 'MembroController.delete').as('membros.delete')

    // Rotas das celulas
    Route.get('celulas', 'CelulaController.index').as('celulas.index')

    // Rotas dos estudos
    Route.get('estudos', 'EstudoController.index').as('estudos.index')

    // Rotas da UF
    Route.get('uf', 'UfController.index').as('uf.index')
    Route.get('uf/create', 'UfController.create').as('uf.create')
    Route.get('uf/:id', 'UfController.show').as('uf.show')
    Route.post('uf', 'UfController.store').as('uf.store')
    Route.get('uf-delete/:id', 'UfController.delete').as('uf.delete')

    // Rotas da Estado Civil
    Route.get('estadocivil', 'EstadocivilController.index').as('estadocivil.index')
    Route.get('estadocivil/create', 'EstadocivilController.create').as('estadocivil.create')
    Route.get('estadocivil/:id', 'EstadocivilController.show').as('estadocivil.show')
    Route.post('estadocivil', 'EstadocivilController.store').as('estadocivil.store')
    Route.get('estadocivil-delete/:id', 'EstadocivilController.delete').as('estadocivil.delete')

    // Rotas da Operadora Cel
    Route.get('operadoracel', 'OperadoracelController.index').as('operadoracel.index')
    Route.get('operadoracel/create', 'OperadoracelController.create').as('operadoracel.create')
    Route.get('operadoracel/:id', 'OperadoracelController.show').as('operadoracel.show')
    Route.post('operadoracel', 'OperadoracelController.store').as('operadoracel.store')
    Route.get('operadoracel-delete/:id', 'OperadoracelController.delete').as('operadoracel.delete')

}).prefix('admin')
