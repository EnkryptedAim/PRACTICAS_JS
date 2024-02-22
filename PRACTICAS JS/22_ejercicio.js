// Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']
const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]

const replacedSchedule = []

// Iterar sobre la const
for (const food of foodSchedule) {
  if (food.isVegan) {
    // Si la comida es vegana, agregarla al array resultante
    replacedSchedule.push(food.name)
  } else {
    // Buscar una fruta no duplicada para reemplazar comidas no veganas
    let found = false
    for (const fruit of fruits) {
      if (!replacedSchedule.includes(fruit)) {
        replacedSchedule.push(fruit)
        found = true
        break
      }
    }

    // Caso en el que se encuentra una fruta duplicada
    if (!found) {
      // Mensaje de error según sea necesario
      console.error(
        'No hay frutas disponibles para reemplazar comidas no veganas.'
      )
      break // Terminar el bucle si no hay frutas disponibles
    }
  }
}
// Imprimir el array resultante
console.log(replacedSchedule)

//! En este ejercicio he necesitado comentar los pasos porque me estaba haciendo un lío ya ^^!
