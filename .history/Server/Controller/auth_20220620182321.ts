import express from 'express';
import passport from 'passport';
//need to include the user model for auth functions
import User from '../Models/user';

//display
export function DisplayLoginPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index',{title: 'Login', page: 'login', message: req.flash('loginMessage'), displayName: ''});   
}
export function DisplayRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index',{title: 'Register', page: 'register', message: req.flash('registerMessage'), displayName: ''});   
}
//process
export function ProcessLoginPage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
    passport.authenticate('local', function(err, user, info)
    {
        // are there server errors?
        if(err)
        {
            console.error(err);
            res.end(err);
        }

        // are there login errors?
        if(!user)
        {
            req.flash('loginMessage', 'Authentication Error!');
            return res.redirect('/login');
        }

        // no problems - we have a good username and password combination
        req.logIn(user, function(err)
        {
            // are there db errors?
            if(err)
            {
                console.error(err);
                res.end(err);
            }

            return res.redirect('/movie-list');
        });
    })(req, res, next);
}

export function ProcessRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    
}
export function ProcessLogoutPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
   
}

