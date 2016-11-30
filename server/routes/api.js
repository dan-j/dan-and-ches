import express from 'express';
import users from './users';

const router = express.Router();

router.use('/users', users);

router.use('*', (req, res) => res.sendStatus(404));

export default router;
