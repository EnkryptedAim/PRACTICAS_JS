// Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]
function repeatCounter(counterWords) {
  const wordCount = {}
  counterWords.forEach((word) => {
    wordCount[word] = (wordCount[word] || 0) + 1
  })
  return wordCount
}
const result = repeatCounter(counterWords)
console.log(result)
