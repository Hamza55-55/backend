import { addProduct, getAllProducts } from '../Controller/productscontroller.js';
import express from 'express';
import multer from 'multer';

const productrouter = express.Router();


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './images/'); // Set the destination folder where you want to store the images
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Set the filename for the uploaded image
  },
});

const upload = multer({ storage: storage });

productrouter.post('/',upload.single('image'), addProduct);

// productrouter.post('/',upload.single('image'), addProduct);

productrouter.post("/",addProduct);
productrouter.get("/",getAllProducts);

export default productrouter;

