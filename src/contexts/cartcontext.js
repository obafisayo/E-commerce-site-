import { createContext, useState } from "react";

export const CartContext = createContext(null);

const CartContextProvider = ({ children }) => {
  const [cartItemsArray, setCartItemsArray] = useState([]);

  const addItemToCart = (item, count = 1) => {
    const exists = cartItemsArray.find((existingItem) => {
      return existingItem.id === item.id;
    });
  
    if (!exists) {
      setCartItemsArray((prevItems) => [...prevItems, { ...item, count }]);
    } else {
      setCartItemsArray((prevItems) => prevItems.map((prevItem) => {
        if (prevItem.id === item.id) {
          return { ...prevItem, count: prevItem.count + count };
        }
        return prevItem;
      }));
    }
  };

  const removeItemFromCart = (item) => {
    setCartItemsArray((prevItems) => prevItems.filter((prevItem) => prevItem.id !== item.id));
  };

  const decrementItemCount = (item) => {
    setCartItemsArray((prevItems) => prevItems.map((prevItem) => {
      if (prevItem.id === item.id) {
        if (prevItem.count > 1) {
          return { ...prevItem, count: prevItem.count - 1 };
        } else {
          return null;
        }
      }
      return prevItem;
    }).filter(Boolean));
  };

  const incrementItemCount = (item) => {
    setCartItemsArray((prevItems) => prevItems.map((prevItem) => {
      if (prevItem.id === item.id) {
        return { ...prevItem, count: prevItem.count + 1 };
      }
      return prevItem;
    }));
  };

  const noOfCartItems = cartItemsArray.length;

  const cartTotal = cartItemsArray.reduce((acc, item) => acc + item.price * item.count, 0);

  const value = {
    cartItemsArray,
    addItemToCart,
    removeItemFromCart,
    decrementItemCount,
    incrementItemCount,
    noOfCartItems,
    cartTotal,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;