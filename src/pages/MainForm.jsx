import React from "react";
import "../styles/MainForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const MainForm = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [seePassword, setSeePassword] = useState(false);
    const [error, setError] = useState("");
    const [passwordLength, setPasswordLength] = useState(0);
    const [passwordContainsNumber, setPasswordContainsNumber] = useState(false);
    const [passwordContainsSpecialCharacter, setPasswordContainsSpecialCharacter] = useState(false);


    const handleSeePassword = (e) => {
        e.preventDefault();
        setSeePassword(!seePassword);
    };

    const validateInput = () => {
        if(username === "" || email === "" || password === ""){
            setError("All fields are required");
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            setError("Invalid email");
            return false;
        }
        console.log([password.length, passwordContainsNumber, passwordContainsSpecialCharacter]);
        if(password.length < 8 || !passwordContainsNumber || !passwordContainsSpecialCharacter){
            setError("Invalid password");
            return false;
        }
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!validateInput()){
            return;
        }
        navigate('/greeting', { state: { username} });


    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordLength(e.target.value.length);
        const containsNumber = e.target.value.match(/\d+/g);
        setPasswordContainsNumber(containsNumber !== null);
        const containsSpecialCharacter = e.target.value.match(/[^a-zA-Z0-9]/g);
        setPasswordContainsSpecialCharacter(containsSpecialCharacter !== null);
    }

    return (
        <div className="mainForm">
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="usernameContainer inputContainer">
                    <label htmlFor="username">
                       Username:
                 </label>
                       <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} tabIndex="1" className="emailInput"/>
                </div>
                <div className="emailContainer inputContainer">
                    <label htmlFor="email">
                        Email:
                    </label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} tabIndex="2" className="passwordInput"/>
                </div>
                
                <div className="passwordContainer inputContainer">
                    <label htmlFor="password">
                        Password:
                    </label>
                    <div className="passwordInputContainer">    
                        
                        <input type={seePassword ? 'text' : 'password'} value={password} onChange={(e) => handlePasswordChange(e)} tabIndex="3" className="passwordInput"/>
                        { <div aria-label="Toggle password visibility" onClick={handleSeePassword} tabIndex="4" className="showPassButton">{seePassword ? 'Hide':'Show'}</div>}
                    </div>
                        <ul className="requirementsContainer">
                            <li className={passwordLength>=8 ? "completed" : ""}> 
                                Needs to be at least 8 characters long
                            </li>
                            <li className={passwordContainsNumber ? "completed" : ""}>
                                Needs to contain at least one number
                            </li>
                            <li className={passwordContainsSpecialCharacter ? "completed" : ""}>
                                Needs to contain at one special character
                            </li>
                        </ul>

                    </div>
                
                {error && <div className="error">{error}</div>}
                <button aria-label="Submit" type="submit" tabIndex="5" className="submitButton">Submit</button>
            </form>
        </div>
    );
};
    export default MainForm;