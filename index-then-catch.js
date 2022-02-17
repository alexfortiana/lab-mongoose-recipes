const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then((response) => {
    return Recipe.create({
      title: "Huevo Duro"  
    })

  })
  .then((response) => {
    console.log("receta agregada")
    
    return Recipe.insertMany(data)
  })
  .then((response) => {
    console.log("todas las recetas añadidas")
    return Recipe.find(  {}, "title" )
  })
  .then((response) => {
    console.log(response)
    return Recipe.findOneAndUpdate({title: "Rigatoni alla Genovese"}, {duration: 100}, {new: true})
  })
  .then((response) => {
    console.log("Respuesta actualizada", response)

    return Recipe.deleteOne({title: "Carrot Cake"})
  })
  .then((response) => {
    console.log("receta borrada", response)
    return mongoose.disconnect();
  })
  .then((response) => {
    console.log("esta desconectado")
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });


  


