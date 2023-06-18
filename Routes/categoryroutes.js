import { getAllCategories, addCategory, deleteCategory } from '../Controller/catogerycontroller.js';
import express from 'express';
import multer from 'multer';

const categoryrouter = express.Router();


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './images/'); // Set the destination folder where you want to store the images
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Set the filename for the uploaded image
  },
});

const upload = multer({ storage: storage });

categoryrouter.post('/',upload.single('image'), addCategory);



categoryrouter.get("/", getAllCategories);
categoryrouter.post("/", addCategory);
// categoryrouter.put("/", updateCategory);
categoryrouter.delete("/" ,deleteCategory);
export default categoryrouter;

