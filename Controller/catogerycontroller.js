import categoryModel from '../models/category.js';
export const getCategory = async (req, res) => {
  try {
    const category = await categoryModel.find({});
    res.json({ success: true, category });
  } catch (error) {
    console.error('Error getting category:', error);
    res.status(500).json({ message: 'Failed to get category' });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const categories = await categoryModel.find({});
    res.json({ success: true, categories });
  } catch (error) {
    console.error('Error listing categories:', error);
    res.status(500).json({ message: 'Failed to list categories' });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    console.log('aaa 11', req.params.id)
    // console.log('res 22 ', res)
    const categories = await categoryModel.delete(req);
    res.json({ success: true, categories });
  } catch (error) {
    console.error('Error delete category:', error);
    res.status(500).json({ message: 'Failed to delete category' });
  }
};

export const addCategory = async (req, res) => {
     const { name, price, imgFile } = req.body;
  try {
    // Create a new instance of the Product model and populate it with the data
    const newCategory = new categoryModel({
          name,
          image: req.file.path
    });
    console.log('here ', newCategory)
    // Save the new product to the database
    const saveCategory = await newCategory.save();

    // Send a success response
    console.log(saveCategory);
    res.json({ Response: true, message: 'Category added successfully'});
  } catch (error) {
    // Handle any errors and send an error response
    console.error(error);
    res.status(500).json({ message: 'Failed to add category' });}
};

// export const updateCategory = async(req,res) => {
//     const { categoryID,name, price, imgFile } = req.body;
// }

// export const getSingleCategory = async (req, res) => {
//     try {
//       const categories = await categoryModel.fineOne({});
//       res.json({ success: true, categories });
//     } catch (error) {
//       console.error('Error listing categories:', error);
//       res.status(500).json({ message: 'Failed to list categories' });
//     }
//   };

