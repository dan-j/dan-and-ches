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
  router.get('/invite', (req, res) => {
    const { to } = req.query;
    const { user } = req;

    User.findOne(user._id, '+pin +email', (err, result) => contactController.sendInvitation(
      to, {
        name: user.name,
        email: result.email,
        pin: result.pin,
      }).then((info) => res.json(info))
        .catch(err2 => res.status(500).json(err2)));
  });
}

export default router;
