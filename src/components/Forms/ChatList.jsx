import { ListItem, TextField } from "@mui/material";
import { React, useCallback, useContext, useState } from "react";
import { NavLink } from 'react-router-dom';
import '../../style/chatlist.css';
import { ThemeContext } from "../../utils/ThemeContext";


export const ChatList = ({ chatList, onAddChat, onDeleteChat }) => {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onAddChat(value);
        setValue('');
    }

    const { color } = useContext(ThemeContext);

    return (
        <div className='chatList'>
            <h3>Список чатов</h3>
            <ul>
                {chatList.map((chat) => (
                    <>
                        <ListItem key={chat.id}>
                            <NavLink
                                style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}
                                to={`/chats/${chat.id}`}>{chat.name}
                            </NavLink>
                        </ListItem>
                        <button style={{ backgroundColor: color }} onClick={() => onDeleteChat(chat.id)}>Удалить чат</button>
                    </>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <TextField value={value} onChange={handleChange} />
                <button style={{ backgroundColor: color }} >Добавить чат</button>
            </form>
        </div>
    );
}
