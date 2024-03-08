import chalk from "chalk"

const error = new Error("Failed to read from the database.")

console.log("")

console.log(chalk.bgGray(chalk.white("%s + JSON.stringify()")))
console.log(`Application failed: %s`, JSON.stringify(error))
console.log("")

console.log(chalk.bgGreen(chalk.white("Template literals `${error}`")))
console.log(`Application failed: ${error}`)
console.log("")

console.log(chalk.bgRed(chalk.white("%j, json directive")))
console.log(`Application failed: %j`, error)
console.log("")

console.log(chalk.bgBlue(chalk.white("%o, object directive")))
console.log(`Application failed: %o`, error)
console.log("")

console.log(chalk.bgYellow(chalk.white("%s + JSON.stringify(error, ['message', 'stack'])")))
console.log(`Application failed: %s`, JSON.stringify(error, ["message", "stack"]))
console.log("")

console.log(chalk.bgMagenta(chalk.white("error.message")))
console.log(`Application failed: %s`, error.message)
console.log("")