import { React, useCallback, useContext } from "react";
import { NavLink } from 'react-router-dom';
import '../../style/chatlist.css';
import { ThemeContext } from "../../utils/ThemeContext";


export const ChatList = ({ chatList, setChatList }) => {
    const { color } = useContext(ThemeContext);

    const chatDelete = useCallback((id) => {
        chatList.splice(id, 1);
    }, [chatList]);

    const chatAdd = useCallback(() => {
        let a = Object.assign({ name: 'chat' + (chatList.length + 1), id: 'chat' + (chatList.length + 1) });
        //console.log('a', a);
        chatList.splice(chatList.length, 0, a);
        //console.log('chatList', chatList);
    }, [chatList]);


    return (
        <div className='chatList'>
            <h3>Список чатов</h3>
            <ul>
                {chatList.map((chat) => (
                    <li key={chat.id}>
                        <NavLink
                            style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}
                            to={`/chats/${chat.id}`}>{chat.name}
                            <button style={{ backgroundColor: color }} onClick={chatDelete}>Удалить чат</button>
                        </NavLink>
                    </li>
                ))}
            </ul>
            <button style={{ backgroundColor: color }} onClick={chatAdd}>Добавить чат</button>
        </div>
    );
}
