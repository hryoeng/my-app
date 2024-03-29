import { useState } from "react";

function WarningBanner(props) {
    if(!props.warning) {
        return null;        // 렌더링 되지 않음
    }

    return (
        <div>경고!!!!</div>
    );
}

function MainPage() {
    const [showWarning, setShowWarning] = useState(false);

    const handleToggleClick = () => {
        setShowWarning(prev => !prev);
    }

    const result = `showWarning : ${showWarning}`

    return (
        <div>
            <WarningBanner warning={showWarning} />
            <p>{result}</p>
            <button onClick={handleToggleClick}>
                {showWarning ? "감추기" : "보이기"}
            </button>
        </div>
    );
}

export default MainPage;