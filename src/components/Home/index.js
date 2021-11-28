import React, { useContext, useState } from "react";
//import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logIn } from "../../servises/firebase";
import { ThemeContext } from "../../utils/ThemeContext";
import { SignForm } from "../SignForm";

export const Home = () => {
    //const dispatch = useDispatch();
    //const { color, handleToggleColor } = useContext(ThemeContext);
    //const name = useSelector((state) => state.name);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignIn = async (email, pass) => {
        setLoading(true);
        try {
            await logIn(email, pass);
        } catch (err) {
            console.log(err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <h3>HOME</h3>
            {/* <h4>Привет, {name}</h4> */}
            {/* <button
                style={{ backgroundColor: color }}
                onClick={handleToggleColor}>Изменить цвет
            </button> */}
            <SignForm onSubmit={handleSignIn} error={error} loading={loading} />
            <Link to='/signup'>ВОЙТИ</Link>
        </>
    );
};