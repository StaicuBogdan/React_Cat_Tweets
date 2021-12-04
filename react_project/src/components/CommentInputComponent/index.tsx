import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../state";

const CommentInput = () =>{
    const dispatch = useDispatch();
    const { addMessage } =  bindActionCreators(actionCreators, dispatch);

    const [messageValue, setMessageValue] = useState('');

    return (
        <div className="CommentInput">
            <input type="text"
                   value = {messageValue}
                   placeholder="Write here..."
                   onChange={(e) => {
                       setMessageValue(e.target.value)
                   }}
            />

            <button onClick={() => {
                if(messageValue !== ''){
                    addMessage(messageValue);
                    setMessageValue('');
                }
            }}>Post Message!</button>
        </div>
    )
}

export default CommentInput;