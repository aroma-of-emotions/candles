import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import config from './config';
import { User } from './models';

const router = express.Router();

router.post('/register', async (req, res) => {
  const { email, password, username } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await User.create({ email, password: hashedPassword, username });
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send('Error creating user');
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user || !await bcrypt.compare(password, user.password || '')) {
    return res.status(401).send('Invalid email or password');
  }
  const token = jwt.sign({ id: user.id }, config.jwtSecret);
  res.send({ token });
});

export default router;
