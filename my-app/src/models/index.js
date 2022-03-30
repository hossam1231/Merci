// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Product, Shop, Promotion, User, ShopProduct, PromotionProduct } = initSchema(schema);

export {
  Product,
  Shop,
  Promotion,
  User,
  ShopProduct,
  PromotionProduct
};