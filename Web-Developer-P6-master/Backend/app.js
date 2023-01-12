const express = require("express"); 
const mongoose = require("mongoose");  
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv'); 
const app = express();
dotenv.config(); 


app.use(cors());
app.use(express.json());

const userRoutes = require("./routes/user"); 
const saucesRoutes = require("./routes/sauces");


mongoose.connect('mongodb+srv://imchun:Test@cluster0.5mf7gf3.mongodb.net/HotTakes?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
  
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use("/api/sauces" , saucesRoutes);
app.use("/api/auth", userRoutes); 


module.exports = app; 

