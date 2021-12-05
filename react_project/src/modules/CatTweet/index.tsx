import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, {useEffect, useState} from "react";


const CatTweet = () => {
    const [fact, setFact] = useState({data: ""});
    const colors = ["#78a83f", "#9fa400", "#794141", "#00a466",
        "#0082e6", "#3366ac", "#323a86", "#a873f2",
        "#b078b0", "#a54700", "#b69d11", "#714a0e",
        "#677659", "#4c852c", "#a97c00"]
    const oldColor = "";

    useEffect(() => {
        axios.get("https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1").then((result) => {
            setFact({data: result.data.text})
        });
    }, [])

    function getFact(){
        axios.get("https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1").then((result) => {
            setFact({data: result.data.text})
            let currentColor = colors[Math.floor(Math.random()*15)];
            // @ts-ignore
            document.getElementById("twitterIcon").style.color = currentColor;
            // @ts-ignore
            document.getElementById("factButton").style.backgroundColor = currentColor;
            document.body.style.backgroundColor = currentColor;

        });
    }

    return(
        <div className="CatTweet">
            <section style={{padding:"4%"}}>
                <FontAwesomeIcon id="twitterIcon" icon={["fab", "twitter-square"]} style={{float:"left", color:"#5B667C"}} size="3x"/>
                <button id="factButton" style={{float:"right", borderRadius:"5px", height:"4rem", width:"6rem", backgroundColor:"#5B667C", fontSize:"1.2rem"}} onClick={getFact}>New fact</button>
            </section>
            {fact.data && <div><FontAwesomeIcon icon={["fas", "quote-left"]}/> {fact.data}</div>}
        </div>
    )
}

export default CatTweet;