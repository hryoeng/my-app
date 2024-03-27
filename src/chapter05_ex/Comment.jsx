import React from "react";
import UserInfo from "./UserInfo";
import "./comment.css";

function formatDate(date) {
    const current = new Date(date);
    const hour = current.getHours();
    const minute = current.getMinutes();
    const second = current.getSeconds();

    return <h2>현재 시간 : {`${hour}:${minute}:${second}`}</h2>
}

function Comment(props) {

    props = {
        author: {
          name:"길동이",
          avatarUrl:"https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        },
        text:"제 프로필 입니다",
        date:Date.now(),
    }


    return (
        <div className="comment wrapper">
            {/* UserInfo */}
            <UserInfo user={props.author}/>

            <div className="contentContainer">
                <div className="user-info-name nameText">
                    {props.author.name}
                </div>

                <div className="comment-text commentText">
                    {props.text}
                </div>

                <div className="comment-date commentText">
                    {formatDate(props.date)}
                </div>
            </div>
        </div>
    );
}

export default Comment;