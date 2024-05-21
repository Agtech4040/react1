
function Name(){
    
    const handleChange = (event) =>{event.preventDefault();
   
        if(""){
            alert("input something")
        }}
        
    return(
        <label> Name:<br></br>
        <input type = "text" placeholder = "Full Name" name="userName" 
     onChange={handleChange}/>
        </label>
    )
}
 export default Name;