import express from 'express';
import ContactController from '../controllers/ContactController';
import configLoader from '../config-loader';
import User from '../models/User';

const router = express.Router();
const { email } = configLoader();
const contactController = new ContactController(email.transportOptions, email.defaults);

router.get('/hello', (req, res) => {
  const { to, subject } = req.query;

  return contactController.sendEmail(to, subject, '<h1>Hello</h1><p>This is an emails</p>')
    .then(() => res.json({ message: 'success' }))
    .catch((err) => res.status(500).json({ message: err }));
});

if (process.env.NODE_ENV === 'development') {
  // this sends an email to the logged in user with the invitation details of ?to=
  router.get('/invite-test', (req, res) => {
    const { to } = req.query;

    User.findByEmail(to.trim().toLowerCase(),
      (err, result) => contactController.sendInvitation(req.user.email, {
        name: result.name,
        email: result.email,
        pin: result.pin,
      }).then((info) => res.json(info))
        .catch(err2 => res.status(500).json(err2)));
  });

  router.get('/invite-all', (req, res) => {
    User.find({}, '+pin', (err, users) => {
      Promise.all(users.map(user => contactController.sendInvitation(req.user.email, {
        name: user.name,
        email: user.email,
        pin: user.pin,
      }))).then((result) => {
        res.json(result);
      }).catch(err2 => res.status(500).json(err2));
    });
  });
}

export default router;
