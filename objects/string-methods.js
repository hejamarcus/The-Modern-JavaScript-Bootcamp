let name = ' Marcus Andersson  '

console.log(name.length)


console.log(name.toUpperCase())

console.log(name.toLowerCase())

let password = 'abc123passord098'
console.log(password.includes('password'))


console.log(name.trim())

let isValidPassword = function(pass) {
    return (pass.length > 8 && !pass.includes('password'))
}

console.log(isValidPassword('abc123'))
console.log(isValidPassword('abc123asd'))
console.log(isValidPassword('hejpassword'))