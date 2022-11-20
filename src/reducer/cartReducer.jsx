const cartReducer = (state, action) => {
  if (action.type === 'ADD_TO_CART') {
    let { id, color, amount, product } = action.payload;
    // existing Product
    let existingItem = state.cart.find((curElem) => curElem.id === id + color);

    if (existingItem) {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === id + color) {
          let newAmount = curElem.amount + amount;
          if (newAmount >= curElem.max) {
            newAmount = curElem.max;
          }
          return {
            ...curElem,
            amount: newAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  if (action.type === 'SET_DECREASE') {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let decAmount = curElem.amount - 1;
        if (decAmount <= 1) {
          decAmount = 1;
        }
        return {
          ...curElem,
          amount: decAmount,
        };
      } else {
        return curElem;
      }
    });
    return {
      ...state,
      cart: updatedProduct,
    };
  }

  if (action.type === 'SET_INCREASE') {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let IncAmount = curElem.amount + 1;
        if (IncAmount >= curElem.max) {
          IncAmount = curElem.max;
        }
        return {
          ...curElem,
          amount: IncAmount,
        };
      } else {
        return curElem;
      }
    });
    return {
      ...state,
      cart: updatedProduct,
    };
  }

  if (action.type === 'REMOVE_ITEM') {
    let updatedCart = state.cart.filter(
      (curElem) => curElem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === 'CLEAR_CART') {
    return {
      ...state,
      cart: [],
    };
  }

  // if (action.type === 'CART_ITEM_VALUE') {
  //   let updatedCartValue = state.cart.reduce((acc, curElem) => {
  //     let { amount } = curElem;
  //     acc = acc + amount;
  //     return acc;
  //   }, 0);
  //   return {
  //     ...state,
  //     total_item: updatedCartValue,
  //   };
  // }

  // if (action.type === 'CART_TOTAL_PRICE') {
  //   let total_price = state.cart.reduce((acc, curElem) => {
  //     let { price, amount } = curElem;
  //     acc = acc + amount * price;
  //     return acc;
  //   }, 0);
  //   return {
  //     ...state,
  //     total_price: total_price,
  //   };
  // }

  // if (action.type === 'CART_ITEM_PRICE_TOTAL') {
  //   let { total_item, total_price } = state.cart.reduce(
  //     (acc, curElem) => {
  //       let { price, amount } = curElem;

  //       acc.total_item += amount;
  //       acc.total_price += price * amount;

  //       return acc;
  //     },
  //     {
  //       total_item: 0,
  //       total_price: 0,
  //     }
  //   );
  //   return {
  //     ...state,
  //     total_item,
  //     total_price,
  //   };
  // }

  if (action.type === "CART_ITEM_PRICE_TOTAL") {
    if(state.cart!== []){
    let { total_item, total_price } = state.cart.reduce(
      (accum, curElem) => {
        if(curElem=== []){
          return curElem
        }else{
        let { price, amount } = curElem;

        accum.total_item += amount;
        accum.total_price += price * amount;


        return accum;}

      },
      {
        total_item: 0,
        total_price: 0,
      }
    );
    return {
      ...state,
      total_item,
      total_price,
    };
  }
  }


  return state;
};

export default cartReducer;
