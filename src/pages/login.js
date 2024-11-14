import axios from "axios";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import "../styles/form.css";
import "../styles/style.css";
import Input from "../components/Input";
import Button from "../components/Button";

const Login = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [budget, setBudget] = useState("");
    return (
        <div>
            <form id="signupForm" class="form_container">
                <div className="logo_container">
                    <img src="logo.png" alt="" />
                </div>
                <div className="title_container">
                    <p className="title">Login to your Accounr</p>
                    <span className="subtitle">
                        Get started with our app, just create an account and enjoy the experience.
                    </span>
                </div>
                <Input value="Email" input={email} setInput={setEmail} />
                <Input value="Password" input={password} setInput={setPassword} />
                <Button name={name} email={email} budget={budget} password={password} />
            </form>
        </div>
    );
};
export default Login;
