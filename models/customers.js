import mongoose from "mongoose"
const customrstructure=mongoose.Schema({
fname:String,
lname:String,
email:String,
password:String,
cpassword:String,
});
const Customrmodel=mongoose.model("customer",customrstructure);
export default Customrmodel;
