import express from 'express'
import path from 'path'
import rutas from './routes/index.js'
import { fileURLToPath } from 'url';


const app = express()
const PORT = 8080

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//seteamos pug
app.set('views', path.join(__dirname,'./views'))
app.set('view engine', 'ejs')

app.use('/', rutas)

app.listen(8080, () => {
    console.log('Servidor escuchando puerto 8080')
})