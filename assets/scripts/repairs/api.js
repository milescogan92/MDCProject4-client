'use strict'

const config = require('../config.js')
const store = require('../store.js')

const indexRepairs = function (data) {
  return $.ajax({
    url: config.apiUrl + '/repairs',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const showRepair = function (repairId) {
  return $.ajax({
    url: config.apiUrl + '/repairs/' + repairId,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const createRepair = function (data) {
  return $.ajax({
    url: config.apiUrl + '/repairs',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const updateRepair = function (data) {
  return $.ajax({
    url: config.apiUrl + '/repairs/' + data.repair.id, // singular or plural? for repair.id
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      repair: {
        date: data.repair.date,
        type: data.repair.type,
        price: data.repair.price
      }
    }
  })
}

const deleteRepair = function (repairId) {
  return $.ajax({
    url: config.apiUrl + '/repairs/' + repairId,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  indexRepairs: indexRepairs,
  showRepair: showRepair,
  createRepair: createRepair,
  updateRepair: updateRepair,
  deleteRepair: deleteRepair
}
