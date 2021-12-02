import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators, State} from "../../state";
import React, {useState} from "react";

const HomePage = () => {
    const dispatch = useDispatch();
    const { addMessage, removeMessage } =  bindActionCreators(actionCreators, dispatch);
    const messages = useSelector((state: State) => state.message);

    const [messageValue, setMessageValue] = useState('');
    return (
        <div className="App">
            <h1>Test frate</h1>
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
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: '25vw',
                margin: 'auto',
                fontSize: '2em',
                padding: '20px'
            }}>
                {messages.map( (message, idx) => {
                    return (
                        <div style={{border:'1px solid black', padding: '10px 0px', margin:'10px 0'}} key={idx}>
                            {idx} {message} <button onClick={() => removeMessage(idx)}>Delete comment</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default HomePage;