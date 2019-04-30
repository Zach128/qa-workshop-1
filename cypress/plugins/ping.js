
// Bluebird is a promise library which is used internally by Cypress.
const Promise = require('bluebird')

// We are using bluebird to create a promise-returning copy of the child_process.exec function.
// This function will allow for tasks to call CMD commands and get their output.
const execute = Promise.promisify(require('child_process').exec)

module.exports = {

    // Here we're registering a new task called 'ping'.
    // This task merely wraps the ping utility.
    'ping': (url) => {
        return execute(`ping ${url}`)
    }
}