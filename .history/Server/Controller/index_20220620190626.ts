import express from 'express';

import { UserDisplayName } from '../Util';

export function DisplayHomePage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Home', page: 'home', message:'', displayName:'' });
}
export function DisplayAboutPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'About ME', page: 'about', message:'', displayName:'' });
}
export function DisplayProjectPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'My Project', page: 'project', message:'', displayName:'' });
}
export function DisplayServicePage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Service offer', page: 'service', message:'', displayName:'' });
}
export function DisplayContactPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Contact Me', page: 'contact', message:'',displayName:'' });
}
//temp
