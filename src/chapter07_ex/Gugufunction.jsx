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
      setFirst(first);
      setSecond(second);
      setValue(value);
      setScore((prev) => prev + score);
    } else {
  

    }
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

export default Gugufunction