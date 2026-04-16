import http from 'node:http'

const app = http.createServer((peticion, respuesta) =>{
    if (peticion.method === "GET"){
        if(peticion.url === "/"){
            respuesta.statusCode = 200;
            return respuesta.end("estas en la raiz")
        }
        if(peticion.url === "/usuarios"){
            respuesta.statusCode = 200;
            return respuesta.end("estas en la ruta usuarios")
        }  
    }
    respuesta.statusCode = 404;
    respuesta.end("ruta no encontrada...")
})

app.listen(3000, ()=>{
    console.log("servidor corriendo en http://localhost:3000")
})