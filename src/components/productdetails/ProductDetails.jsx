import React from "react";
import NotFound from "../../pages/LandingPage/NotFound";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import { TbTruckDelivery } from "react-icons/tb";
import { TfiReload } from "react-icons/tfi";

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
                        <div className="p-4 border bg-blue-500"></div>
                        <div className="p-4 border bg-blue-500"></div>
                        <div className="p-4 border bg-blue-500"></div>
                        <div className="p-4 border bg-blue-500"></div>
                        <div className="p-4 border bg-blue-500"></div>
                        <div className="p-4 border bg-blue-500"></div>
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
                    {/* <h1>{data.name}</h1>
                    <p>{data.discount}</p>
                    <p>Price: {data.price}</p>
                    <img src={data.image} alt="" /> */}
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