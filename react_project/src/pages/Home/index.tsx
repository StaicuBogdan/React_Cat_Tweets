import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators, State} from "../../state";
import React from "react";
import {useNavigate} from "react-router-dom";
import CommentInput from "../../components/CommentInputComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CommentList from "../../components/CommentListComponent";

const HomePage = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const { logoutUser } =  bindActionCreators(actionCreators, dispatch);
    const messages = useSelector((state: State) => state.message);
    const userName = useSelector((state: State) => state.login);

    function handleLogout(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        event.preventDefault();
        logoutUser();
        navigate("/", {replace: true});
    }

    return (
        <>
            <div className="ButtonDiv">
                <div/>
                <div/>
                <button className="LogoutButton" onClick={handleLogout}><FontAwesomeIcon icon={['fas', 'door-open']}/> Logout </button>
            </div>
            <div className="Home">
                <h2>Welcome, {userName}!!</h2>


                <CommentInput />

                <CommentList comments={messages}/>
            </div>
        </>

    );
};

export default HomePage;