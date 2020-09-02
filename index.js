var express = require('express');
var app=express();
const { static } = require('express');  
app.use(express.static('public'));

    app.use(express.urlencoded({ extended: true }))


const ejs=require('ejs')

//Set the Template engine ejs  
app.set('view engine','ejs')

//import the router
const router=require('./wheather')

app.use('/',router);




app.listen(3000,()=>console.log("connected"))