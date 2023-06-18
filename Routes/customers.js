import  express from "express";
import { addcustomer,getcustomer } from "../Controller/customercontroller.js";
const customer = express.Router();
customer.post("/",addcustomer);
customer.get("/",getcustomer)
export default customer;