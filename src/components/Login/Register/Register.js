import './Register.css';

import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Register.css';

const Register = () => {

    const [registerData, setRegisterData] = useState({});

    const location = useLocation();
    const history = useHistory();

    const { registerUser } = useAuth();

    // on submit form
    const handleSubmit = e => {
        e.preventDefault();

        // register to firebase
        registerUser(registerData.email, registerData.password, registerData.name, location, history)

    }

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);

        // current data 
        const newData = { ...registerData };
        newData[field] = value;
        // set current data
        setRegisterData(newData);
    }


    return (
        <>
            <div className="register">
                <h4>New here?</h4>
                <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input required name="name" onChange={handleOnChange} class="form-control" id="name" />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input required name="email" onChange={handleOnChange} type="email" class="form-control" id="email" />
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input required name="password" onChange={handleOnChange} type="password" class="form-control" id="password" />
                    </div>
                    <button type="submit" className="form-submit-btn">CREATE AN ACCOUNT</button>
                </form>
            </div>
        </>
    );
};

export default Register;