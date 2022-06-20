import express from 'express';
const router = express.Router();
import {DisplayBusinessContactPage} from '../Controller/business_contact';
router.get('/business_contact', DisplayBusinessContactPage);

export default router;