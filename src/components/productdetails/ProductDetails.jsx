import React from "react";
import NotFound from "../../pages/LandingPage/NotFound";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import { TbTruckDelivery } from "react-icons/tb";
import { TfiReload } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import { FiMinus, FiPlus } from "react-icons/fi";
import Ratings from "../shared/ratings/Ratings";

const ProductDetails = ({ data }) => {
  return (
    <div className="container">
      {data ? (
        <section>
            <div className="container">
                <Breadcrumb />
                <div className="mt-20 flex justify-between gap-14">
                    <div className="flex w-3/5 gap-5 order-1">
                        <div className="order-1 flex flex-col gap-3 justify-between">
                            <div className="p-1 bg-secondary"><img className="w-[121px]" src={data.image} alt="" /></div>
                            <div className="p-1 bg-secondary"><img className="w-[121px]" src={data.image} alt="" /></div>
                            <div className="p-1 bg-secondary"><img className="w-[121px]" src={data.image} alt="" /></div>
                            <div className="p-1 bg-secondary"><img className="w-[121px]" src={data.image} alt="" /></div>
                        </div>
                        <div className="bg-secondary p-4 flex items-center justify-center order-2 w-[500px]">
                            <img src={data.image} alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between order-2 w-2/5">
                        <h1 className="text-2xl font-bold">{data.name}</h1>
                        <div className="flex items-center gap-2">
                            <Ratings reviews={150} />
                            <div className="border-l-2 text-emerald-400 pl-3">In Stock</div>
                        </div>
                        <div className="text-2xl font-medium">${data.price}.00</div>
                        <div className="p-4 border bg-blue-500"></div>
                        <div className="flex gap-6">
                            <h1 className="text-xl font-medium ">Colours:</h1>
                            <div className="flex gap-3 items-center">
                                <div className="rounded-full p-2 border-white border-2 outline outline-black bg-[#A0BCE0] h-fit"></div>
                                <div className="rounded-full p-2 border-brandRed border-2 outline outline-brandRed bg-brandRed h-fit"></div>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <h1 className="text-xl font-medium">Size:</h1>
                            <div className="flex gap-3">
                                <div className="w-8 h-8 flex items-center justify-center text-sm font-semibold  border-2 rounded">XS</div>
                                <div className="w-8 h-8 flex items-center justify-center text-sm font-semibold  border-2 rounded">S</div>
                                <div className="w-8 h-8 flex items-center justify-center text-sm font-semibold  border-2 rounded text-white bg-brandRed border-brandRed">M</div>
                                <div className="w-8 h-8 flex items-center justify-center text-sm font-semibold  border-2 rounded">L</div>
                                <div className="w-8 h-8 flex items-center justify-center text-sm font-semibold  border-2 rounded">XL</div>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex">
                                <div className="flex items-center border-2 rounded-l px-2"><FiMinus size={30}/></div>
                                <div className="flex items-center border-t-2 border-b-2 px-10 text-xl font-semibold">2</div>
                                <div className="flex items-center border-2 rounded-r border-red-500 px-2 text-white bg-brandRed"><FiPlus size={30}/></div>
                            </div>
                            <div className="flex items-center px-12 rounded  bg-brandRed text-white">
                                Buy Now
                            </div>
                            <div className="flex items-center border-2 p-1 bg-white rounded">
                                <CiHeart size={36} />
                            </div>
                        </div>
                        <div className="border-2 rounded font-semibold">
                            <div className="p-4 flex items-center gap-5">
                                <TbTruckDelivery size={40}/>
                                <div>
                                    <h1 className="text-lg">Free Delivery</h1>
                                    <p className="underline text-sm">enter your postal code for Delivery Availability</p>
                                </div>
                            </div>
                            <div className="border-t-2 p-4 flex items-center gap-5">
                                <TfiReload size={35}/>
                                <div>
                                    <h1 className="text-lg">Return Delivery</h1>
                                    <p className="text-sm">Free 30 Days Delivery Return. <span className="underline">Details</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default ProductDetails;