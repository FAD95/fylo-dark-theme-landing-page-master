function Random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

console.log(Random(1, 75))
