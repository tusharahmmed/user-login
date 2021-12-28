import React from 'react';
import img from './loader.gif'

const Preloader = () => {

    const pre = {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <div style={pre}>
            <img src={img} width={100} alt="" />
        </div>
    );
};

export default Preloader;