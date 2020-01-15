// const myAge = 30
// const message = myAge >= 18 ? 'vote' : 'nope'
// console.log(message)

const myAge = 30
const showPage = () => {
    console.log('Show')
}
const showErrorPage = () => {
    console.log('Error')
}

myAge >= 21 ? showPage() : showErrorPage()


const team = ['Tyler', 'Porter']

console.log(team.length <= 4 ? `Team size: ${team.length}` : 'Too many people on your team')