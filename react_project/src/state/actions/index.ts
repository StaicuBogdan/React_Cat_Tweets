import {ActionType} from "../action-types";

interface AddMessageAction {
    type: ActionType.ADDMESSAGE,
    payload: string
}

export type MessageAction = AddMessageAction;