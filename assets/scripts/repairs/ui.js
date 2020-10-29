'use strict'

const store = require('../store.js')

const onIndexRepairsSuccess = function (response) {
  $('#message-area').text('Repairs Index successful, see repairs below!')
  // store.user = response.user
  const index = response.repairs
  let sendhtml = '<ol>'
  index.forEach(data => {
    sendhtml += `<li id=${data._id}>
    Date: ${data.date} \n
    Type: ${data.type} \n
    Price: ${data.price} \n
    Mileage: ${data.mileage} \n
    ID: ${data._id} </li>`
    return sendhtml
  })
  sendhtml += '</ol>'
  $('#repairs-index').html(sendhtml)
  $('#repairs-index').show()
}

const onIndexRepairsFailure = function () {
  $('#message-area').text('Repairs Index failed, try again!')
}

const onCreateRepairSuccess = function () {
  $('#message-area').text('New Repair created successfully!')
  $('#create-repair-form').trigger('reset')
}

const onCreateRepairFailure = function () {
  $('#message-area').text('New Repair NOT created, try again.')
}

const onUpdateRepairSuccess = function () {
  $('#message-area').text('Repair updated successfully!')
  $('#update-repair-form').trigger('reset')
}

const onUpdateRepairFailure = function () {
  $('#message-area').text('Repair update failed, try again.')
}

const onDeleteRepairSuccess = function () {
  $('#message-area').text('Repair deleted successfully.')
  $('#delete-repair-form').trigger('reset')
}

const onDeleteRepairFailure = function () {
  $('#message-area').text('Repair NOT deleted, try deletion again.')
}

module.exports = {
  onIndexRepairsSuccess: onIndexRepairsSuccess,
  onIndexRepairsFailure: onIndexRepairsFailure,
  onCreateRepairSuccess: onCreateRepairSuccess,
  onCreateRepairFailure: onCreateRepairFailure,
  onUpdateRepairSuccess: onUpdateRepairSuccess,
  onUpdateRepairFailure: onUpdateRepairFailure,
  onDeleteRepairSuccess: onDeleteRepairSuccess,
  onDeleteRepairFailure: onDeleteRepairFailure

}
