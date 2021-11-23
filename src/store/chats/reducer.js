import { ADD_CHAT, DELETE_CHAT } from "./actions";

const initialChats = [];

export const chatsReducer = (state = initialChats, actions) => {
    switch (actions.type) {
        case ADD_CHAT:
            return [...state, actions.payload];
        case DELETE_CHAT:
            return state.filter(({ id }) => id !== actions.payload.chatId);
        default:
            return state;
    }
};