import { useCallback, useEffect, useState } from 'react';
import '../src/style/App.css';
import { FormInputChart } from './components/Forms/FormInputChart';
import { MessageList } from './components/Message/MessageList';
import { ChatList } from './components/Forms/ChatList';
import { Header } from './components/Header';
import { Grid } from "@mui/material";


function App(props) {

  const messageListStart = [{ id: 0, text: 'Привет', author: 'Петров', gender: '2' }, { id: 1, text: 'Как дела?', author: 'Сидоров', gender: '3' }];
  const [messageList, setMessageList] = useState(messageListStart);
  const [show, setShow] = useState('');
  const [countMessages, setCountMessages] = useState(2);
  const [chartsSum, setChartsSum] = useState(1);

  const addMessage = useCallback((data) => {
    let max = (prev, cur) => prev.id > cur.id ? prev.id : cur.id;
    let maxIndex = messageList.reduce(max) + 1;
    data = Object.assign(data, { id: maxIndex });
    data = [...messageList, data];
    setMessageList(data);
    setCountMessages(messageList.length);
  }, [messageList]);

  useEffect(() => {
    if (messageList.length > 2 && messageList[messageList.length - 1].author !== 'robot') {
      setShow('Привет, ' + (messageList[messageList.length - 1].author).toUpperCase() + ', я робот 👀');
      let timeStop = setTimeout(() => addMessage({ author: 'robot', gender: '4', text: show }), 500);
      return () => clearTimeout(timeStop);
    }
  }, [messageList, addMessage, show]);

  return (
    <div className="App App-header">
      <Header name={props.name} chatLength={countMessages} chartsCount={chartsSum} />
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <ChatList />
        </Grid>
        <Grid item xs={10}>
          <MessageList messageList={messageList} />
        </Grid>
      </Grid>
      <FormInputChart onSubmitButton={addMessage} />
    </div>
  );
}

export default App;
