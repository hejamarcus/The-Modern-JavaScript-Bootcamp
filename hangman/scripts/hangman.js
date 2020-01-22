class Hangman {
    constructor(word, guesses) {
        this.word = word.toLowerCase().split('')
        this.guesses = guesses
        this.guessedLetters = []
        this.status = 'playing'
    }
    get puzzle() {
        let puzzle = ''
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            }
            else {
                puzzle += '*'
            }
        })
        return puzzle
    }
    makeGuess(letter) {
        if (this.status !== 'playing') {
            return
        }
        letter = letter.toLowerCase()
        if (!this.guessedLetters.includes(letter)) {
            this.guessedLetters.push(letter)
            if (!this.word.includes(letter)) {
                this.guesses -= 1
            }
        }
        this.recalcStatus()
    }
    recalcStatus() {
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')
        if (this.guesses === 0) {
            this.status = 'failed'
        }
        else if (finished) {
            this.status = 'finished'
        }
        else {
            this.status = 'playing'
        }
    }
    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.guesses}`
        }
        else if (this.status === 'finished') {
            return 'Great work! You guessed the word.'
        }
        else {
            return `Nice try! The word was "${this.word.join('')}".`
        }
    }
}