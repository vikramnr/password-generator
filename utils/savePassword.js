const fs    = require('fs')
const path  = require('path')
const os    = require('os')
const chalk = require('chalk')

const savePassword = (generatedPassword) => {
	fs.open(path.join(__dirname,"../",'passwords.txt'),'a','666', (e,id) => {
		fs.write(id,generatedPassword+os.EOL,null,'utf-8', () => {
			fs.close(id,() => {
				console.log(chalk.bgYellow('Password saved to file password.txt'))

			})
		})
	})		

}

module.exports = savePassword
