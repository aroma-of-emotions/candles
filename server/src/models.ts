import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import config from './config';

const sequelize = new Sequelize(
  config.db.name,
  config.db.user,
  config.db.password,
  {
    host: config.db.host,
    port: config.db.port,
    dialect: 'postgres',
  }
);

interface UserAttributes {
  id: number;
  googleId?: string;
  email: string;
  password?: string;
  username?: string;
  name?: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number;
  public googleId?: string;
  public email!: string;
  public password?: string;
  public username?: string;
  public name?: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    googleId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'users',
  }
);

interface CandleAttributes {
  id: number;
  name: string;
  price: number;
  description: string;
  artStyle: string;
  imageUrl: string;
}

interface CandleCreationAttributes extends Optional<CandleAttributes, 'id'> {}

class Candle
  extends Model<CandleAttributes, CandleCreationAttributes>
  implements CandleAttributes
{
  public id!: number;
  public name!: string;
  public price!: number;
  public description!: string;
  public artStyle!: string;
  public imageUrl!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Candle.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    artStyle: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'candles',
  }
);

interface CartItemAttributes {
  id: number;
  userId: number;
  candleId: number;
  quantity: number; // Consider adding quantity if users can order multiple of the same candle
}

interface CartItemCreationAttributes
  extends Optional<CartItemAttributes, 'userId' | 'candleId'> {}

class CartItem
  extends Model<CartItemAttributes, CartItemCreationAttributes>
  implements CartItemAttributes
{
  public id!: number;
  public userId!: number;
  public candleId!: number;
  public quantity!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

CartItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id',
      },
      allowNull: false,
    },
    candleId: {
      type: DataTypes.INTEGER,
      references: {
        model: Candle,
        key: 'id',
      },
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'cartItems',
  }
);

// Relationship definitions
User.belongsToMany(Candle, { through: CartItem, foreignKey: 'userId' });
Candle.belongsToMany(User, { through: CartItem, foreignKey: 'candleId' });
CartItem.belongsTo(User, { foreignKey: 'userId', as: 'user' });
User.hasMany(CartItem, { foreignKey: 'userId', as: 'cartItems' });
CartItem.belongsTo(Candle, { foreignKey: 'candleId', as: 'candle' });
Candle.hasMany(CartItem, { foreignKey: 'candleId', as: 'cartItems' });

sequelize.sync();

export { User, CartItem, Candle, sequelize };
