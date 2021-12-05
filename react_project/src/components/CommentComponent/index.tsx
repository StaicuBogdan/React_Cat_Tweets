import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../state";

interface CommentProps {
    id: number,
    message: string
}

const Comment = ({id, message}: CommentProps) => {
    const dispatch = useDispatch();
    const { removeMessage } =  bindActionCreators(actionCreators, dispatch);

    return(
        <div className="Comment" key={id}>
            <div>{message}</div>
            <button onClick={() => removeMessage(id)}> <FontAwesomeIcon icon={['fas', 'trash-alt']}/> Delete </button>
        </div>
    )
}

export default Comment;