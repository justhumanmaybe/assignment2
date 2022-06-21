import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Util';

import {DisplayBusinessContactPage} from '../Controller/business_contact';

router.get('/business_contact', AuthGuard, DisplayBusinessContactPage);

/*display add */
router.get('/add', AuthGuard, DisplayBusinessContactPage);
/*display edit */
router.get('/edit/:id', AuthGuard, DisplayBusinessContactPage);

/*process add*/
router.post('/add', AuthGuard, DisplayBusinessContactPage);
/*process edit*/
router.post('/edit/:id', AuthGuard, DisplayBusinessContactPage);
/*process delete*/
router.post('/delete/:id', AuthGuard, DisplayBusinessContactPage);
export default router;