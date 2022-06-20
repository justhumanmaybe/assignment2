import express from 'express';
const router = express.Router();

// import controller module
import {DisplayRegisterPage, ProcessLogoutPage, DisplayLoginPage, ProcessLoginPage, ProcessRegisterPage} from "../Controller/auth";

/* display home page. */
router.get('/', DisplayLoginPage);

/* display home page. */
router.get('/home', DisplayLoginPage);

/* display about page. */
router.get('/about', DisplayRegisterPage);

/* display project page. */
router.get('/project', ProcessLoginPage);

/* display service page. */
router.get('/service', ProcessRegisterPage);

/* display contact page. */
router.get('/contact', ProcessLogoutPage);

export default router;
