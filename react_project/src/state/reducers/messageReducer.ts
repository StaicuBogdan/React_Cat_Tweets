import {ActionType} from "../action-types";
import {MessageAction} from "../actions";


const messageReducer = (state: string[] = [], action: MessageAction) => {
    switch(action.type){
        case ActionType.ADDMESSAGE:
            return [...state, action.payload];
        case ActionType.REMOVEMESSAGE:
            return state.slice(0, action.payload).concat(state.slice(action.payload + 1));
        default:
            return state;
    }
}

export default messageReducer;