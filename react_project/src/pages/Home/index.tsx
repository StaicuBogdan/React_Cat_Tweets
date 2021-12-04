import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators, State} from "../../state";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const HomePage = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const { addMessage, removeMessage, logoutUser } =  bindActionCreators(actionCreators, dispatch);
    const messages = useSelector((state: State) => state.message);
    const userName = useSelector((state: State) => state.login);

    const [messageValue, setMessageValue] = useState('');

    function handleLogout(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        event.preventDefault();
        logoutUser();
        navigate("/", {replace: true});
    }


    return (
        <div className="Home">
            <h2>Welcome, {userName}!!</h2>
            <button onClick={handleLogout}> Logout </button>
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
                width: '90%',
                margin: 'auto',
                fontSize: '2em',
                paddingLeft: '40px'
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