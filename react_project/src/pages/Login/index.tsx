import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import LoginForm from "../../modules/LoginForm";


const LoginPage = () => {
    return (
        <div className="Login">
            <LoginForm/>
            {/*
            <FontAwesomeIcon icon={['fas', 'arrow-up']} size="3x"/>
            <FontAwesomeIcon icon={['fab', 'twitter']} size="3x"/>
            <span className="fa-layers fa-fw">
                <FontAwesomeIcon icon={['fas', 'square']} color="green" size="6x"/>
                <FontAwesomeIcon icon={['fas', 'check-square']}  transform="shrink-6" size="6x"/>
            </span>
            <FontAwesomeIcon
                icon={['fab', 'react']}
                //mask={['fas', 'circle']}
                size="6x"

                color="green"
            />
            */}
        </div>
    );
};

export default LoginPage;
