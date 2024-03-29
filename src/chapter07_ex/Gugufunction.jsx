import React from 'react';
import { useState, useRef } from 'react';

const Gugufunction = () => {
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const [score, setScore] = useState(0);

    const inputEl = useRef(null);

    const submit = (e) => {
        e.preventDefault();
        if (parseInt(value) === first * second) {
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
            setResult('딩동댕!');
            setScore(score + 1);
        } else {
            setValue('');
            setResult('땡!');
            setScore((prev) => {
                prev = prev - 1;
                if (prev > 0) {
                    setScore(prev);
                } else {
                    setScore(0);    // 음수 방지
                }
            });
        }
        inputEl.current.focus();
    };

    return (
        <>
            <div>
                {first} 곱하기 {second} 는?
            </div>
            <form onSubmit={submit}>
                <input ref={inputEl} type='number' value={value} onChange={(e) => setValue(e.target.value)} />
                <button>입력!</button>
            </form>
            <div>
                {result} 점수 : {score}
            </div>
        </>
    )


}


export default Gugufunction;