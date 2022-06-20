import express from 'express';
const router = express.Router();

router.get('/business_contact', DisplayBusinessContactPage);

export default router;