import React from 'react';
import { useState } from 'react';
import './Login.css';

const Login = () => {
    const [signIn, setSignIn] = useState(false);
    return (
        <div className = "loginScreen">
           <div className="loginScreen__background">
           <img className = "loginScreen__logo" src="https://i1.wp.com/freepngimages.com/wp-content/uploads/2016/10/netflix-logo.png?fit=895%2C559g" alt="Image Not Found" />
           <button onClick className = "loginScreen__button" onClick = {() =>setSignIn(true)}>Sign In</button>
           </div>
           <div className="loginScreen__gradient"></div>
           <div className="loginScreen__body">
               <>
               <h1>Unlimited Films,TV Programmes and More</h1>
               <h2>Watch anywhere. Cancel anytime.</h2>
               <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
               </>
               <div className="loginScreen__input">
                   <form>
                       <input type="email" placeholder = "Email Address"/>
                       <button onClick = {() => setSignIn(true)} className = "loginScreen__getStarted">GET STARTED</button>
                   </form>
               </div>
           </div>
        </div>
    )
}

export default Login
