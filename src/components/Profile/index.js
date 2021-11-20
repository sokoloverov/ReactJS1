import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//import { store } from "../../store";
import { changeName, toggleCheckbox } from "../../store/profile/actions";
import { selectName } from "../../store/profile/selectors";

export const Profile = () => {
    //const state = store.getState();
    const [value, setValue] = useState();
    const checkboxValue = useSelector(state => state.checkbox);
    const name = useSelector(selectName);
    const dispatch = useDispatch();

    const handleChangeText = (e) => {
        setValue(e.target.value);
    };

    const handleChange = () => {
        //store.dispatch(toggleCheckbox);
        dispatch(toggleCheckbox);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(changeName(value));
    }

    return (
        <>
            <h3>PROFILE</h3>
            <input type='checkbox' checked={checkboxValue} onChange={handleChange}></input>
            <form onSubmit={handleSubmit}>
                <input type='text' value={name} onChange={handleChangeText} />
                <input type='submit' />
            </form>
            <span>{name}</span>
        </>
    );
};