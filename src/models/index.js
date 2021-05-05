// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Order, OrderProducts, Product } = initSchema(schema);

export {
  Order,
  OrderProducts,
  Product
};