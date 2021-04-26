const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')

const productRoutes = require('./routes/productsRoutes')

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(helmet())
app.use(express.static('public'))
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('It works !')
})

app.use('/products',productRoutes)

app.listen(3000, () => {
    console.log(`Server listen on http://localhost:3000`)
})