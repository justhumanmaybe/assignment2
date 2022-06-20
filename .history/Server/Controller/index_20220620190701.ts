import express from 'express';

import { UserDisplayName } from '../Util';

export function DisplayHomePage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Home', page: 'home', message:'', displayName: UserDisplayName(req) });
}
export function DisplayAboutPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'About ME', page: 'about', message:'', displayName:UserDisplayName(req) });
}
export function DisplayProjectPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'My Project', page: 'project', message:'', displayName:UserDisplayName(req) });
}
export function DisplayServicePage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Service offer', page: 'service', message:'', displayName:UserDisplayName(req) });
}
export function DisplayContactPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Contact Me', page: 'contact', message:'',displayName:UserDisplayName(req) });
}
//temp
