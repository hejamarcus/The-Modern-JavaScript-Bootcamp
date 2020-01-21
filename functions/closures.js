const createCounter = () => {
    let count = 0 

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}



const counter = createCounter()
counter.increment()
counter.increment()
// console.log(counter.get())



const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

const add10 = createAdder(10)
// console.log(add10(-2))
// console.log(add10(20))


const createTipper = (a) => {
    return (b) => {
        return a * b + b
    }
}

const newTipper = createTipper(.15)
console.log(newTipper(50))