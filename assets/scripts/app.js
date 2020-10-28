'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  const authEvents = require('./auth/events.js')
  const repairEvents = require('./repairs/events.js')

  $(() => {
    // $('#sign-out-button').hide()
    // $('#change-password-form').hide()
    // $('#index-repairs-button').hide()
    // $('#create-repair-form').hide()
    // $('#update-repair-form').hide()
    // $('#delete-repair-form').hide()
    // $('#show-repair-form').hide()
    $('#sign-up-form').on('submit', authEvents.onSignUp)
    $('#sign-in-form').on('submit', authEvents.onSignIn)
    $('#change-password-form').on('submit', authEvents.onChangePassword)
    $('#sign-out-button').on('click', authEvents.onSignOut)
    $('#index-repairs-button').on('click', repairEvents.onIndexRepairs)
    $('#create-repair-form').on('submit', repairEvents.onCreateRepair)
    $('#update-repair-form').on('submit', repairEvents.onUpdateRepair)
    $('#delete-repair-form').on('submit', repairEvents.onDeleteRepair)
    $('#show-repair-form').on('submit', repairEvents.onShowRepair)
  })
})
