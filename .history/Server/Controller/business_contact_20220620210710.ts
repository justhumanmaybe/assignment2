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
    res.render('index', {title: 'Add', page: 'edit', business_contact: '', displayName: UserDisplayName(req)});
}
export function DisplayEditPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    let id = req.params.id;
    //pass id to database
    BusinessContact.findById(id, {},{}, function(err, businessContactToEdit)
    {
        if(err){
            console.error(err);
            res.end(err);
        }
        //show edit view with data
        res.render('index', {title: 'Edit', page: 'edit', business_contact: '', displayName: UserDisplayName(req)});
    })
}
export function ProcessAddPage(req: express.Request, res: express.Response, next: express.NextFunction)
{

}
export function ProcessEditPage(req: express.Request, res: express.Response, next: express.NextFunction)
{

}
export function ProcessDeletePage(req: express.Request, res: express.Response, next: express.NextFunction)
{

}