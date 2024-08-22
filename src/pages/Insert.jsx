
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { message } from 'antd';
import { toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';


const Insert=()=>{
  const [input,setInput]=useState({})
  const navigate= useNavigate();

  const handlechange=(e)=>{
    let name=e.target.name;
    let value=e.target.value
    setInput(values=>({...values,[name]:value}))
  }

  const handleclick=()=>{
    let url="http://localhost:3000/Student";
    axios.post(url,input).then((res)=>{
      alert("Data Posted Successfully")
      // const notify = () => toast.success("Data Posted Successfully");
      // message.success("Data Posted Successfully")
      setInput({});
    }).catch((err)=>{
      console.log("Error",err);
    })
  }
  return(
    
    <>

    <section id='insertSection' style={{width:"90%",height:"825px"}}>
    <div style={{width:"500px",marginLeft:"350px",marginTop:"60px",marginRight:"60px"}}>


    <Button style={{marginLeft:"700px",marginTop:"10px"}} variant="outline-dark"  onClick={()=>{navigate("/home")}} >Home</Button>
    <Container>

    <h1 style={{marginLeft:"25px",marginBottom:"50px"}}>Insert Student Records</h1>

    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Roll No</Form.Label>
        <Form.Control type="text" name="rollno" value={input.rollno} onChange={handlechange}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" value={input.name} onChange={handlechange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" name="city" value={input.city} onChange={handlechange}  />
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Fees</Form.Label>
        <Form.Control type="text" name="fees" value={input.fees} onChange={handlechange} />
      </Form.Group>

      <Button variant="dark" type="submit" onClick={handleclick}>
        Submit
      </Button>
    </Form>
    </Container>
    </div>
    </section>
    </>
  
  )
}
export default Insert;
