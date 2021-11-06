import { React, useState } from "react";
import '../../style/chatlist.css';

export const ChatList = () => {

    const [value, setValue] = useState('');

    function chengeSelect(event) {
        setValue(event.target.value);
        console.log(value);
        return value;
    }

    return (
        <div className='chatList'>
            <select value={value} onChange={chengeSelect}>
                <option>О жизни</option>
                <option>О работе</option>
                <option>О гризли </option>
                <option>Об охоте</option>
            </select>
            <p>
                Выбрана опция: {value}
            </p>
        </div>
    );
}
