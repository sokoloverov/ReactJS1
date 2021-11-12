import { React } from "react";
import { NavLink } from 'react-router-dom';
import '../../style/chatlist.css';

const chatList = [
    {
        name: 'chat1',
        id: 'chat1'
    },
    {
        name: 'chat2',
        id: 'chat2'
    },
    {
        name: 'chat3',
        id: 'chat3'
    }
];
//console.log(chatList[0].id);

export const ChatList = () => {

    return (
        <div className='chatList'>
            <h3>Список чатов</h3>
            <ul>
                {chatList.map((chat) => (
                    <li key={chat.id}> <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })} to={`/chats/${chat.id}`}>{chat.name}</NavLink> </li>
                ))}
            </ul>
        </div>
    );
}
