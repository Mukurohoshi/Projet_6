const express = require("express"); /* installation d'express (framework qui simplifie les taches, en nous permettant de déployer les API plus rapidement) l'application Express est fondamentalement une série de fonctions appelées MIDDLEWARE. Chaque élément de middleware reçoit les objets request et response, peut les lire, les analyser et les manipuler.(req, res, next) */
const mongoose = require("mongoose"); /* Mongoose facilite les interactions avec la bdd MongoDB. Il nous permet de valider le format des données ; de gérer les relations entre les documents ; de communiquer directement avec la bdd pour la lecture et l'écriture des documents */

const app = express();

mongoose.connect('mongodb+srv://imchun:<test>@cluster0.5mf7gf3.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


module.exports = app;