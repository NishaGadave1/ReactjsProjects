import { useState } from "react"


export default function Loginform()
{
    let[form, setForm] = useState({
        fullname : " ",
        username : " ",
        password : " "
    });

    function handleDefault(event)
    {
      event.preventDefault();
      console.log(form);
      setForm({
        fullname : " ",
        username : " ",
        password : " "
      })
    }

    function handleSubmit(event)
    {
        let fieldName = event.target.name;
        let newVal = event.target.value;
        setForm((currVal) => 
        {
            currVal[fieldName] = newVal;
            return {...currVal}
        })
    }

    return(
        <>
           <h2 style={{backgroundColor : "pink" , color : "black"}}> LoginForm! </h2>
           <div style={{border : "2px solid white" , padding: "10px" , margin: "10px"}}>
           <form onSubmit={handleDefault}>
              <label htmlFor="fullname" style={{color: "green"}}> FULLNAME : </label>
              <input placeholder="Enter fullName" type="text" name="fullname" 
              value={form.fullname} onChange={handleSubmit} id="fullname"/>
              <br></br>
              <label htmlFor="username"  style={{color: "green"}}> USERNAME : </label>
              <input placeholder="Enter username" type= "text" name="username"
               value={form.username} onChange={handleSubmit} id="username"/>
              <br></br>
              <label htmlFor="password"  style={{color: "green"}}> PASSWORD : </label>
              <input placeholder="Enter password" type="password" name="password" 
              value={form.password} onChange={handleSubmit} id="password"/>
              <br></br>
              <br></br>
              <button onClick={handleSubmit} style={{backgroundColor : "blue" , width : "300px"}}> Submit </button>
           </form>
           </div>
        </>
    )
}