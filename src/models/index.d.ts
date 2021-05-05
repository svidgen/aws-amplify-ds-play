import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Order {
  readonly id: string;
  readonly buyer_name?: string;
  readonly order_total_amount?: string;
  readonly products?: (OrderProducts | null)[];
  readonly created_at?: number;
  constructor(init: ModelInit<Order>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}

export declare class OrderProducts {
  readonly id: string;
  readonly order: Order;
  readonly product: Product;
  constructor(init: ModelInit<OrderProducts>);
  static copyOf(source: OrderProducts, mutator: (draft: MutableModel<OrderProducts>) => MutableModel<OrderProducts> | void): OrderProducts;
}

export declare class Product {
  readonly id: string;
  readonly product_name: string;
  readonly product_price: string;
  readonly created_at?: number;
  readonly orders?: (OrderProducts | null)[];
  constructor(init: ModelInit<Product>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}