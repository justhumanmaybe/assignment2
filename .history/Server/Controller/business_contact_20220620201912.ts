import express from 'express';
import BusinessContact from '../Models/business_contact'
import { UserDisplayName } from '../Util';
export function DisplayBusinessContactPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    BusinessContact.find(function(err, businessContactCollection){
        if(err){
            console.error(err);
            res.end(err);
        }
        res.render('index',{title:'Business Contact', page:'business_contact', business_contact: businessContactCollection, displayName: UserDisplayName(req)});
    });
}

export function DisplayAddPage(req: express.Request, res: express.Response, next: express.NextFunction)
{

}
export function DisplayEditPage(req: express.Request, res: express.Response, next: express.NextFunction)
{

}
export function ProcessAddPage(req: express.Request, res: express.Response, next: express.NextFunction)
{

}
export function ProcessDeletePage(req: express.Request, res: express.Response, next: express.NextFunction)
{

}