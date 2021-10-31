import React, { useState } from "react";
import '../../style/forms.css';

export function FormInputChart({ onSubmitButton }) {

    const [obj, setObj] = useState({ text: '', author: '', gender: '' });

    function change(prop, event) {
        setObj({ ...obj, [prop]: event.target.value });
    }
    // function chengeGender(event) {
    //     setGender(event.target.value);
    // }

    function submit(event) {
        event.preventDefault();
        if (obj.text === '') {
            alert("Сообщение не должно быть пустым!");
            return;
        }
        onSubmitButton(obj);
        setObj({ text: '', author: '', gender: '' });
    }

    return <form className='mainContainer shadow-drop-center'>
        {/* <input type="text" value={obj.text} onChange={event => change('text', event)} /> */}
        <textarea className='textarea box_input' placeholder='введите текст сообщения...' cols='40' rows='3' wrap='hard' value={obj.text} onChange={event => change('text', event)}></textarea>
        <input className='box_input' type='author' placeholder='ваше имя?' value={obj.author} onChange={event => change('author', event)} />
        <div className='radio_input'>
            <span className='radio_input__gender'>Ж</span><input type="radio" name="radio" value="1" checked={obj.gender === '1' ? true : false} onChange={event => change('gender', event)} />
            <span className='radio_input__gender'>М</span><input type="radio" name="radio" value="2" checked={obj.gender === '2' ? true : false} onChange={event => change('gender', event)} />
            <span className='radio_input__gender'>?</span><input type="radio" name="radio" value="3" checked={obj.gender === '3' ? true : false} onChange={event => change('gender', event)} />
            <button className='shake-top button' type='submit' onClick={submit}>Отправить</button>
        </div>
    </form>
};