import axios from "axios";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import "../styles/form.css";
import "../styles/style.css";
import Input from "../components/Input";

const Login = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    return (
        <div>
            <form id="signupForm" class="form_container">
                <div className="logo_container">
                    <img src="logo.png" alt="" />
                </div>
                <div className="title_container">
                    <p className="title">Create new Account</p>
                    <span className="subtitle">
                        Get started with our app, just create an account and enjoy the experience.
                    </span>
                </div>
                <Input value="Name" input={name} setInput={setName} />
                <Input value="Email" input={email} setInput={setEmail} />
                <Input value="password" input={password} setInput={setPassword} />
                <button title="Sign In" type="submit" className="sign-in_btn">
                    <span>Sign In</span>
                </button>
                <p className="note">Terms of use &amp; Conditions</p>
            </form>
        </div>
    );
};
export default Login;
