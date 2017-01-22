import express from 'express';
import winston from 'winston';
import User from '../models/User';

const router = express.Router();

router.get('/', (req, res) => {
  winston.log('trace', 'Getting all users');
  User.find({}, (err, users) => {
    res.status(200).json(users);
  });
});

router.post('/me/rsvp', (req, res) => {
  const { user } = req;
  winston.info(`received RSVP for user ${user.email}`);

  user.rsvp = req.body;
  user.save((err) => {
    if (!err) {
      console.log('User updated! sending 200 response');
      res.status(200).json(user);
    } else {
      console.log(`Unable to save user: ${err}`);
      res.sendStatus(500);
    }
  });

});

router.get('/me', (req, res) => {
  const { user } = req;
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(500).json({
      message: 'Internal Server Error: User was authorised but couldn\'t be extracted from' +
      ' request',
    });
  }
});

router.get('/:emails', (req, res) => {
  const email = req.params.email;
  winston.log('trace', `Finding user by email: ${email}`);
  User.findOne({ email }, (err, user) => {
    if (err) {
      winston.error(`Error occurred retrieving user. ${err}`);
      res.sendStatus(500);
    }
    if (user) {
      res.status(200).json(user);
    } else {
      res.sendStatus(404);
    }
  });
});

export default router;
