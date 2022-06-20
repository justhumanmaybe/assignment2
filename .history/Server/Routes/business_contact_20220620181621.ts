import express from 'express';
const router = express.Router();
import { AuthGuard } from '../Util';
import {DisplayBusinessContactPage} from '../Controller/business_contact';
router.get('/business_contact', AuthGuard, DisplayBusinessContactPage);

export default router;