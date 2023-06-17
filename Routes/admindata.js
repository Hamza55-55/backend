import { addProduct, getAllProducts } from '../Controller/adminaddcontroller.js';
import express from 'express';
import multer from 'multer';

const adminadddata = express.Router();


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './images/'); // Set the destination folder where you want to store the images
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Set the filename for the uploaded image
  },
});

const upload = multer({ storage: storage });

adminadddata.post('/',upload.single('image'), addProduct);

adminadddata.post("/",addProduct);
adminadddata.get("/",getAllProducts);
export default adminadddata;

