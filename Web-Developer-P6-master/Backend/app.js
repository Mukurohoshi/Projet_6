require('dotenv').config()

const express = require("express"); 
const mongoose = require("mongoose");  
const path = require('path');
const cors = require('cors');
const app = express();
const helmet = require("helmet");

const DBToken = process.env["DATABASE"];
console.log();

app.use(cors());
app.use(express.json());
app.use(helmet({
  crossOriginResourcePolicy: { policy: "same-site" },
})); 


const userRoutes = require("./routes/user"); 
const saucesRoutes = require("./routes/sauces");




mongoose.connect(DBToken ,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
  
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use("/api/sauces" , saucesRoutes);
app.use("/api/auth", userRoutes); 


module.exports = app; 

