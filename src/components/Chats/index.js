import { useCallback, useEffect, useState } from 'react';
import { FormInputChart } from '../Forms/FormInputChart';
import { MessageList } from '../Message/MessageList';
import { ChatList } from '../Forms/ChatList';
import { Header } from '../Header';
import { Grid } from "@mui/material";
import { Navigate, useNavigate, useParams } from 'react-router';
//import { v4 as uuidv4 } from 'uuid';
import { addMessage, addMessageWithReply } from '../../store/messages/actions';
import { connect, useDispatch, useSelector } from 'react-redux';
import '../../style/App.css';
import { selectMessages } from '../../store/messages/selectors';
import { push } from 'firebase/database';
import { getChatMsgsListRefById } from '../../servises/firebase';

function Chats({ name, chatLength, chartsCount, msgs }) {

    const { chatId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [show, setShow] = useState('');
    const [countMessages, setCountMessages] = useState(2);
    const [chartsSum, setChartsSum] = useState(1);

    const messages = useSelector(selectMessages);

    const addMessage1 = useCallback((data) => {
        //dispatch(addMessageWithReply(chatId, data));
        push(getChatMsgsListRefById(chatId), data);
    }, [chatId]);

    if (!msgs[chatId]) {
        return <Navigate replace to='/chats' />
    }

    return (
        <div className="App App-header">
            <Header name={name} chatLength={countMessages} chartsCount={chartsSum} />
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <ChatList chat={chatId} />
                </Grid>
                <Grid item xs={10}>
                    <MessageList messageList={msgs[chatId]} />
                </Grid>
            </Grid>
            <FormInputChart onSubmitButton={addMessage1} />
        </div>
    );
}
export default Chats;

const mapStateToProps = (state) => ({
    messges: state.messages,
});

const mapDispatchToProps = {
    sendMessage: addMessageWithReply,
};

export const ConnectedChats = connect(
    mapStateToProps,
    mapDispatchToProps
)(Chats);
