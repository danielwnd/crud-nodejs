import fs from "node:fs/promises"

//TODO desde node no es necesario el sync ya que lo tiene integrado
await fs.readFile('./archivo.txt', "utf-8").then(text => {
    console.log("ya termino de leer el archivo")
    console.log(text)
})


