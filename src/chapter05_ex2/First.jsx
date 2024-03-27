import React from "react";
import "./first.css";
import Footer from "./Footer";
import TimeArea from "./TimeArea";
import Header from "./Header";

function First() {
    return (
        <div>
            <Header />
            <TimeArea />
            <Footer school='부산IT교육센터' />
        </div>
    );
}

export default First;