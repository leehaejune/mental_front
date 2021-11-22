import './App.css';
import React from "react";
import { Router, Route } from 'react-router-dom';
import Login from './routes/Login';
import Home from './routes/Home';


interface asv{
  exact : boolean;
}

function App() {
  return (
    <Router>
      <div>
        <div>
          <Route path ="/" exact ={true} component={Home}/>
          <Route path ="/login" component={Login}/>

        </div>
      </div>
    </Router>
  );
}

export default App;
