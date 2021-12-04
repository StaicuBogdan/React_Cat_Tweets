import {combineReducers} from "redux";
import messageReducer from "./messageReducer";
import loginReducer from "./loginReducer";

const reducers = combineReducers({
    message: messageReducer,
    login: loginReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>;