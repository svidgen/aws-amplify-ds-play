/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncOrders = /* GraphQL */ `
  query SyncOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncOrderProducts = /* GraphQL */ `
  query SyncOrderProducts(
    $filter: ModelOrderProductsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrderProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getOrderProducts = /* GraphQL */ `
  query GetOrderProducts($id: ID!) {
    getOrderProducts(id: $id) {
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
export const listOrderProductss = /* GraphQL */ `
  query ListOrderProductss(
    $filter: ModelOrderProductsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderProductss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncProducts = /* GraphQL */ `
  query SyncProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
