/* 1 */
import fsp from "node:fs/promises";
import path from "node:path"

try {
    // traemos datos de api y pasamos de txt a obj 
    const response = await fetch('https://api.escuelajs.co/api/v1/users')
    const users = await response.json()

    // usamos solo lo que neceistamos de la api 
    const modUsers = users.map((user) => {
        const modUser = {
            id: user.id,
            email: user.email,
            name: user.name
        }
        return modUser 
    });

    // reescribimos para mostrar en consola
    const ruta = path.resolve("users.json")
    const data = JSON.stringify(modUsers, null, 4)
    await fsp.writeFile(ruta, data);

    const localUser = await fsp.readFile(ruta, 'utf8')
    console.log(localUser)
    
} catch (error){
    console.log(error);
}