import React from 'react';
import { GoogleLogin } from '@react-oauth/google';



const SignUp =() =>{
    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };
    return(
    <div>
        <h2>React Google Login</h2>
        <br />
        <br />
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </div>
    )

}
export default SignUp;
    