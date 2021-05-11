/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      buyer_name
      order_total_amount
      products {
        items {
          id
          orderID
          productID
          order {
            id
            buyer_name
            order_total_amount
            products {
              nextToken
              startedAt
            }
            created_at
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          product {
            id
            product_name
            product_price
            created_at
            orders {
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      created_at
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      buyer_name
      order_total_amount
      products {
        items {
          id
          orderID
          productID
          order {
            id
            buyer_name
            order_total_amount
            products {
              nextToken
              startedAt
            }
            created_at
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          product {
            id
            product_name
            product_price
            created_at
            orders {
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      created_at
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      buyer_name
      order_total_amount
      products {
        items {
          id
          orderID
          productID
          order {
            id
            buyer_name
            order_total_amount
            products {
              nextToken
              startedAt
            }
            created_at
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          product {
            id
            product_name
            product_price
            created_at
            orders {
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      created_at
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createOrderProducts = /* GraphQL */ `
  mutation CreateOrderProducts(
    $input: CreateOrderProductsInput!
    $condition: ModelOrderProductsConditionInput
  ) {
    createOrderProducts(input: $input, condition: $condition) {
      id
      orderID
      productID
      order {
        id
        buyer_name
        order_total_amount
        products {
          items {
            id
            orderID
            productID
            order {
              id
              buyer_name
              order_total_amount
              created_at
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            product {
              id
              product_name
              product_price
              created_at
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        created_at
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      product {
        id
        product_name
        product_price
        created_at
        orders {
          items {
            id
            orderID
            productID
            order {
              id
              buyer_name
              order_total_amount
              created_at
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            product {
              id
              product_name
              product_price
              created_at
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateOrderProducts = /* GraphQL */ `
  mutation UpdateOrderProducts(
    $input: UpdateOrderProductsInput!
    $condition: ModelOrderProductsConditionInput
  ) {
    updateOrderProducts(input: $input, condition: $condition) {
      id
      orderID
      productID
      order {
        id
        buyer_name
        order_total_amount
        products {
          items {
            id
            orderID
            productID
            order {
              id
              buyer_name
              order_total_amount
              created_at
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            product {
              id
              product_name
              product_price
              created_at
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        created_at
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      product {
        id
        product_name
        product_price
        created_at
        orders {
          items {
            id
            orderID
            productID
            order {
              id
              buyer_name
              order_total_amount
              created_at
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            product {
              id
              product_name
              product_price
              created_at
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteOrderProducts = /* GraphQL */ `
  mutation DeleteOrderProducts(
    $input: DeleteOrderProductsInput!
    $condition: ModelOrderProductsConditionInput
  ) {
    deleteOrderProducts(input: $input, condition: $condition) {
      id
      orderID
      productID
      order {
        id
        buyer_name
        order_total_amount
        products {
          items {
            id
            orderID
            productID
            order {
              id
              buyer_name
              order_total_amount
              created_at
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            product {
              id
              product_name
              product_price
              created_at
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        created_at
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      product {
        id
        product_name
        product_price
        created_at
        orders {
          items {
            id
            orderID
            productID
            order {
              id
              buyer_name
              order_total_amount
              created_at
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            product {
              id
              product_name
              product_price
              created_at
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      product_name
      product_price
      created_at
      orders {
        items {
          id
          orderID
          productID
          order {
            id
            buyer_name
            order_total_amount
            products {
              nextToken
              startedAt
            }
            created_at
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          product {
            id
            product_name
            product_price
            created_at
            orders {
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      product_name
      product_price
      created_at
      orders {
        items {
          id
          orderID
          productID
          order {
            id
            buyer_name
            order_total_amount
            products {
              nextToken
              startedAt
            }
            created_at
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          product {
            id
            product_name
            product_price
            created_at
            orders {
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      product_name
      product_price
      created_at
      orders {
        items {
          id
          orderID
          productID
          order {
            id
            buyer_name
            order_total_amount
            products {
              nextToken
              startedAt
            }
            created_at
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          product {
            id
            product_name
            product_price
            created_at
            orders {
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
