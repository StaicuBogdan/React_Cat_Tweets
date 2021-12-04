import {ActionType} from "../action-types";

interface AddMessageAction {
    type: ActionType.ADDMESSAGE,
    payload: string
}

interface RemoveMessageAction {
    type: ActionType.REMOVEMESSAGE,
    payload: number
}

interface LoginUserAction {
    type: ActionType.LOGIN,
    payload: string
}

interface LogoutUserAction {
    type: ActionType.LOGOUT
}


export type LoginAction = LoginUserAction | LogoutUserAction;
export type MessageAction = AddMessageAction | RemoveMessageAction;