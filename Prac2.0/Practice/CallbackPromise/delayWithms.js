function delay(ms) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => resolve('Completed'),ms)
    }))
}

delay(3000).catch().then((result) => console.log(result + ' runs after 3 seconds'));