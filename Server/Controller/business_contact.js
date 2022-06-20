"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayBusinessContactPage = void 0;
const business_contact_1 = __importDefault(require("../Models/business_contact"));
function DisplayBusinessContactPage(req, res, next) {
    business_contact_1.default.find(function (err, businessContactCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Business Contact', page: 'business_contact', business_contact: businessContactCollection });
    });
}
exports.DisplayBusinessContactPage = DisplayBusinessContactPage;
//# sourceMappingURL=business_contact.js.map