import {Dispatch} from "redux";
import {LoginAction, MessageAction} from "../actions";
import {ActionType} from "../action-types";

export const addMessage = (message: string) => {
    return (dispatch: Dispatch<MessageAction>) =>{
        dispatch({
            type: ActionType.ADDMESSAGE,
            payload: message
        });
    }
}

export const removeMessage = (messageId: number) => {
    return (dispatch: Dispatch<MessageAction>) =>{
        dispatch({
            type: ActionType.REMOVEMESSAGE,
            payload: messageId
        });
    }
}

export const loginUser = (userName: string) => {
    return (dispatch: Dispatch<LoginAction>) => {
        dispatch({
            type: ActionType.LOGIN,
            payload: userName
        });
    }
}

export const logoutUser = () => {
    return (dispatch: Dispatch<LoginAction>) => {
        dispatch({
            type: ActionType.LOGOUT
        });
    }
}