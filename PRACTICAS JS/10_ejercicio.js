// Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(numbers) {
  let average = 0
  for (let i = 0; i < numbers.length; i++) {
    average += numbers[i]
  }
  const averageValue = average / numbers.length
  return averageValue
}
const result = average(numbers)
console.log(result)
