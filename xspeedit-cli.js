#!/usr/bin/env node

const clear = require('clear')
const chalk = require('chalk')
const figlet = require('figlet')
const inquirer = require('inquirer')
const xspeedit = require('./xspeedit')

clear()
console.log(
  chalk.blue(
    figlet.textSync('xspeedit', {horizontalLayout: 'full'})
  )
)

function askArticles (callback) {
  const questions = [
    {
      name: 'articles',
      type: 'input',
      message: 'Enter your articles:',
      validate: function (value) {
        if (value.length) {
          return true
        } else {
          return 'Please enter your articles (e.g.: 173987293874)'
        }
      }
    }
  ]

  inquirer.prompt(questions).then(callback)
}

askArticles(function () {
  try {
    const boxes = xspeedit.ship(arguments[0].articles)
    console.log('Here are your boxes : ' + chalk.green(boxes))
  } catch (error) {
    console.log(chalk.red(error.message))
  }
})
