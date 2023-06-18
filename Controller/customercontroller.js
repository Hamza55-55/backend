import Customrmodel from '../models/customers.js';

export const addcustomer = async (req, res) => {
  const { fname, lname, email, password, cpassword } = req.body;

  try {
    const existingCustomer = await Customrmodel.findOne({ email });
    if (existingCustomer) {
      return res.status(409).json({ message: 'Email already exists' });
    }

    const newCustomerInfo = new Customrmodel({
      fname,
      lname,
      email,
      password,
      cpassword,
    });

    await newCustomerInfo.save();
    console.log('Data saved');
    res.status(200).json({ message: 'Account created successfully' });
  } catch (error) {
    console.log('Error:', error);
    res.status(500).json({ message: 'Failed to create account' });
  }
};



export const getcustomer = async (req, res) => {
  const { email, password } = req.query;

  try {
    const customer = await Customrmodel.findOne({ email, password });

    if (customer) {
      // If customer data is found, return true and any additional required data
      res.json({ success: true, customer });
    } else {
      // If customer data is not found, return false
      res.json({ success: false });
    }
  } catch (error) {
    console.log("Error: Failed to fetch customer data");
    res.json({ success: false });
  }
};


 