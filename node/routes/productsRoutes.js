const productModel = require('../models/productSchema')

const express = require('express')
const router = express.Router()
const {v4: uuidv4} = require('uuid')

//placeholder database
const products = []

router.get('/', (req,res) => {
    res.status(200).json(products)
})

router.get('/:index', (req,res) => {
    res.status(200).send(products[req.params.index])
})

router.post('/', (req,res) => {
    /*let product = req.body
    product.id = uuidv4()
    products.push(product)*/

    let product = new productModel({
        name: req.body.name,
        price: req.body.price
    })

    product.save()
    .then(product => {res.status(200).send(product)})
    .catch(error => {next(error)})

    res.status(200).send(product)
})

router.put('/:productId', (req,res) => {
    const productId = req.params.productId
    const productIndex = products.indexOf(productId)
    let product = req.body
    product.id = uuidv4()
    products.splice(productIndex,1,product)
    res.status(200).send('Product update page')
})

router.delete('/:productId', (req,res) => {
    const productId = req.params.productId
    const productIndex = products.indexOf(productId)
    products.splice(productIndex,1)
    console.log(products)
    res.status(200).send('Product delete page')
})

module.exports = router