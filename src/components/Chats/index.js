import { useCallback, useEffect, useState } from 'react';
import '../../style/App.css';
import { FormInputChart } from '../Forms/FormInputChart';
import { MessageList } from '../Message/MessageList';
import { ChatList } from '../Forms/ChatList';
import { Header } from '../Header';
import { Grid } from "@mui/material";
import { Navigate, useNavigate, useParams } from 'react-router';


function Chats(props) {

    const { chatId } = useParams();
    const navigate = useNavigate();

    const messageListStart = {
        chat1: [{ id: 0, text: 'Привет1', author: 'Петров', gender: '2' }, { id: 1, text: 'Как дела?', author: 'Сидоров', gender: '3' }],
        chat2: [{ id: 0, text: 'Привет2', author: 'Козлов', gender: '2' }, { id: 1, text: 'Как жизнь?', author: 'Сидоров', gender: '3' }],
        chat3: [],
    }

    const [messageList, setMessageList] = useState(messageListStart);
    const [show, setShow] = useState('');
    const [countMessages, setCountMessages] = useState(2);
    const [chartsSum, setChartsSum] = useState(1);

    const addMessage = useCallback((data) => {//это теперь не массив а объект
        console.log('Data', data);
        // let max = (prev, cur) => prev.id > cur.id ? prev.id : cur.id;
        // let maxIndex = messageList[chatId].reduce(max) + 1;
        // data = Object.assign(data, { id: maxIndex });
        // data = [...messageList[chatId], data];
        // setMessageList(data);
        setCountMessages((messageList[chatId]?.length + 1));
        console.log('messageList[chatId].length', messageList[chatId]?.length);
        setMessageList((prevMessages) => ({
            ...prevMessages,
            [chatId]: [...prevMessages[chatId], data],
        }));
    }, [chatId, messageList]);

    useEffect(() => {
        console.log('Chats', messageList[chatId], 'chatId', chatId);
        if (messageList[chatId]?.length > 2 && messageList[chatId][messageList[chatId]?.length - 1].author !== 'robot') {
            setShow('Привет, ' + (messageList[chatId][messageList[chatId]?.length - 1].author).toUpperCase() + ', я робот 👀');
            let timeStop = setTimeout(() => addMessage({ author: 'robot', gender: '4', text: show }), 500);
            return () => clearTimeout(timeStop);
        }
    }, [messageList, chatId, addMessage, show]);

    if (!messageList[chatId]) {
        return <Navigate replace to='/chats' />
    }

    return (
        <div className="App App-header">
            <Header name={props.name} chatLength={countMessages} chartsCount={chartsSum} />
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <ChatList />
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