import { ADD_MESSAGE, DELETE_MESSAGE } from "./actions";

const initialState = {
    // вид записи в хранилище {[chatId]: [{id, text, author, gender}]}
    messageList: {},
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const currentList = state.messageList[action.chatId] || [];
            return {
                ...state, messageList: { ...state.messageList, [action.chatId]: [...currentList, { ...action.message }] },
            };
        }
        case DELETE_MESSAGE: {
            delete state.messageList[action.id];
            return state;
        }
        default:
            return state;
    }
};

