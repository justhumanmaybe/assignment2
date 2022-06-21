"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Util_1 = require("../Util");
const business_contact_1 = require("../Controller/business_contact");
router.get('/business_contact', Util_1.AuthGuard, business_contact_1.DisplayBusinessContactPage);
router.get('/add', Util_1.AuthGuard, business_contact_1.DisplayAddPage);
router.get('/edit/:id', Util_1.AuthGuard, business_contact_1.DisplayEditPage);
router.post('/add', Util_1.AuthGuard, business_contact_1.ProcessAddPage);
router.post('/edit/:id', Util_1.AuthGuard, business_contact_1.ProcessEditPage);
router.post('/delete/:id', Util_1.AuthGuard, business_contact_1.ProcessDeletePage);
exports.default = router;
//# sourceMappingURL=business_contact.js.map