import express from 'express';
const router = express.Router();

// import controller module
import {DisplayAboutPage, DisplayContactPage, DisplayLoginPage, DisplayProjectPage, DisplayServicePage} from "../Controller/auth";

/* display home page. */
router.get('/', DisplayLoginPage);

/* display home page. */
router.get('/home', DisplayLoginPage);

/* display about page. */
router.get('/about', DisplayAboutPage);

/* display project page. */
router.get('/project', DisplayProjectPage);

/* display service page. */
router.get('/service', DisplayServicePage);

/* display contact page. */
router.get('/contact', DisplayContactPage);

export default router;
