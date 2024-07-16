import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Topheader from "../../components/topheader/Topheader";

function AuthLayout() {
    return(
        <div>
            <Topheader />
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default AuthLayout;
