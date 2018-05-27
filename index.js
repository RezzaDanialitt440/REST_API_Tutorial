const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(express.static('public'));

//BOdy Parse middleware
app.use(bodyParser.json());

//initialize routes
app.use('/api',require('./routes/api'));

//error Handling middleware
app.use(function(err,req,res,next){
  // console.log(err);
  res.status(422).send({error:err._message})
});

//listen for request
app.listen(4000, function(){
  console.log('now listening for request');
});
