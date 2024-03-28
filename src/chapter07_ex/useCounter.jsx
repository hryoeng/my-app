import React, { useState } from "react";

function UseCounter(initialValue) {
    const [count, setCount] = useState(initialValue);

    const increaseCount = () => setCount((count) => count + 1);
    // 0보다 작으면 항상 0
    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));   

    return [ count, increaseCount, decreaseCount];
}

export default UseCounter;