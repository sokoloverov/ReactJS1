import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logOut, userRef } from "../../servises/firebase";
import { changeName, signOut, toggleCheckbox } from "../../store/profile/actions";
import { selectName } from "../../store/profile/selectors";
import { onValue, ref, set } from "@firebase/database";

export const Profile = () => {
    const [value, setValue] = useState();
    const checkboxValue = useSelector(state => state.checkbox);
    const name = useSelector(selectName);
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onValue(userRef, (snapshot) => {
            const userData = snapshot.val();
            dispatch(changeName(userData?.name || ''));
        });
        return unsubscribe;
    }, [dispatch]);

    const handleChangeText = (e) => {
        setValue(e.target.value);
    };

    const handleChange = () => {
        dispatch(toggleCheckbox);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        set(userRef, {
            name: value,
        });
    };

    // const handleSignOut = () => {
    //     dispatch(signOut());
    // };

    const handleLogOutClick = async () => {
        try {
            await logOut();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <h3>PROFILE</h3>
            <input type='checkbox' checked={checkboxValue} onChange={handleChange}></input>
            <form onSubmit={handleSubmit}>
                <input type='text' value={value} placeholder={name} onChange={handleChangeText} />
                <button type='submit'>Введите ваше имя</button>
            </form>
            <hr />
            <button onClick={handleLogOutClick}>ВЫХОД</button>
        </>
    );
};