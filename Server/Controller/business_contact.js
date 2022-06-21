"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeletePage = exports.ProcessEditPage = exports.ProcessAddPage = exports.DisplayEditPage = exports.DisplayAddPage = exports.DisplayBusinessContactPage = void 0;
const business_contact_1 = __importDefault(require("../Models/business_contact"));
const Util_1 = require("../Util");
function DisplayBusinessContactPage(req, res, next) {
    business_contact_1.default.find(function (err, businessContactCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Business Contact', page: 'business_contact', business_contact: businessContactCollection, displayName: (0, Util_1.UserDisplayName)(req) });
    });
}
exports.DisplayBusinessContactPage = DisplayBusinessContactPage;
function DisplayAddPage(req, res, next) {
    res.render('index', { title: 'Add', page: 'edit', business_contact: '', displayName: (0, Util_1.UserDisplayName)(req) });
}
exports.DisplayAddPage = DisplayAddPage;
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    business_contact_1.default.findById(id, {}, {}, function (err, businessContactToEdit) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Edit', page: 'edit', business_contact: businessContactToEdit, displayName: (0, Util_1.UserDisplayName)(req) });
    });
}
exports.DisplayEditPage = DisplayEditPage;
function ProcessAddPage(req, res, next) {
    let newBusinessContact = new business_contact_1.default({
        "Name": req.body.businessContactName,
        "Number": req.body.businessContactNumber,
        "Email": req.body.businessContactEmail
    });
    business_contact_1.default.create(newBusinessContact, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/business_contact');
    });
}
exports.ProcessAddPage = ProcessAddPage;
function ProcessEditPage(req, res, next) {
    let id = req.params.id;
    let updateBusinessContact = new business_contact_1.default({
        "_id": id,
        "Name": req.body.businessContactName,
        "Number": req.body.businessContactNumber,
        "Email": req.body.businessContactEmail
    });
    business_contact_1.default.updateOne({ _id: id }, updateBusinessContact, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/business_contact');
    });
}
exports.ProcessEditPage = ProcessEditPage;
function ProcessDeletePage(req, res, next) {
    let id = req.params.id;
    business_contact_1.default.remove({ _id: id }, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/business_contact');
    });
}
exports.ProcessDeletePage = ProcessDeletePage;
//# sourceMappingURL=business_contact.js.map