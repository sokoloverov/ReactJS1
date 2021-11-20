export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const DELETE_MESSAGE = 'MESSAGES::DELETE_MESSAGE';

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    chatId,
    message,
});

export const deleteMessage = (id) => ({
    type: DELETE_MESSAGE,
    payload: id,
});