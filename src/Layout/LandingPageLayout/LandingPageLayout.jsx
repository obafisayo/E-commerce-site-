import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Topheader from '../../components/topheader/Topheader';

function LandingPageLayout() {
    return (
        <div>
            <Topheader />
            <Header wishNcart />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default LandingPageLayout;