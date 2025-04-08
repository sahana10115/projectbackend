const mongoose = require('mongoose');
const { type } = require('os');
const { User } = require('./User');
const Module = require('module');

const productSchem =new mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:Number
    },
    brand:{
        type:Number
    },
    description:{
        type:String
    },
    image:{
        type:String
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User"
    }
})

const Product= mongoose.model('Product',productSchem);
module.exports={Product}