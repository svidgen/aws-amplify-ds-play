// import Amplify, { DataStore } from "aws-amplify";
import Amplify from "@aws-amplify/core";
import { DataStore } from "@aws-amplify/datastore";
import awsconfig from "./aws-exports";
import { Order, OrderProducts, Product } from "./models";
import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

//
// We're not interested in syncing for now. We just want to demonstrate the
// local API behavior for now. If our models' auth is correct, and if we're
// authenticated accordingly, we could start syncing data by uncommenting:
//
// Amplify.configure(awsconfig);
//

//
// For easy access in the console.
//
window.DataStore = DataStore;
window.Models = {
  Order,
  OrderProducts,
  Product,
};

function App() {
  async function demo() {
    //
    // executionId
    // We just want an ID to namespace our test runs. This allows us to explore
    // the data afterwards and have confidence about which records are intended
    // to be associated with a given execution.
    //

    const executionId = new Date().getTime().toString(36);
    console.log("executionId:", executionId);

    //
    // Let's make some data.
    // We put a `Product` and `Order` into the store.
    //

    const product = await DataStore.save(
      new Product({
        product_name: "some product " + executionId,
        product_price: "12.12",
      })
    );
    console.log("created product", product);

    const order = await DataStore.save(
      new Order({
        buyer_name: "Joe Schmoe " + executionId,
        order_total_amount: "24.24",
      })
    );
    console.log("created order", order);

    //
    // We link them together in our join table (`OrderProducts`), which
    // accepts and stores references (ID's) to the previously created objects.
    //

    const orderProduct = await DataStore.save(
      new OrderProducts({
        order: order,
        product: product,
      })
    );
    console.log("created", orderProduct);

    //
    //
    // Getting the data back out depends on use-case.
    // Here are a few ways to do it, depending on your needs:
    //
    //

    const orderProductRetrieved = (await DataStore.query(OrderProducts)).filter(
      (op) => op.order.id === order.id
    );
    console.log("OrderProduct for order", orderProductRetrieved);

    //
    // Given an Order, we want to see all of the associated Products.
    //

    const productsFromOrder = (await DataStore.query(OrderProducts))
      .filter((op) => op.order.id === order.id)
      .map((op) => op.product);
    console.log("Products from a given order.", productsFromOrder);

    //
    // Given a product, we want to see all of the associated Order's.
    //

    const ordersFromProduct = (await DataStore.query(OrderProducts))
      .filter((op) => op.product.id === product.id)
      .map((op) => op.order);
    console.log("Orders from a given product.", ordersFromProduct);

    //
    // All Products ordered by customers with Schmoe in their name
    //
    const productsSchmoesBought = (await DataStore.query(OrderProducts))
      .filter((op) => op.order.buyer_name.match(/schmoe/i))
      .map((op) => op.product);
    console.log(
      "Products that Schmoe's have purchased.",
      productsSchmoesBought
    );
  }

  useEffect(() => {
    demo();
  }, []);

  return <div className="App">See the console.</div>;
}

export default App;
