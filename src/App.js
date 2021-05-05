import Amplify, { DataStore } from "aws-amplify";
import awsconfig from "./aws-exports";
import { Order, OrderProducts, Product } from "./models";
import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

// Amplify.configure(awsconfig);

window.Models = {
  Order,
  OrderProducts,
  Product,
};

window.DataStore = DataStore;

function App() {
  const executionId = new Date().getTime().toString(36);
  const [someOrder, setSomeOrder] = useState();
  const [someProduct, setSomeProduct] = useState();

  async function addData() {
    const product = await DataStore.save(
      new Product({
        product_name: "some product " + executionId,
        product_price: "12.12",
      })
    );
    console.log("created", product);
    setSomeProduct(product);

    const order = await DataStore.save(
      new Order({
        buyer_name: "Joe Schmoe " + executionId,
        order_total_amount: "24.24",
        // created_at: new Date(),
        products: [],
      })
    );
    console.log("created", order);
    setSomeOrder(order);

    const orderProduct = await DataStore.save(
      new OrderProducts({
        orderID: order.id,
        productID: product.id,
        order: order,
        product: product,
      })
    );
    console.log("created", orderProduct);
  }

  async function getData() {
    if (!someOrder) {
      console.error("Oops! Click 'Add data' before trying to Get it!");
      return;
    }

    console.log("Trying to fetch OrderProducts for:", someOrder);

    const wrongWay = await DataStore.query(OrderProducts, (op) =>
      op.order("eq", someOrder)
    );
    console.log("WRONG WAY. This should be null.", wrongWay);

    try {
      const wrongestWay = await DataStore.query(OrderProducts, (op) =>
        op.orderID("eq", someOrder.id)
      );
      console.log("If you're here, I'm confused! :D", wrongestWay);
    } catch (err) {
      console.log(
        "WRONGEST WAY. This error should say something about orderID not existing.",
        err
      );
    }

    const rightWay = (await DataStore.query(OrderProducts)).filter(
      (op) => op.order.id === someOrder.id
    );
    console.log(
      "RIGHT WAY. This should be a list of one single OrderProduct.",
      rightWay
    );
  }

  return (
    <div className="App">
      <button onClick={addData}>Add Data</button>
      <button onClick={getData}>Get Data</button>
    </div>
  );
}

export default App;
