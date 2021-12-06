const alunos = [
  {nome: 'Bia', notaFinal: 5, faltas: 80 },
  {nome: 'Ellie', notaFinal: 7, faltas: 0 },
  {nome: 'Igor', notaFinal: 3, faltas: 15 },
  {nome: 'Stella', notaFinal: 9, faltas: 8 },
  {nome: 'Bruno', notaFinal: 8, faltas: 18},
]

const mediaNota = 6
const mediaFalta = 75

const aprovados = alunos.filter(aluno => (
  aluno.notaFinal >= mediaNota && aluno.faltas < mediaFalta
))

console.log("Os alunos aprovados são: ", aprovados)

const reprovados = alunos.filter(aluno => (
  aluno.notaFinal < mediaNota || aluno.faltas >= mediaFalta 
))

console.log('Os alunos reprovados são: ', reprovados)

console.log(alunos.map(aluno => aluno.nome))