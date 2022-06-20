import mongoose from "mongoose";
const Schema = mongoose.Schema;

const business_contactSchema = new Schema(
    {
        Contact_Name:String,
        Number:String,
        Email:String
    },{
        collection: "business_contact"
    }
);
const Model = mongoose.model("business_contact", business_contactSchema);
export default Model;
