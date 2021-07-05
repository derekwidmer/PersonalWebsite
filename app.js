require('dotenv').config()

const path = require('path')
const ejsMate = require('ejs-mate')

const express = require('express')
const app = express()

app.engine('ejs', ejsMate)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
    res.render('home')
})

app.get('/portfolio', (req, res) => {
    res.render('portfolio')
})

const port = process.env.PORT
app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}...`)
})