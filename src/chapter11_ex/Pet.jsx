import React, { useState, useEffect } from "react";
import AddPetForm from "./AddPetForm"

function NewPet() {
    const [pets, setPets] = useState([]);

    // 처음 한번만 실행됨 (localstorage에 저장한 데이터 불러오기)
    useEffect(() => {
        if (localStorage.getItem("PetData")) {
            setPets(JSON.parse(localStorage.getItem("PetData")));
        }
    }, []);

    // pets가 수정될때마다 실행됨 (localstorage에 저장한 데이터 저장)
    useEffect(() => {
        localStorage.setItem("PetData", JSON.stringify(pets));
    }, [pets]);

    return (
        <>
            <PetHeader />
            <AddPetForm setPets={setPets} />
            <ul>
                {pets.map(function (pet) {
                    return <Pet setPets={setPets} key={pet.id} id={pet.id} name={pet.name} species={pet.species} age={pet.age} />;
                })}
            </ul>
            <LikeArea />
            <TimeArea />
        </>
    );
}

function PetHeader() {

    return <h1 className="special">NEW PET</h1>;
}

function LikeArea() {
    const [likeCount, setLikeCount] = useState(0);

    function increaseLike() {
        setLikeCount(prev => prev + 1);
    }

    function decreaseLike() {
        //여기를 완성하시오 0 이하로 likeCount 값이 내려가지 않음
        setLikeCount(prev => prev - 1);
        if (likeCount <= 0) {
            setLikeCount(likeCount => (likeCount = 0));
        }
    }
    return (
        <>
            <button onClick={increaseLike}>추천하기</button>
            <button onClick={decreaseLike}>비추하기</button>
            <h2>이 페이지를 {likeCount} 번 추천 했습니다.</h2>
        </>
    );
}

function TimeArea() {
    const [time, setTime] = useState(new Date().toLocaleString());

    setTimeout(function () {
        setTime(new Date().toLocaleString());
    }, 1000);

    return <p>현재 시간: {time}</p>;
}



function Pet(props) {
    function handleDelete() {
        props.setPets(prev => prev.filter(pet => pet.id !== props.id));
    }
    return (
        <li>{props.name}은 {props.species}이고 {props.age}살 이다.
            <button onClick={handleDelete}>삭제</button>
        </li>
    )
}

export default NewPet;