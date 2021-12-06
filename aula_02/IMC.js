/**
 * Fórmula: peso / (altura * altura)
 * MENOR QUE 18,5    MAGREZA    0
 * ENTRE 18,5 E 24,9    NORMAL    0
 * ENTRE 25,0 E 29,9    SOBREPESO    I
 * ENTRE 30,0 E 39,9    OBESIDADE    II
 * MAIOR QUE 40,0    OBESIDADE GRAVE    III
 */

const tabela = [
  {classificacao: 'Magreza', max: 18.5,min: 0 },
  {classificacao: 'Normal', max: 24.9,min: 18.6 },
  {classificacao: 'Sobrepeso', max:29.9, min: 25 },
  {classificacao: 'Obesidade', max: 39.9, min: 30 },
  {classificacao: 'Obesidade', max: 100,min: 40 },
]

const pessoas = [
  {id: 1, peso:75, altura: 1.90},
  {id: 2, peso:80, altura: 1.50},
  {id: 3, peso:50, altura: 1.65},
  {id: 4, peso:120, altura: 1.70},
  {id: 5, peso:90, altura: 1.85},
]

const resultado = pessoas.map(pessoa => {

  const imc = pessoa.peso / (pessoa.altura * pessoa.altura)
  
  const classificacaoFiltro = tabela.filter(item => (
    item.max >= imc && item.min <= imc
  ))

  const classificacaoNome = classificacaoFiltro.map(item => item.classificacao)

  return {
    pessoa: pessoa.id,
    imc: classificacaoNome[0],
  }
})

console.log(resultado)