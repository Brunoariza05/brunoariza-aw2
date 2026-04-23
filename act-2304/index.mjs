import express from 'express'

//puerto
const PUERTO = 3000;

// servidor expres
const app = express()

const obtener = (req, res) => {
        res.set('content-type','text/html')
        res.status(200)
        res.end('<h1>holas</h1>')
}

app.get('/', obtener)

app.get('/saludo', (req, res) => {
        res.end('hola')
})

app.post('/', (req, res) => {
        res.end('estoy en post')
})

app.listen(PUERTO, () => {
        console.log(`http://localhost:${PUERTO}`)
}) 