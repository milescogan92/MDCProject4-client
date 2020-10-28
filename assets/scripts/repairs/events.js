'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onIndexRepairs = function (event) {
  event.preventDefault()
  api.indexRepairs()
    .then(ui.onIndexRepairsSuccess)
    .catch(ui.onIndexRepairsFailure)
}

const onCreateRepair = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.createRepair(data)
    .then(ui.onCreateRepairSuccess)
    .catch(ui.onCreateRepairFailure)
}

const onUpdateRepair = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.updateRepair(data)
    .then(ui.onUpdateRepairSuccess)
    .catch(ui.onUpdateRepairFailure)
}

const onDeleteRepair = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  const repairId = data.repair.id // maybe plural, data.repairs.id?
  api.deleteRepair(repairId)
    .then(ui.onDeleteRepairSuccess)
    .catch(ui.onDeleteRepairFailure)
}

module.exports = {
  onIndexRepairs: onIndexRepairs,
  onCreateRepair: onCreateRepair,
  onUpdateRepair: onUpdateRepair,
  onDeleteRepair: onDeleteRepair
}
