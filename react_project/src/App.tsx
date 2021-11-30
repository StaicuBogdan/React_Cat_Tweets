import React, {useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import { actionCreators, State } from './state';

function App() {
    const dispatch = useDispatch();
    const { addMessage } =  bindActionCreators(actionCreators, dispatch);
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
          }
      }}>Post Message!</button>
      <ul>
          {messages.map( (message) => {
              return (
                  <li>{message}</li>
              )
          })}
      </ul>
    </div>
  );
}


export default App;
