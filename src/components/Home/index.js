import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { ThemeContext } from "../../utils/ThemeContext";

export const Home = () => {
    const { color, handleToggleColor } = useContext(ThemeContext);
    const name = useSelector(state => state.name);
    return (
        <>
            <h3>HOME</h3>
            <h4>Привет, {name}</h4>
            <button
                style={{ backgroundColor: color }}
                onClick={handleToggleColor}>Изменить цвет
            </button>
        </>
    );
};