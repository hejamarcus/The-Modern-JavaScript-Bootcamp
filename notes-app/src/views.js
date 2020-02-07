import moment from 'moment'
import { getFilters } from './filters'
import { sortNotes, getNotes } from './notes'

const generateNoteDOM = (note) => {
    const noteEl = document.createElement('a')
    const textEl = document.createElement('p')
    const statusEl = document.createElement('p')

    if (note.title.length > 0){
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unnamed note'
    }
    textEl.classList.add('list-item__title')
    noteEl.appendChild(textEl)
    noteEl.setAttribute('href', `/edit.html#${note.id}`)
    noteEl.classList.add('list-item')
    statusEl.textContent = generateLastEdited(note.updatedAt)
    statusEl.classList.add('list-item__subtitle')
    noteEl.appendChild(statusEl)

    return noteEl
}

// Render application notes
const renderNotes = () => {
    const notesEl = document.querySelector('#notes')
    const filters = getFilters()
    const notes = sortNotes(filters.sortBy)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    notesEl.innerHTML = ''

    if (filteredNotes.length > 0) {
        filteredNotes.forEach((note) => {
            const noteEl = generateNoteDOM(note)
            notesEl.appendChild(noteEl)
        })
    } else {
        const emtyMessage = document.createElement('p')
        emtyMessage.textContent = 'No notes to show'
        emtyMessage.classList.add('empty-message')
        notesEl.appendChild(emtyMessage)
    }
}

const initializeEditPage = (noteId) => {
    const titleElement = document.querySelector('#note-title')
    const bodyElement = document.querySelector('#note-body')
    const dateElement = document.querySelector('#last-edited')  
    const notes = getNotes()
    const note = notes.find((note) => note.id === noteId)
    
    if (!note){
        location.assign('/index.html')
    }
    
    titleElement.value = note.title
    bodyElement.value = note.body
    dateElement.textContent = generateLastEdited(note.updatedAt)
}

const generateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`

export { generateLastEdited, renderNotes, generateNoteDOM, initializeEditPage }