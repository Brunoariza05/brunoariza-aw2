import express from 'express'
 
//puerto
const PUERTO = 3000;
 
// servidor expres
const app = express()

function middleware1(req, res, next){
    console.log(`se ejecuto el middleware1`);
    if (true){
        res.send('terminando en middleware1')
    } else {
        next();
    }
}
 
app.use(express.static('front'))

app.use('/', middleware1)

app.get('/', (req, res) => {
    console.log(`app get/`);
    res.send('hola /')
})

app.get('/saludo', (req, res) => {
    console.log(`app get/`);
    res.send('hola /saludo')
})

app.listen(PUERTO, () => {
        console.log(` estas en: http://localhost:${PUERTO}`)
}) 