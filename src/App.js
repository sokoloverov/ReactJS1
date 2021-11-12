
import '../src/style/App.css';
import Chats from './components/Chats';
import { Home } from './components/Home';

import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { ChatList } from './components/Forms/ChatList';
import { Profile } from './components/Profile';

export const App = () => (

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
        <Route index element={<ChatList />} />
        <Route path=':chatId' element={<Chats />} />
      </Route>
      <Route path='*' element={<h3>404</h3>} />
    </Routes>
  </BrowserRouter >
)