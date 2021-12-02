import {ActionType} from "../action-types";

interface AddMessageAction {
    type: ActionType.ADDMESSAGE,
    payload: string
}

interface RemoveMessageAction {
    type: ActionType.REMOVEMESSAGE,
    payload: number
}

export type MessageAction = AddMessageAction | RemoveMessageAction;