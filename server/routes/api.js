import express from 'express';
import users from './users';
import contact from './contact';

const router = express.Router();

router.use('/users', users);
router.use('/contact', contact);

router.use('*', (req, res) => res.sendStatus(404));

export default router;
