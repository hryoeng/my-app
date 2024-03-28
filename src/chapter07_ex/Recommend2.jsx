import UseCounter from "./useCounter";
import { useEffect } from "react";

function Recommend2() {
    const [ likeCount, increaseLike, decreaseLike ] = UseCounter(0);

    useEffect(() => {
        document.title = `이 페이지를 ${likeCount}번 추천하였습니다.`
    }, [likeCount]);

    return (
        <div>
            <button onClick={increaseLike}>추천하기</button>
            <button onClick={decreaseLike}>취소하기</button>
            <h2>이 페이지를 {likeCount}번 추천하였습니다.</h2>
        </div>
    );
}

export default Recommend2;