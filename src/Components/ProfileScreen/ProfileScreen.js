import React from 'react';
import './ProfileScreen.css';
import Nav from '../HomeScreen/Nav/Nav';
import { useDataLayer } from '../context/context';
import { auth } from '../../firebase';

const ProfileScreen = () => {
    const signOut = (e) => {
        auth.signOut();
    }
    const [{user}, dispatch] = useDataLayer();
     return (
        <div className = "profileScreen">
           <Nav />
           <div className="profileScreen__body">
               <h1>Edit Profile</h1>
               <div className="profileScreen__info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Image Not Found" />
                    <div className="profileScreen__details">
                        <h2>{user?.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans</h3>
                            <button onClick = {signOut} className = "profileScreen__signOut">Sign Out</button>
                        </div>
                    </div>
               </div>
           </div>
        </div>
    )
}

export default ProfileScreen
