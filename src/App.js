import React, { useState } from 'react';
import Name from './Components/Name'
import Email from './Components/Email'
import Number from './Components/Number'
import Submit from './Components/Submit'



function App() {
  const [state, setState] = useState({
    userName: "",
    userEmail: "",
    userTel: ""
  })
  
  const handleChange = (event) =>{
    const value = event.target.value;
    setState({...state, [event.target.value]: value});
     
    

    }

    const handleSubmit = (event) =>{
      event.preventDefault();
      if (!state){
        alert ("Go back and input something.")}
 alert ("successful")
          
    }
  return (
    <section>
      <p>KINDLY FILL THIS SIMPLE FORM</p>
    <form onSubmit = {handleSubmit}
    onChange = {handleChange}
    action=""
    className = "form">
    <Name value = {state.userName}/>
    <Email value = {state.userEmail}/>
    <Number value = {state.userTel}/>
    <Submit/>
    </form>
    </section>
  )
}



export default App;
