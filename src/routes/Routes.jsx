import { useEffect, useState } from "react";
import { Navigate, useParams, useRoutes } from "react-router-dom";

// Routes import
import { 
    ABOUT,
    ACCOUNT,
    CART,
    CHECKOUT,
    CONTACT,
    FAQS,
    FORGOT_PASSWORD,
    HOME,
    NOTFOUND,
    PRIVACY,
    PRODUCTS,
    SECURITY,
    SIGNIN,
    SIGNUP,
    SIGNUP_OTP,
    TERMS,
    WISHLIST,
} from "./RouteConstants";

// Pages imp
import Home from "../pages/LandingPage/home/Home.jsx";
import NotFound404 from "../pages/LandingPage/NotFound.jsx";
import LandingPageLayout from "../Layout/LandingPageLayout/LandingPageLayout";
import About from "../pages/LandingPage/about/About.jsx";
import Contact from "../pages/LandingPage/contact/Contact.jsx";
import ForgotPassword from "../pages/AuthPage/ForgotPassword.jsx";
import CreateAcct from "../pages/AuthPage/CreateAcct.jsx";
import Signin from "../pages/AuthPage/Signin.jsx";
import AuthLayout from "../Layout/AuthLayout/AuthLayout";
import Faq from "../pages/LandingPage/faq/Faq.jsx";
import Terms from "../pages/LandingPage/terms/Terms.jsx";
import Privacy from "../pages/LandingPage/privacy/Privacy.jsx";
import Security from "../pages/LandingPage/security/Security.jsx";
import { productsconfig } from "../config/config.js";
import ProductDetails from "../components/productdetails/ProductDetails.jsx";
import { relatedconfig } from "../config/relatedconfig.js";
import Wishlist from "../pages/LandingPage/wishlist/Wishlist.jsx";
import Cart from "../pages/LandingPage/cart/Cart.jsx";
import Checkout from "../pages/LandingPage/checkout/Checkout.jsx";
import Account from "../pages/LandingPage/account/Account.jsx";

export default function Router() {
    function FindIdConfigDetails({ config }) {
        const { id } = useParams();
        const [data, setData] = useState(null);
    
        useEffect(() => {
            const foundItem = config.find((item) => item.id.toString() === id);
            if (foundItem) {
            setData(foundItem);
            } else {
            setData(null);
            }
        }, [id, config]);
        return <ProductDetails data={data} relatedproductsconfig={relatedconfig}/>;
    }
    return useRoutes([
        {
            path: HOME,
            element: <LandingPageLayout />,
            children: [
                {
                    path: HOME,
                    element: <Home />
                },
                {
                    path: ABOUT,
                    element: <About />
                },
                {
                    path: CONTACT,
                    element: <Contact />
                },
                {
                    path: FAQS,
                    element: <Faq />
                },
                {
                    path: WISHLIST,
                    element: <Wishlist />
                },
                {
                    path: CART,
                    element: <Cart />
                },
                {
                    path: CHECKOUT,
                    element: <Checkout />
                },
                {
                    path: TERMS,
                    element: <Terms />
                },
                {
                    path: PRIVACY,
                    element: <Privacy />
                },
                {
                    path: SECURITY,
                    element: <Security />
                },
                {
                    path: ACCOUNT,
                    element: <Account />
                },
                {
                    path: `${PRODUCTS}/:id`,
                    element: <FindIdConfigDetails config={productsconfig}/>
                }
            ]
        },
        {
            path: ACCOUNT,
            element: <AuthLayout />,
            children: [
                {
                    path: SIGNIN,
                    element: <Signin />
                },
                {
                    path: SIGNUP,
                    element: <CreateAcct />
                },
                {
                    path: FORGOT_PASSWORD,
                    element: <ForgotPassword />
                },
                {
                    path: SIGNUP_OTP,
                    element: <SIGNUP_OTP />
                },
                {
                    path: NOTFOUND, element: <NotFound404 />
                },
                {
                    path: '*', element: <Navigate to={`/${NOTFOUND}`} replace />
                }
            ]
        },
        { path: '*', element: <NotFound404 /> }
    ]);
}
