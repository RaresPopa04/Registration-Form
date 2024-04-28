import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Greeting.css";

const Greeting = () => {
    const location = useLocation();

    const navigate = useNavigate();
    const goBack = () => {
        navigate('/');
    }
    if(location.state === null){
        return (
        <div className="greetingContainer">
            <h1 className="greetingTitle redTitle">Unauthorized</h1>
            <button onClick={goBack} aria-label = "Go back" className="backButton">Back</button>
        </div>
    )

    }
    const username = location.state.username;
    return (
        <div className="greetingContainer">
            <h1 className="greetingTitle">Welcome {username}</h1>
            <button onClick={goBack} aria-label = "Go back" className="backButton">Back</button>
        </div>
    );
}

export default Greeting;
