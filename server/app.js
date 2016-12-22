import express from 'express';
import passport from 'passport';
import path from 'path';
import AuthController from './controllers/AuthController';
import api from './routes/api';

const app = express.Router();

const sendIndex = res => res.sendFile(path.join(__dirname, '../client/index.html'));

// Middleware to require login/auth
export const jwtVerify = passport.authenticate('jwt', { session: false });
export const localLogin = (req, res, next) => {
  passport.authenticate('json', { session: false }, (err, user, info) => {
    if (err) {
      res.status(500).json({
        ...err,
        ...info,
      });
    }

    if (!user) {
      res.status(401).json({
        ...info,
      });
    } else {
      next();
    }
  })(req, res, next);
};

/* Direct URLs return index.html so extra middlewares aren't parsed */

app.get(['', '/', '/index.html'], (req, res) => sendIndex(res));

/* use passport to extract user from db, and AuthController to create the JWT */

app.post('/login', localLogin, AuthController.login);

/* any API calls need a JWT */

app.use('/api', jwtVerify, api);

/* any other requests go to index.html */
app.get('*', (req, res) => sendIndex(res));

// this module is always imported using `require()` so export this way to avoid needing `.default`
module.exports = app;

