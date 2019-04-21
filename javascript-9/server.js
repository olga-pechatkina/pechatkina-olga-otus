const express = require('express');
const app = express();


const db = require('./config/db');
const MongoClient = require('mongodb').MongoClient;

app.listen(1337, function(){
    console.log('Express server listening on port 1337');
});

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err)
    require('./app/routes')(app, database);
    ///? port number
    //app.listen(1337, () => {
     // console.log('We are live on ');
    //});               
  })