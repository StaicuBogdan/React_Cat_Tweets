import {ActionType} from "../action-types";
import {MessageAction} from "../actions";


const messageReducer = (state: string[] = [], action: MessageAction) => {
    switch(action.type){
        case ActionType.ADDMESSAGE:
            return [...state, action.payload];
        default:
            return state;
    }
}

export default messageReducer;