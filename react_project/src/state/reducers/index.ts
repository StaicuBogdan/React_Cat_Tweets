import {combineReducers} from "redux";
import messageReducer from "./messageReducer";

const reducers = combineReducers({
    message: messageReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>;