import { useState, useEffect } from "react";
import axios from "axios";

function WeatherApp() {
    const [temp, setTemp] = useState("");    // 온도(temp)
    const [main, setMain] = useState("");    // 날씨(main)
    const [desc, setDesc] = useState("");    // 설명(desc)
    const [icon, setIcon] = useState("");    // 아이콘(icon)
    const [isReady, setReady] = useState(false);

    useEffect(() => {
        setReady(false);
        axios.get("https://api.openweathermap.org/data/2.5/weather?q=busan&units=metric&appid=d9070ac6d07fab60c68b0192691cb753")
        .then(response => {
            console.log(response);
            setTemp(response.data.main.temp);
            setMain(response.data.weather[0].main);
            setDesc(response.data.weather[0].description);
            setIcon(response.data.weather[0].icon);
            setReady(true);
        })
        .catch(err => console.error(err));
    }, []);

    if(isReady) {
        return (
            <div>
                <p>기온 : {temp} ℃</p>
                <p>날씨 : {main}</p>
                <p>상세 날씨 : {desc}</p>
                <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather" />
            </div>
        );
    } else {
        return ( <div>Loading ...</div> );
    }

    

    
}

export default WeatherApp;