const file = require('fs')

function one() {
    return new Promise((resolve, inject) => {
        file.readFile('./one.md', (err, data) => {
            if (err) inject(err);
            resolve(data)
        })
    })
}
function two() {
    return new Promise((resolve, inject) => {
        file.readFile('./two.md', (err, data) => {
            if (err) inject(err);
            resolve(data)
        })
    })
}
function three() {
    return new Promise((resolve, inject) => {
        file.readFile('./three.md', (err, data) => {
            if (err) inject(err);
            resolve(data)
        })
    })
}

async function main() {
    let one = await one();
    let two = await two();
    let three = await three
}
main()