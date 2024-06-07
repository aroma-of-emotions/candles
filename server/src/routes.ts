import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import config from './config';
import { Candle, User, CartItem } from './models';
import { authenticateToken } from './authMiddleware'; // Adjust path as necessary
import { callYandexApi } from './gpt';

const router = express.Router();

router.post('/register', async (req, res) => {
  const { email, password, username } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await User.create({
      email,
      password: hashedPassword,
      username,
    });
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send('Error creating user');
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password || ''))) {
    return res.status(401).send('Invalid email or password');
  }
  const token = jwt.sign({ id: user.id }, config.jwtSecret);
  delete user.password;
  user.password = undefined;
  res.send({ token, user });
});

router.get('/candles', async (req, res) => {
  try {
    let candles = await Candle.findAll();
    if (candles.length === 0) {
      // Define default candles
      const defaultCandles = [
        {
          name: 'Титаник',
          price: 1599,
          description: 'Нежный аромат розы и мускуса.',
          artStyle: 'Фильм',
          imageUrl: '/candles/candles-img/titanic.png',
        },
        {
          name: 'Утро в сосновом лесу',
          price: 1599,
          description: 'Свежий аромат сосновой хвои утром.',
          artStyle: 'Пейзаж',
          imageUrl: '/candles/candles-img/forest.png',
        },
        {
          name: 'Лилии',
          price: 1499,
          description: 'Нежный аромат лилий и воды.',
          artStyle: 'Флора',
          imageUrl: '/candles/candles-img/flowers.png',
        },
        {
          name: 'Маленький принц',
          price: 1799,
          description: 'Тонкий аромат розы и кожи.',
          artStyle: 'Книга',
          imageUrl: '/candles/candles-img/prince.png',
        },
        {
          name: 'Skrillex bangarang',
          price: 666,
          description: 'Ваш любимый трек в формате свечи!',
          artStyle: 'banger',
          imageUrl: '/candles/candles-img/bangarang.webp',
        },
        // Add more candles if needed
      ];
      candles = await Candle.bulkCreate(defaultCandles);
    }
    res.json(candles);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post('/cart', authenticateToken, async (req: any, res) => {
  try {
    const { candleId, quantity } = req.body;
    const userId = req.user.id; // Assuming id is part of the JWT payload
    const item = await CartItem.create({ userId, candleId, quantity });
    res.status(201).json(item);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Get user's cart items with authentication
router.get('/cart', authenticateToken, async (req: any, res) => {
  try {
    const userId = req.user.id;
    const items = await CartItem.findAll({
      where: { userId },
      include: [{ model: Candle, as: 'candle' }],
    });
    res.json(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Remove item from cart with authentication
router.delete('/cart/:itemId', authenticateToken, async (req: any, res) => {
  try {
    const userId = req.user.id;
    const itemId = parseInt(req.params.itemId);
    const deleteCount = await CartItem.destroy({
      where: { id: itemId, userId }, // Ensure users can only delete their own items
    });
    if (deleteCount > 0) {
      res.status(204).send();
    } else {
      res.status(404).send('Item not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Assuming you have an endpoint /api/cart/:itemId
router.put('/cart/:itemId', authenticateToken, async (req: any, res) => {
  const { itemId } = req.params;
  const { quantity } = req.body;
  try {
    const item = await CartItem.findOne({
      where: { id: itemId, userId: req.user.id },
    });
    if (!item) return res.status(404).send('Item not found.');

    item.quantity = quantity;
    await item.save();
    res.json(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
});


router.post('/gpt-help', async (req, res) => {
  const userInput = req.body.text;
  try {
      // const iamToken = await getIamToken();
      const response = await callYandexApi(userInput);
      res.json({ message: 'Success', data: response });
  } catch (error) {
      res.status(500).json({ message: 'Error processing your request', error: error.message });
  }
});

export default router;
