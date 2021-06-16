import React,{useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    const history = useHistory();
    const [show, handleShow] = useState(false);

    const transitionNavbar = () => {
        if(window.scrollY > 100){
            handleShow(true);

        }
        else{
            handleShow(false);
        }
    }


    useEffect(() => {
        window.addEventListener('scroll', transitionNavbar)


        return () => window.removeEventListener('scroll',transitionNavbar)
    },[])
    return (
        <div className = {`nav ${show && 'nav__black'}`}>
            <div className="nav__contents">
           <img onClick = {() => history.push('/')} className = "nav__logo" src="https://i1.wp.com/freepngimages.com/wp-content/uploads/2016/10/netflix-logo.png?fit=895%2C559g" alt="Image Not Found" />
           <img onClick = {() => history.push('/profile')} className = "nav__avatar" src = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt = "Image Not Found" />
           </div>
          
        </div>

    )
}

export default Nav
