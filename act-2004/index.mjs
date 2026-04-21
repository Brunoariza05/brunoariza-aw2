import http from 'node:http'
import path from 'node:path'
import fsp from 'node:fs/promises'

const app = http.createServer(async (peticion, respuesta) =>{
try {
    if (peticion.method === "GET"){
        if(peticion.url === "/"){
            respuesta.statusCode = 200;
            return respuesta.end("estas en la raiz")
        }
        if(peticion.url === "/usuarios"){
            const response = await fetch('https://api.escuelajs.co/api/v1/users')
            const users = await response.json()

            const ruta = path.resolve("users.json")
            const data = JSON.stringify(users, null, 4)
            await fsp.writeFile(ruta, data);        
            const datosUsuarios = await fsp.readFile(ruta, 'utf8')
    
            console.log(datosUsuarios)
            respuesta.statusCode = 200; // codigo de estado
            return respuesta.end("estas en la ruta usuarios")
        }  
        if(peticion.url === "/usuarios/filtrados"){
            try {
                const contenido = await fsp.readFile(ruta, 'utf8');
                const users = JSON.parse(contenido);
                const filtrados = users.filter(u => u.id < 10);

                const ruta = path.resolve("filtrados.json")
                const data = JSON.stringify(filtrados, null, 4)
                await fsp.writeFile(ruta, data);        

                const datosUsuarios = await fsp.readFile(ruta, 'utf8')
    
                console.log(datosUsuarios)
                respuesta.statusCode = 200; // codigo de estado
                return respuesta.end("estas en la ruta usuarios con id menor a 10")
            } 
            catch {
                respuesta.statusCode = 404;
                return respuesta.end("Debe ejecutar primero la ruta /usuarios para generar el archivo.");
            }
        }  
    }
    respuesta.statusCode = 404;
    respuesta.end("ruta no encontrada...")

} catch (error){
    console.log(error);
}
})

app.listen(3000, ()=>{
    console.log("servidor corriendo en http://localhost:3000")
})