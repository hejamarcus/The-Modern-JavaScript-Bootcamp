const notes = [{
    title: 'My next trip',
    body: 'I would like to go to spain'
}, {
    title: 'Habbits to work on',
    body: 'work work'
}, {
    title: 'Office',
    body: 'New seat'
}]

const sortNotes = function () {
    notes.sort(function (a ,b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

const findNote = function (notes, noteTitle) {
    return notes.find(function (note) {
        return note.title === noteTitle
    })
}

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

sortNotes(notes)
console.log(notes)
// console.log(findNotes(notes, 'habb'))

// const note = findNote(notes, 'Offssice')
// console.log(note)

