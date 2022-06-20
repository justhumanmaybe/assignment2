/*Name:Anson Ng
  Student ID: 301202061
  Date: 6/12/2022 */
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
/* display home page. */
router.get('/', function(req, res, next) 
{
  res.render('index', { title: 'Home', page: 'home' });
});

/* display home page. */
router.get('/home', function(req, res, next) 
{
  res.render('index', { title: 'Home', page: 'home' });
});

/* display about page. */
router.get('/about', function(req, res, next) 
{
  res.render('index', { title: 'About', page: 'about' });
});

/* display project page. */
router.get('/project', function(req, res, next) 
{
  res.render('index', { title: 'Our Project', page: 'project' });
});

/* display service page. */
router.get('/service', function(req, res, next) 
{
  res.render('index', { title: 'Services offer', page: 'service' });
});

/* display contact page. */
router.get('/contact', function(req, res, next) 
{
  res.render('index', { title: 'Contact us', page: 'contact' });
});
exports.default = router;
//# sourceMappingURL=index.js.map