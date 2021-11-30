import {Dispatch} from "redux";
import {MessageAction} from "../actions";
import {ActionType} from "../action-types";

export const addMessage = (message: string) => {
    return (dispatch: Dispatch<MessageAction>) =>{
        dispatch({
            type: ActionType.ADDMESSAGE,
            payload: message
        });
    };
};