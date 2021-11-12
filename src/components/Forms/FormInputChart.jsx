import { React, useState } from "react";
import { TextField, RadioGroup, FormControlLabel, Radio, Typography } from "@mui/material";
import '../../style/forms.css';

export function FormInputChart({ onSubmitButton }) {

    const [obj, setObj] = useState({ text: '', author: '', gender: '' });
    const [errorForm, setErrorForm] = useState({ text: true, author: true, gender: true });

    function change(data, event) {
        setObj({ ...obj, [data]: event.target.value });
    }

    function submit(event) {
        event.preventDefault();
        if (obj.text === '') {
            check('text')
            return;
        }
        if (obj.author === '') {
            check('author');
            return;
        }
        if (obj.gender === '') {
            check('gender');
            return;
        }
        onSubmitButton(obj);
        setObj({ text: '', author: '', gender: '' });
        setErrorForm({ text: true, author: true, gender: true });
    }

    function check(property) {
        let copy = Object.assign({}, errorForm);
        copy[property] = false;
        setErrorForm(copy);
    }

    return <form className='mainContainer shadow-drop-center' onSubmit={submit}>
        {errorForm.text === true ? <TextField className='textarea  box_input' label='Введите текст сообщения' placeholder='сообщение' multiline rows={3} variant='filled' value={obj.text} onChange={event => change('text', event)} focused={true} /> :
            <TextField error className='textarea  box_input' label='Ошибка' placeholder='поле не должно быть пустым' multiline rows={3} variant='filled' value={obj.text} onChange={event => change('text', event)} focused={true} />}
        {errorForm.author === true ? <TextField margin="dense" className='box_input' type='author' label='Ваше имя?' variant='filled' value={obj.author} onChange={event => change('author', event)} /> :
            <TextField error margin="dense" className='box_input' type='author' label='поле не должно быть пустым' variant='filled' value={obj.author} onChange={event => change('author', event)} />}

        <div className='radio_input'>
            {errorForm.gender === true ? <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                <FormControlLabel value="1" control={<Radio />} label="Ж" checked={obj.gender === '1' ? true : false} onChange={event => change('gender', event)} />
                <FormControlLabel value="2" control={<Radio />} label="М" checked={obj.gender === '2' ? true : false} onChange={event => change('gender', event)} />
                <FormControlLabel value="3" control={<Radio />} label="?" checked={obj.gender === '3' ? true : false} onChange={event => change('gender', event)} />
            </RadioGroup> :
                <RadioGroup row aria-label="gender" name="row-radio-buttons-group" className='warning' >
                    <FormControlLabel value="1" control={<Radio />} label="Ж" checked={obj.gender === '1' ? true : false} onChange={event => change('gender', event)} />
                    <FormControlLabel value="2" control={<Radio />} label="М" checked={obj.gender === '2' ? true : false} onChange={event => change('gender', event)} />
                    <FormControlLabel value="3" control={<Radio />} label="?" checked={obj.gender === '3' ? true : false} onChange={event => change('gender', event)} />
                    <Typography variant='caption' className='warning_message'>Укажите ваш пол</Typography>
                </RadioGroup>}

            <button className='shake-top button' type='submit'>Отправить</button>
        </div>
    </form>
};