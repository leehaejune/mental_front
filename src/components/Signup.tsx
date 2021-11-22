import React, { useState } from 'react';
import logo from './logo.svg';


const Signup = () => {
  const [input, setInput] = useState({
    id:'',
    password:''
  });

  const {id, password} = input;

  const onChange = () =>{
    
  } 
    


  return (
    <div className="App">
      <input />
    </div>
  );
}

export default Signup;
