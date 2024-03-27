import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name:"길동이",
        comment:"안녕하세요 ~",
    },
    {
        name:"길동이아버지",
        comment:"인사하지마라 !",
    },
    {
        name:"길동이형",
        comment:"형이라고 부르지도 마라 !",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
            
        </div>
    );
}

// function CommentList(props) {
//     return (
//         <div>
//             <Comment name={"길동이"} comment={"안녕하세요"} />          
//             <Comment name={"아버지"} comment={"인사하지 말고 눈에 띄지 마라"} />          
//             <Comment name={"형"} comment={"형이라고 부르지마"} />          
//         </div>
//     );
// }

export default CommentList;