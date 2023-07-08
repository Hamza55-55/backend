import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import customer from './Routes/customers.js';
import bodyParser from 'body-parser';
import categoryrouter from './Routes/categoryroutes.js';
import productrouter from './Routes/productroutes.js';
import dotenv from "dotenv";
dotenv.config();
const app = express();
const apiKey=process.env.MONGODB_URL;
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
app.use('/addproduct',productrouter);
app.use('/delete',productrouter);
app.use('/addcategory',categoryrouter);
app.use('/delete',categoryrouter);

app.use('/products',productrouter);
app.use('/categories',categoryrouter);
app.use('/category/:id',categoryrouter);
app.use('/images',express.static('images'));