//import { v4 as uuidv4 } from 'uuid';

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const DELETE_MESSAGE = 'MESSAGES::DELETE_MESSAGE';

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: { chatId, message }
});

export const deleteMessage = (chatId, idToDelete) => ({
    type: DELETE_MESSAGE,
    payload: { chatId, idToDelete }
});

let timeout;

export const addMessageWithReply = (chatID, message) => (dispatch) => {
    dispatch(addMessage(chatID, message));

    if (message.author !== 'robot') {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            //dispatch(addMessage(chatID, message));
            const botMessage = {
                //id: `${uuidv4()}`,
                text: 'Привет, я робот 👀',
                author: 'robot',
                gender: '4'
            }
            dispatch(addMessage(chatID, botMessage));
        }, 500);
    }
}