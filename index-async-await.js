const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"

//! COMPROBAR QUE ESTA TODO CORRECTO PORQUE NO HEMOS QUERIDO MODIFICAR 
//! LA BASE DE DATOS CON EL THEN CATCH.

mongoose
  .connect(MONGODB_URI)
const obtainData = async() => {
  try {
    const response1 = await Recipe.deleteMany()
    const response2 = await Recipe.create({
      title: "Huevo Duro"
    })
    const response3 = await Recipe.insertMany(data)
    const response4 = await Recipe.find({},"title" )
    const response5 = await Recipe.findOneAndUpdate({title: "Rigatoni alla Genovese"}, {duration: 100}, {new: true})
    const response6 = await Recipe.deleteOne({title: "Carrot Cake"})
    const response7 = await mongoose.disconnect();
  }
  catch(err) {
    console.log(err)
  }
}