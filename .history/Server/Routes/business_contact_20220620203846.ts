import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Util';

import {DisplayAddPage, DisplayBusinessContactPage, DisplayEditPage, ProcessAddPage, ProcessDeletePage, ProcessEditPage} from '../Controller/business_contact';

router.get('/business_contact', AuthGuard, DisplayBusinessContactPage);

/*display add */
router.get('/edit', AuthGuard, DisplayAddPage);
/*display edit */
router.get('/edit/:id', AuthGuard, DisplayEditPage);

/*process add*/
router.post('/edit', AuthGuard, ProcessAddPage);
/*process edit*/
router.post('/edit/:id', AuthGuard, ProcessEditPage);
/*process delete*/
router.post('/delete/:id', AuthGuard, ProcessDeletePage);
export default router;