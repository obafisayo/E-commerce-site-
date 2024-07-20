import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { PRODUCTS } from '../../../routes/RouteConstants';
import Ratings from '../ratings/Ratings';
import HeartIcon from '../hearticon/HeartIcon';
import HideIcon from '../hideicon/HideIcon';
import { IoCartOutline } from "react-icons/io5";
import DeleteIcon from '../deleteicon/DeleteIcon';
import { WishContext } from '../../../contexts/wishcontext';
import { CartContext } from '../../../contexts/cartcontext';

const Productsbox = ({id, image, discount, name, price, slashprice, rating, deleteicon}) => {
  const { wishItemsArray } = useContext(WishContext);

  const isInWishList = wishItemsArray.some((item) => item.id === id);

  const { addItemToCart, cartItemsArray } = useContext(CartContext);

  const handleAddToCart = () => {
    const item = { id, image, name, price, slashprice, rating };
    addItemToCart(item);
  };

  const cartItem = cartItemsArray.find((item) => item.id === id);
  const count = cartItem ? cartItem.count : 0;

  let carttext = "Add To Cart";
  if (cartItemsArray.find((item) => item.id === id)) {
    carttext = "Added"
  }
  return (
    <div className="h-[350px] w-[270px] group">
      <div className="bg-secondary h-3/4 flex justify-center items-center relative rounded">
        <NavLink to={`${PRODUCTS}/${id}`} className={"cursor-pointer"}>
          <div className="p-10">
            <img src={image} alt="product-img"/>
          </div>
        </NavLink>
        {discount && <div className="absolute top-3 left-3 bg-brandRed
        text-white py-1 px-3 rounded-md">{`${discount}%`}</div>}
        {deleteicon? <div className="absolute top-3 right-3">
          <div className="cursor-pointer p-1 rounded-full bg-white text-black z-20">
            <DeleteIcon data={{ id, image, discount, name, price, slashprice, rating }} />
          </div>
        </div> :
        <div className="absolute top-3 right-3 flex flex-col gap-4">
          <div className="cursor-pointer p-1 rounded-full bg-white text-black z-20">
            <HeartIcon isInWishList={isInWishList} data={{ id, image, discount, name, price, slashprice, rating }} />
          </div>
          <div className="cursor-pointer p-1 rounded-full bg-white text-black">
            <HideIcon />
          </div>
        </div>}
        <div className="absolute cursor-pointer group-hover:bg-black bottom-0 w-full transition-all
          duration-300 rounded-b flex items-center justify-center group-hover:py-2 gap-2"
          onClick={handleAddToCart}>
            <div className="relative">
              <IoCartOutline size={24} className="text-transparent group-hover:text-white" />
              {count > 0 && !isNaN(count) && <div className="hidden absolute group-hover:-top-1 -right-1 rounded-[100%] group-hover:bg-red-500 w-4 group-hover:flex justify-center">
                  <h1 className="text-xs text-white">{count}</h1>
              </div>}
            </div>
          <h1 className="text-transparent group-hover:text-white">{carttext}</h1>
        </div>
      </div>
      <div className="h-1/4 flex justify-start items-end text-gray-500 font-medium ">
        <NavLink to={`${PRODUCTS}/${id}`}>
          <div className="flex flex-col w-3/4">
            <div className="text-sm font-semibold text-black">{name}</div>
            <div className="flex gap-3">
              <h3 className="text-brandRed">{`$${price}`}</h3>
              <h3 className="line-through">{`$${slashprice}`}</h3>
            </div>
            {rating && <Ratings rating={rating} />}
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Productsbox;