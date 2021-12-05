import {useSelector} from "react-redux";
import {State} from "../../state";
import React from "react";

import CommentSection from "../../modules/CommentSection";
import LogoutButton from "../../modules/LogOutButton";

import CatTweet from "../../modules/CatTweet";

const HomePage = () => {
    const messages = useSelector((state: State) => state.message);
    const userName = useSelector((state: State) => state.login);

    return (
        <>
            <LogoutButton />
            <div className="Home">
                {userName && <h1>Welcome, {userName}!!</h1>}
                {!userName && <h1>Welcome, Random User!!</h1>}
                <CatTweet />
                <CommentSection comments={messages}/>
            </div>
        </>

    );
};

export default HomePage;