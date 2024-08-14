
// import AuthUser from "../components/authuser";
// import UnauthUser from "../components/unauthuser";
// import { useContext } from "react";
// import { myloginContext } from "../LoginContext";
// import Registration from "./Registration";
// import { Navigate, useNavigate } from "react-router-dom";

// const Login=()=>{
  
//   const {user}=useContext(myloginContext);
//   const navigate=useNavigate();

//   return(
//      <>
//      <div style={{display:"block"}}>
//       <h1></h1>
//       {user.auth ? <AuthUser/> : <UnauthUser/>}
//       </div>
      
//       <div style={{marginTop:"64px"}}>
//       <button onClick={()=>{navigate("/registration")}} >Registration</button>
//       </div>
//      </>
//   )
// }
// export default Login;




import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
const Login=()=>{
 const [uid, setUid]=useState("");
 const [pass, setPass]=useState("");
 const navigate= useNavigate();
const handleSubmit=(e)=>{
    e.preventDefault()
    let api=`http://localhost:3000/userdata/?userid=${uid}`
    axios.get(api).then((res)=>{
           if (res.data.length>=1)
           {
              if (res.data[0].password==pass)
              {
                   window.localStorage.setItem("user", res.data[0].name)
                   navigate("/update")
              }
              else 
              {
                alert("Invalid Password!!!");
              }
           }
           else 
           {
            alert("Invalid user ID")
           }
    })
}

    return(
        <>
        <div id='LPage'>
            <div style={{display:"flex"}}>
            <Button style={{marginLeft:"600px",marginTop:"10px"}} variant="outline-dark"  onClick={()=>{navigate("/home")}} >Home</Button>


            <Button style={{marginLeft:"10px",marginTop:"10px"}} variant="outline-dark"  onClick={()=>{navigate("/registration")}} >Registration</Button>

            </div>

 

<h1 style={{marginLeft:"140px",marginBottom:"50px",marginTop:"50px"}}> User Login</h1>
<Form style={{width:"500px"}}>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Enter userid</Form.Label>
<Form.Control type="text"  value={uid} onChange={(e)=>{setUid(e.target.value)}} />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Enter Password</Form.Label>
<Form.Control type="password"  value={pass} onChange={(e)=>{setPass(e.target.value)}} />
</Form.Group>
<Button variant="dark" type="submit" onClick={handleSubmit} style={{marginRight:"10px"}} >
Submit
</Button>

</Form>

</div>
        </>
    )
}
export default Login;