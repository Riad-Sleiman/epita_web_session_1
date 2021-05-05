require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')

const tweetRoutes = require('./routes/tweetRoutes')
const notFound = require('./middlewares/notFound')
const errorHandler = require('./middlewares/errorHandler')
const connectDB = require('./middlewares/connectDB')

const app = express()

connectDB()

app.use(morgan('dev'))
app.use(cors())
app.use(helmet())
app.use(express.static('public'))
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('Default Page')
})

app.use('/tweets',tweetRoutes)

app.use(notFound)

app.use(errorHandler)

app.listen(3000, () => {
    console.log(`Server listen on http://localhost:3000`)
})