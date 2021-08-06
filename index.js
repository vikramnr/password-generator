#!/usr/bin/env node 
const program  = require('commander')
const chalk = require('chalk')
const clipboardy = require('clipboardy')

const createPassword = require('./utils/createPassword')
const savePassword = require('./utils/savePassword')
const log =  console.log

// setting up command line 
program.version('1.0.0').description('Simple Password Generator')

// setting up command line options
program
	.option('-l, --length <number>','length of the password',16)
	.option('-s, --save', 'save password to a file')
	.option('-nn --no-numbers','remove numbers')
	.option('-ns, --no-symbols','remove symbols')
	.parse()

// console.log(program.opts())

const {length, save, numbers, symbols} = program.opts()

// Get generated password
const generatedPassword = createPassword(length, numbers, symbols)

// Save to file
if(save) {
    savePassword(generatedPassword)
}

// Copy to clipboard
clipboardy.writeSync(generatedPassword)

// Output generateed password
log(chalk.blueBright('Generated Password: ')+generatedPassword)
log(chalk.yellowBright('Password copiyed to clipboardy'))


