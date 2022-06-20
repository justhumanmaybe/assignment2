/*Name:Anson Ng
  Student ID: 301202061
  Date: 6/12/2022 */
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const business_contactSchema = new Schema({
    Contact_Name: String,
    Number: String,
    Email: String
}, {
    collection: "business_contact"
});
const Model = mongoose_1.default.model("business_contact", business_contactSchema);
exports.default = Model;
//# sourceMappingURL=business_contact.js.map