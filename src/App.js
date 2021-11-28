
import '../src/style/App.css';
import Chats from './components/Chats';
import { Home } from './components/Home';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { ChatList } from './components/Forms/ChatList';
import { Profile } from './components/Profile';
import { Articles } from './components/Articles';
import { PublicRoute } from './components/PublicRoute';
import { PrivateRoute } from './components/PrivateRoute';
import { SignUp } from './components/SignUp';
import { auth, messagesRef } from './servises/firebase';
import { useDispatch } from 'react-redux';
import { signIn, signOut } from './store/profile/actions';
import { onValue } from '@firebase/database';

export const App = () => {
  const dispatch = useDispatch();
  const [msgs, setMsgs] = useState({});

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(signIn());
      } else {
        dispatch(signOut());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  useEffect(() => {
    onValue(messagesRef, (snapshot) => {
      const newMsgs = {};
      snapshot.forEach((chatMsgsSnap) => {
        newMsgs[chatMsgsSnap.key] = Object.values(
          chatMsgsSnap.val().messageList || {}
        );
      });
      setMsgs(newMsgs);
    });
  }, []);

  return (
    <BrowserRouter>
      <div className='links'>
        <div className='links_w'><Link to='/' className='links_link'>Home</Link></div>
        <div className='links_w'><Link to='/profile' className='links_link'>Profile</Link></div>
        <div className='links_w'><Link to='/articles' className='links_link'>Articles</Link></div>
        <div className='links_w'><Link to='/chats' className='links_link'>Chats</Link></div>
      </div>

      <Routes>
        <Route path='/' element={<PublicRoute><Home /></PublicRoute>} />
        <Route path='/signup' element={<PublicRoute><SignUp /></PublicRoute>} />
        <Route path='profile' element={<PrivateRoute><Profile /></PrivateRoute>} />
        {/* <Route path='articles' element={<Articles />} /> */}
        <Route path='chats' >
          <Route index element={<PrivateRoute><ChatList /></PrivateRoute>} />
          <Route path=':chatId' element={<PrivateRoute><Chats msgs={msgs} /></PrivateRoute>} />
        </Route>
        <Route path='*' element={<h3>404</h3>} />
      </Routes>
    </BrowserRouter >
  );
}