import express from 'express';

export function DisplayHomePage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Home', page: 'home' });
}
export function DisplayAboutPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'About ME', page: 'about' });
}
export function DisplayProjectPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'My Project', page: 'project' });
}
export function DisplayServicePage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Service offer', page: 'service' });
}
export function DisplayContactPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Contact Me', page: 'contact' });
}
//temp
import BusinessContact from '../Models/business_contact'
export function DisplayBusinessContactPage(req: express.Request, res: express.Response, next: express.NextFunction)
{

}