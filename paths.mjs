import path from "node:path"
//TODO te muestra el tipo de barra por SO
console.log(path.sep)
//TODO crear rutas dependiendo de la barra por sistema operativo
const filePaths = path.join("content", "subfolder", "subfolder", "archivo.txt")
console.log(filePaths)