import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../state";

interface CommentProps {
    key: number,
    message: string,
    id: number
}

const Comment = (props: CommentProps) => {
    const dispatch = useDispatch();
    const { removeMessage } =  bindActionCreators(actionCreators, dispatch);

    return(
        <div className="Comment" key={props.id}>
            <div>{props.message}</div>
            <button onClick={() => removeMessage(props.id)}> <FontAwesomeIcon icon={['fas', 'trash-alt']}/> Delete </button>
        </div>
    )
}

export default Comment;