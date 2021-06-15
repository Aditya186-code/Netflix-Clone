import React,{useState} from 'react';
import './App.css';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './Components/Login/Login';

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="app">
      
      <Router>
        <Switch>
          <Route path = '/signin'>
            <Login />
          </Route>
          <Route path = '/'>
            <HomeScreen />
          </Route>


        </Switch>

      </Router>
    </div>
  );
}

export default App;
