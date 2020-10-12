console.log(process.argv.slice(
  Math.max(process.argv.length - 3, 1)))

var [name, email, city] = process.argv.slice(process.argv.length - 3)