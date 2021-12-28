import './Home.css';
import React from 'react';
import useAuth from '../../hooks/useAuth';

const Home = () => {


    const { logOut, user } = useAuth();

    return (
        <div className='home'>
            <div className="home-box">
                <h2>User Details</h2>
                <h6>Name: {user.displayName}</h6>
                <h6>Email: {user.email}</h6>
                <button onClick={logOut} class="form-submit-btn">Log Out</button>
            </div>
        </div>
    );
};

export default Home;