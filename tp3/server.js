import express from 'express'
import router from './router/libro.js'

const app = express()
app.use(express.static('public'))
app.use(express.json())
app.use('/libros', router);

const PORT = 8080
const server = app.listen(PORT,
    () => console.log(`Servidor express escuchando en http://localhost:${PORT}`)
)
server.on('error', error => console.log('Servidor express en error:', error))