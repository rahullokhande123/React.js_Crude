
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';


const Insert=()=>{
  const [input,setInput]=useState({})

  const handlechange=(e)=>{
    let name=e.target.name;
    let value=e.target.value
    setInput(values=>({...values,[name]:value}))
  }

  const handleclick=()=>{
    let url="http://localhost:3000/Student";
    axios.post(url,input).then((res)=>{
      alert("DATA POSTED SUCCESSFULLY")
      setInput({});
    }).catch((err)=>{
      console.log("Error",err);
    })
  }
  return(
    
    <>
    <section style={{width:"90%"}}>
    <div style={{width:"500px",marginLeft:"350px",backgroundColor:"green",marginTop:"60px",marginRight:"60px"}}>
    <Container>
    <h1 style={{marginLeft:"160px",marginBottom:"50px"}}>Insert Page</h1>
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

      <Button variant="primary" type="submit" onClick={handleclick}>
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
