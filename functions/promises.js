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
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('asdgfef')
        reject('dfsffhea')
    }, 2000)
})

myPromise.then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
})