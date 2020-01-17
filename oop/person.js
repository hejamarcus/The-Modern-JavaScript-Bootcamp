class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`
        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })
        return bio
    }
    set fullName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes = []) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        return this.position
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes = []) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    getBio() {
        return this.grade
    }
    updateGrade(change) {
        this.grade += change
    }
}

const me = new Employee('Marcus', 'Andersson', 30, 'Developer', ['Frida', 'Gaming'])
me.setName('Anneli Seger')
console.log(me.getBio())

const frida = new Person('Frida', 'Eriksson', 26)
console.log(frida.getBio())