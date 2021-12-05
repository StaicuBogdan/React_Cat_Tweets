import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../state";
import Comment from "../../components/CommentComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface Props {
    comments: string[]
}

const CommentSection = ({comments}:Props) => {
    const dispatch = useDispatch();
    const { addMessage } =  bindActionCreators(actionCreators, dispatch);

    const [messageValue, setMessageValue] = useState('');

    return (
        <>
            <div className="CommentInput">
                <textarea
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
                }}><FontAwesomeIcon icon={['fas', 'edit']}/> Add comment</button>
            </div>
            {comments.length !== 0 && <div className="CommentList">
                {comments.map( (message: string, idx: number) => {
                    return (
                        <Comment id={idx} message={message} />
                    )
                })}
            </div>}


        </>

    )
}

export default CommentSection;