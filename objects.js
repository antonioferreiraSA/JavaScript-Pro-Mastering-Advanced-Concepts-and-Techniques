const pet = {species: "Dog", name: "Elton", age: 1.5}
pet[true] = "hello"

pet.bark = function() {
    return "woof woof!!!!"
}

console.log(pet.bark())

// console.log(typeof pet)
// console.log(pet["age"])
