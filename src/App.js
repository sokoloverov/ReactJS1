
import '../src/style/App.css';
import Chats from './components/Chats';
import { Home } from './components/Home';
import { Provider } from 'react-redux';
import React, { useState } from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { ChatList } from './components/Forms/ChatList';
import { Profile } from './components/Profile';
//import { ThemeContext } from './utils/ThemeContext';
import { store } from './store';

const initialChatList = [
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
const messageListStart = {
  chat1: [{ id: 0, text: 'Привет1', author: 'Петров', gender: '2' }, { id: 1, text: 'Как дела?', author: 'Сидоров', gender: '3' }],
  chat2: [{ id: 0, text: 'Привет2', author: 'Козлов', gender: '2' }, { id: 1, text: 'Как жизнь?', author: 'Сидоров', gender: '3' }],
  chat3: [],
}

export const App = () => {

  const [chatList, setChatList] = useState(initialChatList);
  const [messageList, setMessageList] = useState(messageListStart);

  //const [color, setColor] = useState('yellow');
  // const handleToggleColor = useCallback(() => {
  //   setColor(prevColor => prevColor === 'yellow' ? 'red' : 'yellow')
  // }, []);

  return (
    // <ThemeContext.Provider value={{ color, handleToggleColor }}>
    <Provider store={store}>
      <BrowserRouter>
        <div className='links'>
          <div className='links_w'><Link to='/' className='links_link'>Home</Link></div>
          <div className='links_w'><Link to='/profile' className='links_link'>Profile</Link></div>
          <div className='links_w'><Link to='/chats' className='links_link'>Chats</Link></div>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='profile' element={<Profile />} />
          <Route path='chats' >
            <Route index element={<ChatList chatList={chatList} setChatList={setChatList} />} />
            <Route path=':chatId' element={<Chats chatList={chatList} messageList={messageList} setMessageList={setMessageList} />} />
          </Route>
          <Route path='*' element={<h3>404</h3>} />
        </Routes>
      </BrowserRouter >
    </Provider>
    //</ThemeContext.Provider>
  );
}