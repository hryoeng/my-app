import React, { useState } from "react";
import Login from "./Login";

const USER_ID = "user";
const USER_PW = "5678";

function LoginPage(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onCheckLogin = () => {
        { USER_ID == props.id && USER_PW == props.pw 
            // props로 전달받은 id, password가 맞으면 로그인 처리
            ? setIsLoggedIn(true)
            // 틀리면 로그아웃 처리
            : setIsLoggedIn(false)
        }
    }

    const onClickLogin = () => {
        setIsLoggedIn(true);
    }

    const onClickLogout = () => {
        setIsLoggedIn(false);
    }

    return (
        <div>
        <p><span> 아이디 : {props.id}</span></p>
        <p><span> 비밀번호 : {props.pw}</span></p>
            <Login
                isLoggedIn={isLoggedIn}
                onCheckLogin={onCheckLogin}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
            />
            <div style={{ padding: 16 }}>함께하는 리액트 공부!!</div>
        </div>
    );
}

export default LoginPage;