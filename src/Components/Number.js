

function Number(){
    const handleChange = (event) =>{event.preventDefault();
        
       
   
        if(""){
            alert("input something")
        }}
        
    return(
        
        <label> <br></br>Enter Phone Number:<br></br>
        <input type="tel" placeholder = "Phone number" name= "userTel" 
            onChange={handleChange}/>
    
        </label>
    )
}
 export default Number; 