import dotenv from 'dotenv';

dotenv.config();

export default {
  jwtSecret: process.env.JWT_SECRET || '',
  gpt: {
    folder_id:  process.env.FOLDER_ID || '',
    api_key:  process.env.API_KEY || '',
  },
  db: {
    host: process.env.DB_HOST || '',
    port: Number(process.env.DB_PORT) || 5432,
    name: process.env.DB_NAME || '',
    user: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || ''
  }
};
