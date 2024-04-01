import { useState } from "react";

function FruitSelect() {
    const [value, setValue] = useState('pear');
    const [text, setText] = useState("배");

    const handleChange = (event) => {
        setValue(event.target.value);
        // 현재 선택된 index 값
        const selectedIndex = event.tartget.selectedIndex;
        // 현재 선택된 index의 text
        setText(event.target.options[selectedIndex].textContent);
    }

    const handleSubmit = (event) => {
        alert("선택한 과일 : " + text);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                과일을 선택하세요 : 
                <select value={value} onChange={handleChange}>
                    <option value="pear">배</option>
                    <option value="orenge">오렌지</option>
                    <option value="strawberry">딸기</option>
                    <option value="watermelon">수박</option>
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

export default FruitSelect;