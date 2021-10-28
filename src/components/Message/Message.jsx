import React from "react";

export const Message = ({ message, onMessageClick }) => { //если несколько свойств через запятую {message, age, male} сейчас только одно свойство
    // const message = props.message
    //чтобы вытащить свойство из объекта и присвоить его переменной елаем деструктуризацию с тем же именем переменной, что и свойство 
    //const {message} = props;

    return <h3 onClick={onMessageClick}>{message}</h3>//вызов клика (колбэка) в дочернем компоненте из родительского
};