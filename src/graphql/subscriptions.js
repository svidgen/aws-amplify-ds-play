/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
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
export const onCreateOrderProducts = /* GraphQL */ `
  subscription OnCreateOrderProducts {
    onCreateOrderProducts {
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
export const onUpdateOrderProducts = /* GraphQL */ `
  subscription OnUpdateOrderProducts {
    onUpdateOrderProducts {
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
export const onDeleteOrderProducts = /* GraphQL */ `
  subscription OnDeleteOrderProducts {
    onDeleteOrderProducts {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
