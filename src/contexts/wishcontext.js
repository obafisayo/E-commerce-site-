import { createContext, useState } from "react";

export const WishContext = createContext(null);

const WishContextProvider = ({ children }) => {
  const [wishItemsArray, setWishItemsArray] = useState([]);

  const addItemToWishList = (item) => {
    const exists = wishItemsArray.find((existingItem) => {
      return existingItem.id === item.id;
    });

    if (!exists) {
      setWishItemsArray((prevItems) => [...prevItems, item]);
    }
  };

  const removeItemFromWishList = (item) => {
    setWishItemsArray((prevItems) => prevItems.filter((prevItem) => prevItem.id !== item.id));
  };

  const noOfWishItems = wishItemsArray.length;

  const value = {
    wishItemsArray,
    addItemToWishList,
    removeItemFromWishList,
    noOfWishItems,
  };

  return (
    <WishContext.Provider value={value}>
      {children}
    </WishContext.Provider>
  );
};

export default WishContextProvider;