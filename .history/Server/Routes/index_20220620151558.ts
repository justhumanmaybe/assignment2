import express from 'express';
const router = express.Router();

// import controller module
import {DisplayAboutPage, DisplayContactPage, DisplayHomePage, DisplayProjectPage, DisplayServicePage} from "../Controller/index";

/* display home page. */
router.get('/', DisplayHomePage);

/* display home page. */
router.get('/home', DisplayHomePage);

/* display about page. */
router.get('/about', DisplayAboutPage);

/* display project page. */
router.get('/project', DisplayProjectPage);

/* display service page. */
router.get('/service', DisplayServicePage);

/* display contact page. */
router.get('/contact', DisplayContactPage);

/*temp */




export default router;
