import './Account.css';

import React from 'react';
import Register from './Register/Register';
import Login from './Login/Login';

const Account = () => {
    return (
        <section className="account-container" >
            <div className="section-wraper">
                <div className="page-title">
                    <h3>Account</h3>
                </div>
                <div className="form-wrape">
                    <Register></Register>
                    <Login></Login>
                </div>
            </div>

        </section>
    );
};

export default Account;