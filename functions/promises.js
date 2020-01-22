//callback
const getDataCallback = (callback) => {
    setTimeout(() => {
        callback(undefined, 'apapappa')
    }, 2000)
}

getDataCallback((err, data) => {
    if (err) {

    } else {
        console.log(data)
    }
})


//promise
const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('not a number')
    }, 2000)
})


getDataPromise(2).then((data) => {
    getDataPromise(data)
}, (err) => {
    console.log(err)
})

/////
getDataPromise(10).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})
