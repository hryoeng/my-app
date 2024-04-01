import { useState } from "react";

function Reservation() {
    const [haveBreakfast, setHaveBreakfast] = useState(true);
    const [numberOfGuest, setNumberOfGuest] = useState(2);

    const handleSubmit = (e) => {
        alert(`아침식사 여부 : ${haveBreakfast ? '식사하십니다(:' : '식사안해요!!'} , 
                방문객 수 : ${numberOfGuest}`);
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                아침식사 여부 :
                <input type="checkbox" checked={haveBreakfast}
                    onChange={ (event) => {
                        setHaveBreakfast(event.target.checked);
                    }} />
            </label>
            <br />
            <label>
                방문객 수 :
                <input type="number" value={numberOfGuest}
                    onChange={ (event) => {
                        setNumberOfGuest(event.target.value);
                    }} />
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

export default Reservation;