import React, { useContext } from 'react';
import Breadcrumb from '../../../components/breadcrumb/Breadcrumb';
import PrimaryButton from '../../../components/shared/primarybutton/PrimaryButton';
import { CHECKOUT, HOME } from '../../../routes/RouteConstants';
import { RxCaretDown } from "react-icons/rx";
import { RxCaretUp } from "react-icons/rx";
import { IoClose } from 'react-icons/io5';
import { CartContext } from '../../../contexts/cartcontext';

const Cart = () => {
  const { cartItemsArray, setCartItemsArray, removeItemFromCart, decrementItemCount, incrementItemCount, cartTotal } = useContext(CartContext);

  const handleItemCountChange = (id, operation) => {
    if (operation === "increment") {
      incrementItemCount(cartItemsArray.find(item => item.id === id));
    } else if (operation === "decrement") {
      decrementItemCount(cartItemsArray.find(item => item.id === id));
    }
  };

  const handleRemoveFromCart = (id) => {
    removeItemFromCart(cartItemsArray.find(item => item.id === id));
  };

  const handleClick = () => {
    setCartItemsArray([])
  }

  const Details = ({ item }) => {
    return (
      <div className="flex py-6 px-12 shadow-md font-semibold group">
        <div className="w-1/4 flex items-center justify-start gap-4 max-md:flex-col">
          <div className="w-[54px] relative">
            <img className="" src={item.image} alt={item.name} />
            <div className="hidden cursor-pointer absolute -top-1 -left-1 rounded-[100%] bg-red-500 w-4 group-hover:flex justify-center">
              <IoClose className="p-[1px] text-white" onClick={() => handleRemoveFromCart(item.id)}/>
            </div>
          </div>
          <h1 className="max-lg:text-sm">{item.name}</h1>
        </div>
        <div className="w-1/4 flex items-center justify-center">
          <h1>${item.price}</h1>
        </div>
        <div className="w-1/4 flex items-center justify-center">
          <div className="w-[72px] flex justify-between items-center border-gray-500/30 border-2 p-2 rounded-md">
            <h1>{item.count.toString().padStart(2, '0')}</h1>
            <div className="">
              <RxCaretUp size={20} className="-my-1 hover:text-red-500" onClick={() => handleItemCountChange(item.id, "increment")} />
              <RxCaretDown size={20} className="-my-1 hover:text-red-500" onClick={() => handleItemCountChange(item.id, "decrement")} />
            </div>
          </div>
        </div>
        <div className="w-1/4 flex items-center justify-end">
          <h1>{`$${item.count * item.price}`}</h1>
        </div>
      </div>
    );
  };

  return (
    <main>
      <div className="container">
        <div className="container">
          <Breadcrumb />
        </div>
        <section className="mt-20">
          <div className="container">
            <div className="flex flex-col gap-16">
              <div className="flex flex-col gap-8">
                <div className="flex py-6 px-12 max-md:px-6 shadow-md font-semibold">
                  {["Product", "Price", "Quantity", "Subtotal"].map((item, index) => (
                    <div key={index} className={`w-1/4 flex items-center 
                      ${index === 0? "": index === 3? "justify-end": "justify-center"}`}>
                      <h1>{item}</h1>
                    </div>
                  ))}
                </div>
                {cartItemsArray.map((item) => (
                  <Details item={item} key={item.id} />
                ))}
                <div className="flex justify-between">
                  <PrimaryButton
                    text={"Return To Shop"}
                    border={"border-2 font-medium"}
                    bgColor={"bg-transparent"}
                    textColor={"text-black"}
                    to={HOME}
                  />
                  <PrimaryButton
                    text={"Clear Cart"}
                    border={"border-2 font-medium"}
                    bgColor={"bg-transparent"}
                    textColor={"text-black"}
                    handler={handleClick}
                  />
                </div>
              </div>
              <div className="flex justify-between max-md:flex-col max-md:gap-20">
                <div className="flex gap-4 h-14 max-md:flex-col">
                  <input type="text" name="coupon" id="coupon"
                    placeholder="Coupon Code"
                    className="border-2 px-6 py-3 rounded-md border-black/50"
                  />
                  <div className="w-fit flex">
                    <PrimaryButton bgColor={"bg-brandRed"}
                      text={"Apply Coupon"}
                      textColor={'text-white'}
                    />
                  </div>
                </div>
                <div className="flex flex-col border-2 border-black rounded-md w-[470px] max-md:w-full py-7 px-5">
                  <h1 className="font-semibold text-xl mb-6">Cart Total</h1>
                  <div className="flex flex-col divide-y-2 gap-5 mb-5">
                    <div className="flex justify-between font-semibold">
                      <h1>Subtotal: </h1>
                      <h1>${cartTotal}</h1>
                    </div>
                    <div className="flex justify-between font-semibold pt-5">
                      <h1>Shipping: </h1>
                      <h1>Free</h1>
                    </div>
                    <div className="flex justify-between font-semibold pt-5">
                      <h1>Total: </h1>
                      <h1>${cartTotal}</h1>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <PrimaryButton bgColor={"bg-brandRed"}
                      text={"Proceed to checkout"}
                      textColor={'text-white'}
                      to={CHECKOUT}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Cart;