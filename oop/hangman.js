const Hangman = function (word, guesses) {
    this.word = word.toLowerCase().split('')
    this.guesses = guesses
    this.guessedLetters = ['h', 'a']
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter)) {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    });

    return puzzle
}

const game1 = new Hangman('hejsan', 6)
console.log(game1.getPuzzle())

const game2 = new Hangman('apaapa', 4)
console.log(game2.getPuzzle())