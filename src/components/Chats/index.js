import { useCallback, useEffect, useState } from 'react';
//import { Provider } from 'react-redux';
import { FormInputChart } from '../Forms/FormInputChart';
import { MessageList } from '../Message/MessageList';
import { ChatList } from '../Forms/ChatList';
import { Header } from '../Header';
import { Grid } from "@mui/material";
import { Navigate, useNavigate, useParams } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import { addMessage } from '../../store/messages/actions';
import { useDispatch, useSelector } from 'react-redux';
import '../../style/App.css';

function Chats({ name, chatLength, chartsCount, chatList, messageList, setMessageList, onAddChat, onDeleteChat }) {

    const { chatId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [show, setShow] = useState('');
    const [countMessages, setCountMessages] = useState(2);
    const [chartsSum, setChartsSum] = useState(1);

    //const messages = useSelector((state) => state.messageList[chatId]);

    const addMessage1 = useCallback((data) => {//это теперь не массив а объект
        data = Object.assign({ id: uuidv4() }, data);
        //console.log('Data', data);
        setCountMessages((messageList[chatId]?.length + 1));
        //console.log('messageList[chatId].length', messageList[chatId]?.length);
        // setMessageList((prevMessages) => ({
        //     ...prevMessages,
        //     [chatId]: [...prevMessages[chatId], data],
        // }));
        dispatch(addMessage(chatId, data));
    }, [chatId, messageList, dispatch]);

    useEffect(() => {
        //console.log('Chats', messageList[chatId], 'chatId', chatId);
        if (messageList[chatId]?.length > 2 && messageList[chatId][messageList[chatId]?.length - 1].author !== 'robot') {
            setShow('Привет, ' + (messageList[chatId][messageList[chatId]?.length - 1].author).toUpperCase() + ', я робот 👀');
            let timeStop = setTimeout(() => addMessage1({ author: 'robot', gender: '4', text: show }), 500);
            return () => clearTimeout(timeStop);
        }
    }, [messageList, chatId, addMessage1, show]);

    if (!messageList[chatId]) {
        return <Navigate replace to='/chats' />
    }

    return (
        <div className="App App-header">
            <Header name={name} chatLength={countMessages} chartsCount={chartsSum} />
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <ChatList chatList={chatList} />
                </Grid>
                <Grid item xs={10}>
                    <MessageList messageList={messageList[chatId]} />
                </Grid>
            </Grid>
            <FormInputChart onSubmitButton={addMessage} />
        </div>
    );
}
export default Chats;