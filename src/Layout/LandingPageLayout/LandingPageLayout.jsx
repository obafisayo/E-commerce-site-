import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Topheader from './topheader/Topheader';

function LandingPageLayout() {
    return (
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

export default LandingPageLayout;