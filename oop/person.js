const Person = function (firstName, lastName, age, likes = [])  {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}.`

    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`
    })

    return bio
}

Person.prototype.setName = function (fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

const me = new Person('Marcus', 'Andersson', 30, ['Frida', 'Gaming'])
me.setName('Anneli Seger')
console.log(me.getBio())

const frida = new Person('Frida', 'Eriksson', 26)
console.log(frida.getBio())