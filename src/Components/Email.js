
function Email(){ 
    const handleChange = (event) =>{event.preventDefault();
   
    }
    return(
        <label > <br></br>Enter Email:<br></br>
        <input type = "email" placeholder = "email" name = "userEmail" 
        onChange={handleChange}/>
        </label>
    )
}

 export default Email; 