// import categoryModel from '../models/category.js';
import productModel from '../models/product.js';

export const addProduct = async (req, res) => {
  const { name, price, imgFile, quantity, categoryId } = req.body;
  try {
    // Create a new instance of the Product model and populate it with the data
    const newProduct = new productModel({
          categoryId,
          name,
          price,
          quantity,
          image: req.file.path
    });

    // Save the new product to the database
    const savedProduct = await newProduct.save();

    // Send a success response
    console.log(savedProduct);
    res.json({ Response: true, message: 'Product added successfully'});
  } catch (error) {
    // Handle any errors and send an error response
    console.error(error);
    res.status(500).json({ message: 'Failed to add product' });}
};
 
export const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ message: 'Failed to get all product' });
  }
};

