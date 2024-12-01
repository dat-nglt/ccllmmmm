import dotenv from 'dotenv'
import express from 'express'
import viewEngine from './viewEngine.js'
import bodyParser from 'body-parser'
import webRoute from './src/router/webRoute.js'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.use(express.static(path.join(__dirname, '/public')))


app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(bodyParser.json())

viewEngine(app)
webRoute(app)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Chương trình chạy tại cổng: ${PORT}`)
})
