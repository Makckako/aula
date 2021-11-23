const prompt = require('prompt')
prompt.start()

const soma = () => {
prompt.get(['a', 'b'], (err,result) => {
console.log(parseInt(result.a) + parseInt(result.b
))
})
}

soma() 

/**
 * 1- Criar calculos de operações simples com variaveis fixas (ex: const a = 1 ...)
 * 2- Criar cálculos usando prompt e criando funções, como no exemplo acima.
 * 3- Criar 
 */