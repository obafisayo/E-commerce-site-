import React, { useContext, useState } from "react";
import NotFound from "../../pages/LandingPage/NotFound";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import { TbTruckDelivery } from "react-icons/tb";
import { TfiReload } from "react-icons/tfi";
import { FiMinus, FiPlus } from "react-icons/fi";
import Ratings from "../shared/ratings/Ratings";
import ItemsContainer from "../itemscontainer/ItemsContainer";
import Productsbox from "../shared/productsbox/Productsbox";
import HeartIcon from "../shared/hearticon/HeartIcon";
import { WishContext } from "../../contexts/wishcontext";
import { CartContext } from "../../contexts/cartcontext";
import { NavLink } from "react-router-dom";
import { CART } from "../../routes/RouteConstants";

const ProductDetails = ({ data, relatedproductsconfig }) => {
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [isClicked, setIsClicked] = useState([false, true]);
    const [itemCount, setItemCount] = useState(1);

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };

    const { addItemToCart } = useContext(CartContext);  
    const handleItemCountChange = (operation) => {
        if (operation === "increment") {
            setItemCount(itemCount + 1);
            setIsClicked([false, true])
        } else if (operation === "decrement" && itemCount > 1) {
            setItemCount(itemCount - 1);
            setIsClicked([true, false])
        }
    };

    const handleAddToCart = () => {
        const item = { ...data, color: selectedColor, size: selectedSize, count: itemCount };
        addItemToCart(item, itemCount);
    };

    const { wishItemsArray } = useContext(WishContext);
    const isInWishList = wishItemsArray && data && wishItemsArray.some((item) => item.id === data.id);

return (
    <div className="container">
    {data ? (
        <section>
            <div className="container">
                <Breadcrumb />
                <div className="mt-20 flex flex-col lg:flex-row justify-between gap-14 mb-20">
                    <div className="flex flex-col lg:flex-row lg:w-3/5 gap-5">
                        <div className="order-2 lg:order-1 flex lg:flex-col gap-3 justify-between">
                            <div className="p-1 bg-secondary"><img className="w-[121px]" src={data.image} alt="" /></div>
                            <div className="p-1 bg-secondary"><img className="w-[121px]" src={data.image} alt="" /></div>
                            <div className="p-1 bg-secondary"><img className="w-[121px]" src={data.image} alt="" /></div>
                            <div className="p-1 bg-secondary"><img className="w-[121px]" src={data.image} alt="" /></div>
                        </div>
                        <div className="order-1 lg:order-2 bg-secondary p-4 flex items-center justify-center w-full lg:w-[500px]">
                            <img className="w-full" src={data.image} alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between lg:w-2/5 gap-5">
                        <h1 className="text-2xl font-bold">{data.name}</h1>
                        <div className="flex items-center gap-2">
                            <Ratings reviews={150} />
                            <div className="border-l-2 text-emerald-400 pl-3">In Stock</div>
                        </div>
                        <div className="text-2xl font-medium">${data.price}.00</div>
                        <div className="border-b-2 pb-6">
                            <p className="text-sm">{data.description}</p>
                        </div>
                        <div className="flex gap-6">
                            <h1 className="text-xl font-medium ">Colours:</h1>
                            <div className="flex gap-3 items-center">
                                {["#A0BCE0", "#brandRed"].map((color, index) => (
                                <div
                                    key={index}
                                    className={`cursor-pointer rounded-full p-2 border-white border-2 outline outline-black h-fit ${selectedColor === color ? "bg-brandRed" : "bg-[#A0BCE0]"}`}
                                    onClick={() => handleColorChange(color)}
                                />
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <h1 className="text-xl font-medium">Size:</h1>
                            <div className="flex gap-3">
                                {["XS", "S", "M", "L", "XL"].map((size, index) => (
                                <div
                                    key={index}
                                    className={`w-8 h-8 flex items-center justify-center text-sm font-semibold  border-2 rounded ${selectedSize === size ? "bg-brandRed text-white" : ""}`}
                                    onClick={() => handleSizeChange(size)}
                                >
                                    {size}
                                </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 lg:flex-row justify-between">
                            <div className="flex">
                                <div className={`${isClicked[0]? "bg-brandRed text-white border-red-500" : ""} flex items-center border-2 rounded-l px-2`}>
                                    <FiMinus size={25} onClick={() => handleItemCountChange("decrement")} />
                                </div>
                                <div className="flex items-center justify-center border-t-2 border-b-2 text-xl font-semibold w-16">{itemCount}</div>
                                <div className={`${isClicked[1]? "bg-brandRed text-white border-red-500" : ""} flex items-center border-2 rounded-r px-2`}>
                                    <FiPlus size={25} onClick={() => handleItemCountChange("increment")} />
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <NavLink to={CART} className={"flex items-center px-12 rounded  bg-brandRed text-white"} onClick={handleAddToCart}>
                                    Buy Now
                                </NavLink>
                                <div className="flex items-center border-2 p-1 bg-white rounded">
                                    <HeartIcon isInWishList={isInWishList} data={data}/>
                                </div>
                            </div>
                        </div>
                        <div className="border-2 rounded font-semibold">
                            <div className="p-4 flex items-center gap-5">
                                <TbTruckDelivery size={40}/>
                                <div>
                                    <h1 className="text-lg">Free Delivery</h1>
                                    <p className="underline text-sm">Enter your postal code for Delivery Availability</p>
                                </div>
                            </div>
                            <div className="border-t-2 p-4 flex items-center gap-5">
                                <TfiReload size={30}/>
                                <div>
                                    <h1 className="text-lg">Return Delivery</h1>
                                    <p className="text-sm">Free 30 Days Delivery Return. <span className="underline">Details</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ItemsContainer
                productclass={"related-products"}
                title={"Related Products"}
                >
                {relatedproductsconfig && Array.isArray(relatedproductsconfig) && (
                    <div className={`inline-flex gap-4`}>
                    {relatedproductsconfig.map((data, index) => (
                        <Productsbox key={index}
                        id={data.id}
                        discount={data.discount}
                        image={data.image}
                        name={data.name}
                        price={data.price}
                        rating={data.starRating}
                        slashprice={data.slashprice}
                        />
                    ))}
                    </div>
                )}
                </ItemsContainer>
            </div>
        </section>
    ) : (
        <NotFound />
    )}
    </div>
  );
};

export default ProductDetails;
