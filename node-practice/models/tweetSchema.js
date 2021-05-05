const mongoose = require('mongoose')

const tweetModel = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    text: {
        type: String,
        require: true
    }
},{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated-at'
    }
})

module.exports = mongoose.model('tweets',tweetModel)