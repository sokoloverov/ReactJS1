
import '../src/style/App.css';
import Chats from './components/Chats';
import { Home } from './components/Home';
import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback, useState } from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { ChatList } from './components/Forms/ChatList';
import { Profile } from './components/Profile';
//import { ThemeContext } from './utils/ThemeContext';
import { v4 as uuidv4 } from 'uuid';
import { addChat, deleteChat } from './store/chats/actions';
import { addMessage, deleteMessage } from './store/messages/actions';

// const initialChatList = [
//   {
//     name: 'chat1',
//     id: 'chat1'
//   },
//   {
//     name: 'chat2',
//     id: 'chat2'
//   },
//   {
//     name: 'chat3',
//     id: 'chat3'
//   }
// ];
// const messageListStart = {
//   chat1: [{ id: 0, text: 'Привет1', author: 'Петров', gender: '2' }, { id: 1, text: 'Как дела?', author: 'Сидоров', gender: '3' }],
//   chat2: [{ id: 0, text: 'Привет2', author: 'Козлов', gender: '2' }, { id: 1, text: 'Как жизнь?', author: 'Сидоров', gender: '3' }],
//   chat3: [],
// }

export const App = () => {

  //const [chatList, setChatList] = useState(initialChatList);
  const chatList = useSelector(state => state.chats);
  const dispatch = useDispatch();
  //const [messageList, setMessageList] = useState(messageListStart);
  const messageList = useSelector(state => state.messages.messageList);

  const handleAddChat = useCallback((newChatName) => {
    const newId = `chat${uuidv4()}`;
    // setChatList(prevChatList => [...prevChatList, { name: newChatName, id: newId }]);
    dispatch(addChat({ name: newChatName, id: newId }));
    // setMessageList(prevMessages => ({
    //   ...prevMessages,
    //   [newId]: [],
    // }));
    dispatch(addMessage(newId, []));
  }, [dispatch]);

  const handleDeleteChat = useCallback((idToDelete) => {
    //setChatList(prevChatlist => prevChatlist.filter(({ id }) => id !== idToDelete));
    dispatch(deleteChat(idToDelete));
    // setMessageList(prevMessages => {
    //   const newMessages = { ...prevMessages };
    //   delete newMessages[idToDelete];
    //   return newMessages;
    // });
    dispatch(deleteMessage(idToDelete));
  }, [dispatch]);

  //const [color, setColor] = useState('yellow');
  // const handleToggleColor = useCallback(() => {
  //   setColor(prevColor => prevColor === 'yellow' ? 'red' : 'yellow')
  // }, []);

  return (
    // <ThemeContext.Provider value={{ color, handleToggleColor }}>
    //<Provider store={store}>
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
          <Route index element={<ChatList chatList={chatList} onAddChat={handleAddChat} onDeleteChat={handleDeleteChat} />} />
          <Route path=':chatId' element={<Chats chatList={chatList} messageList={messageList} setMessageList={addMessage} onAddChat={handleAddChat} onDeleteChat={handleDeleteChat} />} />
        </Route>
        <Route path='*' element={<h3>404</h3>} />
      </Routes>
    </BrowserRouter >
    //</Provider>
    //</ThemeContext.Provider>
  );
}