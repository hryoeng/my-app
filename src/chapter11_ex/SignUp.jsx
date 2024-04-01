import { useState } from "react";

function SignUp() {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("남자");

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        alert(`이름 : ${name}, 성별 : ${gender}`);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름 : 
                <input type="text" value={name} 
                        onChange={handleChange} />
            </label>
            <label>
                성별 : 
                <select value={gender} onChange={ (event) => {setGender(event.target.value)} }>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    )
}

export default SignUp;