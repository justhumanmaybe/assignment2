import express from 'express';
const router = express.Router();

/* display home page. */
router.get('/', function(req: express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'Home', page: 'home' });
});

/* display home page. */
router.get('/home', function(req: express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'Home', page: 'home' });
});

/* display about page. */
router.get('/about', function(req: express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'About', page: 'about' });
});

/* display project page. */
router.get('/project', function(req: express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'Our Project', page: 'project' });
});

/* display service page. */
router.get('/services', function(req: express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'Services offer', page: 'service' });
});

/* display contact page. */
router.get('/contact', function(req: express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'Contact us', page: 'contact' });
});



export default router;
