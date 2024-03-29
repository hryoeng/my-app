import { useState, useRef, useEffect } from 'react';

const WordRelay = () => {
  const [word, setWord] = useState('첫단어');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const [score, setScore] = useState(0);
  const inputEl = useRef(null);

  useEffect(() => {
    document.title = `${score}점`;
  }, [score])

  const submit = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
        if(value.length < 2) {
            setResult("단어의 길이는 2글자 이상이어야 합니다.");
        } else {
            setWord(value);
            setValue('');
            setResult("딩동댕 !");
            setScore(score + 1);
        }
    } else {
        setValue('');
        setResult("땡 !");
        setScore((prev) => {
            prev = prev - 1;
            if(prev > 0) {
                setScore(prev);
            } else {
                setScore(0);
            }
        })
    }
    inputEl.current.focus();
  };
  return (
    <>
      <div>{ word }</div>
      <form onSubmit={submit}>
        <input
          ref={inputEl}
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  );
};

export default WordRelay;