import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import config from './config';
import auth from './auth';
import routes from './routes';
import { sequelize } from './models';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

console.log(config);
sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to PostgreSQL');

    app.use(passport.initialize());
    auth(app);
    app.use('/api', routes);

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('Failed to connect to PostgreSQL', err);
  });
