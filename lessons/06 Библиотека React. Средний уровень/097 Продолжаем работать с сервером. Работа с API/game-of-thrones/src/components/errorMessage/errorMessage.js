import React from "react";
import img from './error.jpg';
import './errorMessage.css';

const ErrorMessage = () => {
    return (
        <>
            <img src={img} alt='error'></img>
            <span>Somthing goes wrong</span>
        </>
    )
}

export default ErrorMessage;