import React, { useState, useEffect} from "react";
import UseCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props) {
    const [ isFull, setIsFull] = useState(false);
    const [ count, increaseCount, decreaseCount ] = UseCounter(0);

    useEffect(() => {
        console.log("useEffect() 호출됨");
        console.log(`isFull: ${isFull}`);
    });
    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);
    useEffect(() => {
        isFull ? (document.title = "정원이 가득찼습니다.") : (document.title = `${count}명 입장했습니다.`)
    });

    return (
        <div style={ {padding:16} }>
            <p>{`총 ${count}명 수용했습니다.`}</p>
            <button onClick={increaseCount} disabled={isFull}>입장</button>
            <button onClick={decreaseCount}>퇴장</button>

            {/* true일 경우에만 실행 */}
            { isFull && <p style={ {color:"red"} }>정원이 가득찼습니다.</p> }
        </div>
    )
}

export default Accommodate;