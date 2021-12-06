const a = 2
const b = 12
const c = -14

const delta = (b *b) - (4 * a * c)

const bhaskara = {
  x1: (-b - Math.sqrt(delta)) / (2*a),
  x2: (-b + Math.sqrt(delta)) / (2*a),
}

console.log(bhaskara)

if (bhaskara.x1 < 0) {
  console.log ('X1 é negativo')
} else {
  console.log ('X1 é positivo')
}

if (bhaskara.x2 < 0) {
  console.log('X2 é negativo')
} else {
  console.log('X2 é positivo')
}