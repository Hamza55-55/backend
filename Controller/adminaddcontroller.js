import adminmodel from '../models/adminadddata.js';

export const addProduct = async (req, res) => {
  const { name, price, imgFile } = req.body;
  try {
    // Create a new instance of the Product model and populate it with the data
    const newProduct = new adminmodel({
          name,
          price,
          image: req.file.path
    });

    // Save the new product to the database
    const savedProduct = await newProduct.save();

    // Send a success response
    console.log(savedProduct);
    res.json({ Response: true, message: 'Product added successfully'});
    console.log('Product added successfully');
  } catch (error) {
    // Handle any errors and send an error response
    console.error(error);
    res.status(500).json({ message: 'Failed to add product' });
  }
  // try {
  //   const product = new adminmodel({ name, price, imgFile });
  //   await product.save();

  //   res.status(201).json({ message: 'Product added successfully!' });
  // } catch (error) {
  //   console.error('Error adding product:', error);
  //   res.status(500).json({ message: 'Failed to add product' });
  // }
};
 
export const getAllProducts = async (req, res) => {
  try {
    const products = await adminmodel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ message: 'Failed to add product' });
  }
};

