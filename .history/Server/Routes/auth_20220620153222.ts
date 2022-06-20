import express from 'express';
const router = express.Router();

// import controller module
import {DisplayRegisterPage, DisplayContactPage, DisplayLoginPage, ProcessLoginPage, DisplayServicePage} from "../Controller/auth";

/* display home page. */
router.get('/', DisplayLoginPage);

/* display home page. */
router.get('/home', DisplayLoginPage);

/* display about page. */
router.get('/about', DisplayRegisterPage);

/* display project page. */
router.get('/project', ProcessLoginPage);

/* display service page. */
router.get('/service', DisplayServicePage);

/* display contact page. */
router.get('/contact', DisplayContactPage);

export default router;
