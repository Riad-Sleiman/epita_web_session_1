const express = require('express')

const app = express()       

app.get('/', (req, res) => {
    res.status(200).send('It works !')  //status 200 : all is good
})

app.listen(3000, () => {
    console.log(`Server listen on http://localhost:3000`)
})