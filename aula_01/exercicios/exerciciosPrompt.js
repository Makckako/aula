console.log('Hello World!')

const prompt = require('prompt')
prompt.start()

const mult = () => {
prompt.get(['a', 'b', 'c'], (err,result) => {
console.log(parseInt(result.a) * parseInt(result.b) * parseInt(result.c
))
})
}

mult()  