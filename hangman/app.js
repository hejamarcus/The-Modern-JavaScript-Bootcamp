const puzzleElement = document.querySelector('#puzzle')
const guessesElement = document.querySelector('#remaining')

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    });

    return puzzle
}

Hangman.prototype.makeGuess = function (letter) {
    letter = letter.toLowerCase()
    if (!this.guessedLetters.includes(letter)){
        this.guessedLetters.push(letter)

        if(!this.word.includes(letter)) {
            this.guesses -= 1
        }
    }
}

const game1 = new Hangman('hejsan', 6)
puzzleElement.textContent = game1.getPuzzle()
guessesElement.textContent = game1.guesses


window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleElement.textContent = game1.getPuzzle()
    guessesElement.textContent = game1.guesses
})