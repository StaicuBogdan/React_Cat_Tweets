import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators, State} from "../../state";

interface Props {
    comments: string[]
}

const CommentList = ({comments}:Props) => {
    const dispatch = useDispatch();
    const { removeMessage } =  bindActionCreators(actionCreators, dispatch);

    return(
        <div className="CommentList">
            {comments.map( (message: string, idx: number) => {
                return (
                    <div style={{border:'1px solid black', padding: '10px 0px', margin:'10px 0'}} key={idx}>
                        {message} <button onClick={() => removeMessage(idx)}> <FontAwesomeIcon icon={['fas', 'trash-alt']}/> Delete comment</button>
                    </div>
                )
            })}
        </div>
    )
}

export default CommentList;