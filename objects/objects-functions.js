let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}



let = getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

console.log(getSummary(myBook).pageCountSummary)
getSummary(otherBook)


let temps = function (fahrTemp) {
    return {
        fahrenheit: fahrTemp,
        celsius: (fahrTemp - 32) * 5/9,
        kelvin: (fahrTemp + 459.67) * 5 / 9
    }
}

console.log(temps(74))