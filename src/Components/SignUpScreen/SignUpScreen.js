 import React from 'react';
import { useState } from 'react';
import './SignUpScreen.css';
import {auth} from '../../firebase';

const SignUpScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password).catch((error) => alert(error.message));
        setEmail('');
        setPassword('');
    }

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).catch(error => alert(error.message));

        setEmail('');
        setPassword('');
        

    }
    return (
        <div className = "signUpScreen">
            <form onSubmit = {signIn}>
            <h1>Sign In</h1>
            <input value = {email} onChange = {e => setEmail(e.target.value)} type="email" placeholder = "Email Address.." />
            <input value = {password} onChange = {e => setPassword(e.target.value)} type="password" placeholder = "Password" />
            <button type = "submit">Sign In</button>
            <h4><span className = "signUpScreen__gray">New to Netflix ?</span><span onClick = {register} className = "signUpScreen__link"> Sign up Now</span></h4>
            </form>
        </div>
    )
}

export default SignUpScreen
