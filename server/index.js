import express from 'express'; //for routing
import bodyParser from 'body-parser'; //for sending post requests
import mongoose from 'mongoose'; //to create models(database/tables) for our data
import cors from 'cors'; //enable cross origin requests

import postRoutes from './routes/items.js';

const app = express(); //initialize app to use various methods

app.use(bodyParser.json({limit:"30mb",extended:true}));//setting body parser for sending the rqsts
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));//setting body parser for sending the rqsts

app.use(cors());

app.use('/',postRoutes);

//for hosting our database at cloud
const CONNECTION_URL = 'mongodb+srv://javascripmastery:javascripmastery123@cluster0.iqikk.mongodb.net/<dbname>?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true , useUnifiedTopology:true})//parameters not necessary but to remove warnings from console
    .then(()=>app.listen(PORT,()=>console.log(`Server running on Port : ${PORT}`)))
    .catch((error)=>console.log(error.message));
mongoose.set(`useFindAndModify`,false); // for removing warning