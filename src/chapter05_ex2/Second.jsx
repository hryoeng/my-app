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
            <ul>
                <Pet name="라이언" species="cat" age="5" />
                <Pet name="울버린" species="dog" age="2" />
                <Pet name="토끼" species="cat" age="3" />
            </ul>
            <Footer school="부산IT교육센터" />
        </div>
    );
}

function Pet(props) {
    return (
        <li>{props.name}은(는) {props.species}이고 {props.age}살 입니다.</li>
    );
}


export default First;