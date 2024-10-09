# Learning Async Await

## Understanding the Event Loop
```js
//Seeing which one will load first
console.log('Sync 1')
setTimeout(_ => console.log(`Timeout 2`, 0))
Promise.resolve().then(_ => console.log('Promise 3'))
console.log('Sync 2')
//Sync 1, Sync 2, Promise 3, Timeout 2
```


## Let's see how promises work
```js
//Using promises
const promise = fetch('https://jsonplaceholder.typicode.com/todos/1')

promise
    .then(res => res.json())
    .then(user => {
      //Making an error so it can catch it  
        throw new Error('uh oh')
        return user
    })
promise
    .then(res=> res.json())
    .then(user => console.log(user.title))
    .catch(err => console.error('Error!'))
    //Logs Error!
```


## It can get tricky when creating promises
```js
 //Let's see the time elapsed between each line of code
    const tick = Date.now()
    const log = v => console.log(`${v}  Elapsed: ${Date.now() - tick}`)

    const codeBlocker = () => {
        let i = 0;
        while( i < 10000000) {
            i++
        }
        return 'billion loops done!'
    }

    log('Synchro 1')
    log(codeBlocker())
    log('Synchro 2')

    //Here we see Synchro 2 is frozen until while loop is complete (since JS is single-threaded)

```

```js
//Let's try wrapping it in a Promise() and executing it as a microtask
const tick = Date.now()
const log = v => console.log(`${v}  Elapsed: ${Date.now() - tick}`)


const codeBlocker = () => {
    return new Promise((resolve, reject) => {
        let i = 0
        while (i < 1000000000) {
            i++
        }
        resolve('billion loops done')
    })
}

log('Synchro 1')
codeBlocker().then(log)
log('Synchro 2')
// Creation of promise is still happening on main thread, only the response of the value happens as microtask
```

```js
// Lets refactor so our synchronous code can actually run first.
const tick = Date.now()
const log = v => console.log(`${v}  Elapsed: ${Date.now() - tick}`)

let codeBlocker = Promise.resolve().then(v => {
    let i = 0;
    while (i < 1000000000) {
        i++;
    }
    return 'billion loops done';
})
```

## Promises can get hard to follow if you have a lot of them, let's avoid promise hell with async / await!

```js
//Basic
const getFruit = async() => {

}
//func returns a Promise
```


```js
const tick = Date.now()
const log = v => console.log(`${v}  Elapsed: ${Date.now() - tick}`)

const getFruit = async(name) => {
    const fruits = {
        pineapple: '🍍',
        peach: '🍑',
        strawberry: '🍓'
    }
    return Promise.resolve(fruits[name])
}

getFruit('peach').then(console.log)
```
### Actually using async / await
```js
//Async + Await
const makeSmoothie = async() => {
    const a = await getFruit('pineapple')
    const b = await getFruit('strawberry')
    const smoothie = await Promise.all([a,b])
    
    return smoothie
}

makeSmoothie().then(log)
```
### Finally let's try using try...catch
```js
//try catch blocks
const badSmoothie = async() => {
    try {

        const a = await getFruit('pineapple')
        const b = await getFruit('strawberry')
        const smoothie = await Promise.all([a,b])
        
        throw 'broken!'
        
        return smoothie
    } catch(err){
        console.log(err)
        // return 'were going to be fine...'
        throw 'its broken!'
    }
}

badSmoothie()
    .then(val => console.log({val}))
    .catch(err => console.log({err}))
```

Be careful using async await in .map() or .forEach() because it is not actually asynchronous. For looping, using a traditional for loop.