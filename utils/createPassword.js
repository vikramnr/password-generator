const alpha   = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const symbols = '!@#$%^&*()+='
const numbers = '1234567890'

const createPassword = (length=16, hasNumbers=true, hasSymbols=true) => {
  let chars = alpha 
   hasNumbers ? (chars+=numbers) : ''
   hasSymbols ? (chars+=symbols) : ''
   return generatedPassword(length, chars)

}

const generatedPassword = (length, chars) => {
    let password = ''
    for(let i=0; i<length; i++){
	password+=chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return password
}

module.exports = createPassword
