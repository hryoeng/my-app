import { useState } from "react";

function LikeFeature() {
    const [ likeCount, setLikeCount ] = useState(0);

    function increaseLike() {
        setLikeCount(count => count + 1);
    }

    function decreaseLike() {
        setLikeCount(count => (count - 1 < 0) ? 0 : count - 1);
    }

    return (
        <div>
            <button onClick={increaseLike}>추천하기</button>
            <button onClick={decreaseLike}>취소하기</button>
            <h2>이 페이지를 {likeCount}번 추천하였습니다.</h2>
        </div>
    );
}

export default LikeFeature;