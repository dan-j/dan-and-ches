import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import JsonStrategy from 'passport-json';
import winston from 'winston';
import configLoader from '../config-loader';
import User from '../models/User';

// Setting username field to email rather than username
const localOptions = {
  usernameProp: 'email',
  passwordProp: 'pin',
  passReqToCallback: true,
};

const { jwt: jwtConfig } = configLoader();

// Setting up local login strategy
const localStrategy = new JsonStrategy(localOptions, (req, email, pin, done) => {
  const trimmedEmail = email.trim();
  const trimmedPin = pin.trim();

  User.findOne({ email: trimmedEmail }, '+pin +email', (err, user) => {
    if (err) {
      done(err);
    }

    if (!user) {
      winston.info(`Failed logon attempt with non-existent email: ${email}`);
      done(null, false, { message: 'User not found or incorrect PIN' });
    }

    user.comparePin(trimmedPin, (pinErr, isMatch) => {
      if (pinErr) {
        done(pinErr);
      }
      if (!isMatch) {
        winston.info(`Failed logon attempt with incorrect pin, email: ${email}`);
        done(null, false, { message: 'User not found or incorrect PIN' });
      }

      Object.assign(req, { user });

      done(null, user);
    });
  });
});

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  ...jwtConfig,
};

const jwtStrategy = new JwtStrategy(opts, (jwtPayload, done) => {
  winston.info(`Verifying token for sub: ${jwtPayload.sub}`);

  User.findOne({ email: jwtPayload.sub }, (err, user) => {
    if (err) {
      winston.error(`Error validating sub: ${jwtPayload.sub}: ${err}`);
      done(err, false);
    }
    if (user) {
      done(null, user);
    } else {
      winston.info(`Invalid token provided with sub: ${jwtPayload.sub}`);
      done(null, false);
    }
  });
});

module.exports = (app) => {
  app.use(passport.initialize());
  passport.use(jwtStrategy);
  passport.use(localStrategy);
};
