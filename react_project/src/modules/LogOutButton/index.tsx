import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../state";

const LogoutButton = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const { logoutUser } =  bindActionCreators(actionCreators, dispatch);

    function handleLogout(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        event.preventDefault();
        logoutUser();
        navigate("/", {replace: true});
    }

    return(
        <div className="LogoutButtonDiv">
            <div/>
            <div/>
            <button className="LogoutButton" onClick={handleLogout}><FontAwesomeIcon icon={['fas', 'door-open']}/> Logout </button>
        </div>
    )
}

export default LogoutButton;