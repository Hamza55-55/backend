import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import customer from './Routes/customers.js';
import bodyParser from 'body-parser';
import adminadddata from './Routes/admindata.js';

const app = express();
const apiKey="mongodb+srv://badarhamza320:hamzi123%40%21@cluster0.kzi3he5.mongodb.net/HomeDecor?retryWrites=true&w=majority";
mongoose.connect(apiKey, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("yes Connected");
  })
  .catch((error) => {
    console.log("Error:", error);
  });
const PORT = 5000;




app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/signup',customer)
app.use('/login',customer)
app.use('/images',express.static('images'));
app.use('/addproduct',adminadddata);
app.use('/products',adminadddata);