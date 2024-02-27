import fs from "node:fs"

const stats = fs.statSync('./archivo.txt')
fs.readFile('./archivo.txt', "utf-8", (err, text) => {
    console.log("ya termino de leer el archivo")
    console.log(text)
})

// console.log(
//     stats.isFile(),
//     stats.isDirectory(),
//     stats.size
// )
