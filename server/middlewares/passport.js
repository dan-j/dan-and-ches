import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import JsonStrategy from 'passport-json';
import winston from 'winston';
import config from '../../config';
import User from '../models/User';

// Setting username field to email rather than username
const localOptions = {
  usernameProp: 'email',
  passwordProp: 'pin',
  passReqToCallback: true,
};

const {jwt: jwtConfig} = config;

// Setting up local login strategy
const localStrategy = new JsonStrategy(localOptions, (req, email, pin, done) => {

  email = email.trim();
  pin = pin.trim();

  User.findOne({email}, '+pin +email', (err, user) => {
    if (err) {
      return done(err);
    }

    if (!user) {
      winston.info(`Failed logon attempt with non-existent email: ${email}`);
      return done(null, false, {error: 'User not found or incorrect PIN'});
    }

    user.comparePin(pin, (err, isMatch) => {
      if (err) {
        return done(err);
      }
      if (!isMatch) {
        winston.info(`Failed logon attempt with incorrect pin, email: ${email}`);
        return done(null, false, {error: 'User not found or incorrect PIN'});
      }

      req.user = user;

      return done(null, user);
    });
  });
});

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  ...jwtConfig,
};

const jwtStrategy = new JwtStrategy(opts, (jwt_payload, done) => {

  winston.info(`Verifying token for sub: ${jwt_payload.sub}`);

  User.findOne({email: jwt_payload.sub}, (err, user) => {
    if (err) {
      winston.error(`Error validating sub: ${jwt_payload.sub}: ${err}`);
      return done(err, false);
    }
    if (user) {
      done(null, user);
    } else {
      winston.info(`Invalid token provided with sub: ${jwt_payload.sub}`);
      done(null, false);
    }
  });
});


module.exports = (app) => {
  app.use(passport.initialize());
  passport.use(jwtStrategy);
  passport.use(localStrategy);
};


