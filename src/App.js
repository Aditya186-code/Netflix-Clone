import React from 'react';
import './App.css';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './Components/Login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import {useDataLayer} from './Components/context/context';
import ProfileScreen from './Components/ProfileScreen/ProfileScreen';

function App() {

  const [{user}, dispatch] = useDataLayer();

  useEffect(() => {
    const unsubscribe =   auth.onAuthStateChanged(authUser => {
      if(authUser){
        dispatch({
          type:"SET__LOGIN",
          data : authUser
        })
        console.log("user is signed in")
      }
      else{
        dispatch({
          type: 'SET__LOGOUT',
          data: null
        })
        console.log("User is not signed in")
      }
    })
    return () => unsubscribe();

  },[dispatch])
  return (
    <div className="app">
      
      <Router>
       {!user ?  (<Login />)
         :
           (
            <Switch>
              <Route path = '/profile'>
                <ProfileScreen />
              </Route>
          <Route exact path = '/'>
            <HomeScreen />
          </Route>


        </Switch>
           )
       }

      </Router>
    </div>
  );
}

export default App;
