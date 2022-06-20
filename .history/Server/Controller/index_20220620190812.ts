import express from 'express';

import { UserDisplayName } from '../Util';

export function DisplayHomePage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Home', page: 'home', displayName: UserDisplayName(req) });
}
export function DisplayAboutPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'About ME', page: 'about', displayName:UserDisplayName(req) });
}
export function DisplayProjectPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'My Project', page: 'project', displayName:UserDisplayName(req) });
}
export function DisplayServicePage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Service offer', page: 'service', displayName:UserDisplayName(req) });
}
export function DisplayContactPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Contact Me', page: 'contact',displayName:UserDisplayName(req) });
}
//temp
