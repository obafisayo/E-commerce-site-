import React, { useContext } from 'react'
import Breadcrumb from '../../../components/breadcrumb/Breadcrumb'
import { CartContext } from '../../../contexts/cartcontext';
import PrimaryButton from '../../../components/shared/primarybutton/PrimaryButton';
import { HOME } from '../../../routes/RouteConstants';
import { IoClose } from 'react-icons/io5';
import bankicons from '../../../assets/static/bankicons.png'

const Checkout = () => {
  const { cartItemsArray, removeItemFromCart, cartTotal } = useContext(CartContext);
  const handleRemoveFromCart = (id) => {
    removeItemFromCart(cartItemsArray.find(item => item.id === id));
  };
  return (
    <main>
      <div className="container">
        <div className="container">
          <Breadcrumb />
        </div>
        <section className="mt-16">
          <div className="container">
            <div className="mb-12">
                <h1 className="sm:text-4xl font-semibold text-xl">
                  Billing Details
                </h1>
            </div>
            <div className="flex justify-between gap-36 mb-24 max-md:flex-col max-md:gap-20">
              <form action="submit" className="w-full">
                { [ ["First Name"], ["Company Name", "text"], ["Street Address"],
                    ["Apartment, floor,etc. (optional)", "text"], ["Town/City"],
                    ["Phone Number", "tel"], ["Email Address", "email"]
                  ].map((label, index) => (
                  <div className="w-full gap-2 flex flex-col mb-6" key={index}>
                    <label htmlFor={label[0]} className="">{label[0]}
                      {label[1] !== "text" && <span className="text-red-500">*</span>}
                    </label>
                    <input type={label[1]? label[1] : "text"} name={label[0]} id={label[0]} 
                      required={label[1] === "text"? false : true}
                      className="bg-secondary px-4 py-2 rounded w-full transition duration-500"
                    />
                  </div>
                ))}
                <div className="flex gap-3">
                  <input type="checkbox" name="check" id="check" />
                  <p className="text-sm font-medium">Save this information for faster check-out next time</p>
                </div>
              </form>
              <div className="flex flex-col w-full gap-6">
                {cartItemsArray && cartItemsArray.map((item, index) => (
                  <div className="flex justify-between items-center group">
                    <div key={index} className="py-2 flex gap-6 items-center">
                      <div className="relative w-12">
                        <img src={item.image} alt={item.name} />
                        <div className="hidden cursor-pointer absolute -top-1 -left-1 rounded-[100%] bg-red-500 w-4 group-hover:flex justify-center">
                          <IoClose className="p-[1px] text-white" onClick={() => handleRemoveFromCart(item.id)}/>
                        </div>
                      </div>
                      <h1 className="max-lg:text-sm font-medium text-sm">{item.name}</h1>
                    </div>
                    <div className="flex items-center justify-end">
                      <h1>{`$${item.count * item.price}`}</h1>
                    </div>
                  </div>
                ))}
                <div className="flex flex-col divide-y-2 gap-3 mb-5">
                  <div className="flex justify-between font-semibold">
                    <h1>Subtotal: </h1>
                    <h1>${cartTotal}</h1>
                  </div>
                  <div className="flex justify-between font-semibold pt-3">
                    <h1>Shipping: </h1>
                    <h1>Free</h1>
                  </div>
                  <div className="flex justify-between font-semibold pt-3">
                    <h1>Total: </h1>
                    <h1>${cartTotal}</h1>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <input type="radio" name="bank" id="bank" className="scale-150" />
                    <label htmlFor="bank" className="font-medium">Bank</label>
                  </div>
                  <div className="flex">
                    <img src={bankicons} alt="" />
                  </div>
                </div>
                <div className="flex gap-4">
                  <input type="radio" name="Cash" id="Cash" className="scale-150" />
                  <label htmlFor="Cash" className="font-medium">Cash on delivery</label>
                </div>
                <div className="flex gap-4 h-14 max-md:flex-col max-md:mb-16">
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
                <div className="flex items-center max-md:justify-end">
                  <PrimaryButton bgColor={"bg-brandRed"}
                    text={"Place Order"}
                    textColor={'text-white'}
                    to={HOME}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Checkout