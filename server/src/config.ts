import dotenv from 'dotenv';

dotenv.config();

export default {
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID || '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    callbackURL: process.env.GOOGLE_CALLBACK_URL || ''
  },
  jwtSecret: process.env.JWT_SECRET || '',
  db: {
    host: process.env.DB_HOST || '',
    port: Number(process.env.DB_PORT) || 5432,
    name: process.env.DB_NAME || '',
    user: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || ''
  }
};