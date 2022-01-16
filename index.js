const file = require("fs");
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const citiess = new Schema({
    city:{
        type:String
    },
    state:{
        type:String,
    }
  });
const cities = mongoose.model("cities", citiess);
mongoose.connect('mongodb://localhost/cities');

file.readFile("./cities.json","utf-8",(err,res) => {
    if(err){
        console.log(err);
    }
    else{
        let data = JSON.parse(res);
        for(let i=0; i<data.length; i++){
            cities.insertOne({
                    city:data[i].name,
                    state:data[i].state
                });
            console.log(data[i].name,data[i].state);
        }
        
    }
})

