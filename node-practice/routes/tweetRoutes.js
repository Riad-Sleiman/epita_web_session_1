const tweetModel = require('../models/tweetSchema')

const express = require('express')
const router = express.Router()
const {v4: uuidv4} = require('uuid')

router.post('/', (req,res,next) => {
    let tweet = new tweetModel({
        name: req.body.name,
        text: req.body.text
    })

    tweet.save()
    .then(tweet => {res.status(200).send(tweet)})
    .catch(error => {next(error)})

    //res.status(200).send(tweet)
})

router.get('/', (req, res, next) =>{
    tweetModel.find()
    .select('name text')
    .exec()
    .then(docs => {
        const response = {
            count: docs.length,
            products: docs.map(doc => {
                return{
                    name: doc.name,
                    price: doc.price,
                    request:{
                        type: 'GET',
                        url: req.protocol + '://' + req.get('host') +'/tweets/' + doc._id 
                    }
                }
            })
        }
        //if(docs.length >= 0){
            res.status(200).json(response);
       // }else{
       //     res.status(404).json({
       //     message: 'No entries found'
       //   })
       //}
       
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    });
});

router.get('/:tweetId', (req, res, next) =>{
    const id = req.params.tweetId;
    tweetModel.findById(id)
    .select('name text _id')
    .exec()
    .then(doc =>{
        console.log(doc);
        if(doc){
            res.status(200).json(doc);
        } else{
            res.status(404).json({
                message: "No valid entry found for provided ID"
            });
        }
        
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});

router.delete('/:tweetId', (req, res) => {
    const id = req.params.tweetId;
    tweetModel.remove({_id: id})
    .exec()
    .then(result => {
        res.status(200).json({
            message:'Product deleted'
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    });
   })

router.put('/:tweetId', /*checkAuth,*/ (req, res, next) =>{
    const id = req.params.tweetId;
    const updateOps = {
        name: req.body.name,
        text: req.body.text
    };
    tweetModel.update({_id: id}, { $set: updateOps })
    .exec()
    .then(result => {
        res.status(200).json({
            message:'Product updated',
            request:{
                type:'GET',
                url: req.protocol + '://' + req.get('host') +'/tweets/' + id
            }
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}); 

module.exports = router