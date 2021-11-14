import React from "react";
import { useSelector, useDispatch } from "react-redux";
//import { store } from "../../store";
import { toggleCheckbox } from "../../store/profile/actions";

export const Profile = () => {
    //const state = store.getState();
    const checkboxValue = useSelector(state => state.checkbox);
    const name = useSelector(state => state.name);
    const dispatch = useDispatch();

    const handleChange = () => {
        //store.dispatch(toggleCheckbox);
        dispatch(toggleCheckbox);
    };

    return (
        <>
            <h3>PROFILE</h3>
            <input type='checkbox' checked={checkboxValue} onClick={handleChange}></input>
            <span>{name}</span>
        </>
    );
};