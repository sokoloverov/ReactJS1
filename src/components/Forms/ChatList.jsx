import { ListItem, TextField } from "@mui/material";
import { React, useContext, useState } from "react";
import { NavLink } from 'react-router-dom';
import '../../style/chatlist.css';
import { ThemeContext } from "../../utils/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { selectChats } from "../../store/chats/selectors";
import { v4 as uuidv4 } from 'uuid';
import { addChat, deleteChat } from "../../store/chats/actions";

export const ChatList = ({ chat }) => {

    const chatList = useSelector(selectChats);
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newId = `chat${uuidv4()}`;
        dispatch(addChat({ name: value, id: newId }));
        setValue('');
    }

    const handleDeleteClick = () => {
        console.log(chat);
        dispatch(deleteChat(chat));
    };
    const { color } = useContext(ThemeContext);

    return (
        <div className='chatList'>
            <h3>Список чатов</h3>
            <ul>
                {chatList.map((chat) => (
                    <>
                        <ListItem >
                            <NavLink key={chat.id}
                                style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}
                                to={`/chats/${chat.id}`}>{chat.name}
                                <button style={{ backgroundColor: color }} onClick={handleDeleteClick}>Удалить чат</button>
                            </NavLink>
                        </ListItem>

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
