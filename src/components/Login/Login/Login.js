import './Login.css';

import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css'

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { handleLogin, user, googleSignIn } = useAuth();

    // console.log(user)

    const location = useLocation();
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();

        // login
        console.log(loginData)

        if (loginData.email !== '' && loginData.password !== '') {
            // call login method
            handleLogin(loginData.email, loginData.password, location, history);
        }
    }

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);

        // current data 
        const newData = { ...loginData };
        newData[field] = value;
        // set current data
        setLoginData(newData);
    }


    return (
        <div className="register">
            <h4>Already registered?</h4>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input required onChange={handleOnChange} name="email" type="email" class="form-control" id="email" />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input required onChange={handleOnChange} name="password" type="password" class="form-control" id="password" />
                </div>
                <button type="submit" className="form-submit-btn">SIGN IN</button>
                <p className="or">or</p>
            </form>
            <span onClick={() => { googleSignIn(location, history) }} className="google-btn">
                <img src="https://i.stack.imgur.com/QPLoG.png" alt="" />
            </span>
        </div>
    );
};

export default Login;