const express=require('express');

const mongoose=require('mongoose');

//product schema
const ProductSchema=new mongoose.Schema({
    name:{
        type:String,
        required: true
    }, 
    price:{
        type:Number,
        required: true

    }, 
    category:{
        type:String,
        required: true
    },
    inStock:{
        type:Boolean,
        required: true,
        default: true

    }, 
    img:{
        type:String,
       

    }
});


module.exports = ProductSchema;


module.exports = mongoose.model('Product', ProductSchema);

// amitshringi0786
// YisYJAs0Gqw230AR


// MONGO_URI='mongodb+srv://amitshringi0786:Amitshringi@ruleengine.kkowl.mongodb.net/?retryWrites=true&w=majority&appName=RuleEngine'
