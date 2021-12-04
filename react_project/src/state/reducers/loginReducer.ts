import {LoginAction} from "../actions";
import {ActionType} from "../action-types";


const loginReducer = (state: string= '', action: LoginAction) => {
    switch(action.type){
        case ActionType.LOGIN:
            return action.payload;
        case ActionType.LOGOUT:
            return '';
        default:
            return state;
    }
}

export default loginReducer;