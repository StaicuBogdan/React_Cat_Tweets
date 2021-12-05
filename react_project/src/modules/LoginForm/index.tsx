import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../state";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LoginForm = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const { loginUser } =  bindActionCreators(actionCreators, dispatch);

    const [inputValue, setInputValue] = useState('');

    function handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        event.preventDefault();
        if(inputValue !== ''){
            loginUser(inputValue);
            navigate("/home", {replace: true});
        }
        else{
            alert("Your name can't be empty!");
        }
    }

    return (
        <>
            <form>
                <h3>Enter your name</h3>
                <input placeholder={'write here...'} value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                <button type="submit" onClick={handleSubmit}><FontAwesomeIcon icon={['fas', 'sign-in-alt']}/>  Start</button>
            </form>
        </>
    );
};

export default LoginForm;