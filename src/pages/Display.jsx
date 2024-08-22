
import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table';

import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Display=()=>{

  const [stuData,setData]=useState([]);
  const navigate= useNavigate();

  const loadstuData=()=>{
    let url="http://localhost:3000/Student";

    axios.get(url).then((res)=>{
      setData(res.data);
      console.log(res.data)
    })
  }
  useEffect(()=>{
    loadstuData()
  },[]);

  const result=stuData.map((key)=>{
    return(
      <>
          <tr>
              <td>{key.rollno}</td>
              <td>{key.name}</td>
              <td>{key.city}</td>
              <td>{key.fees}</td>
          </tr>
      </>
    )
  })
  return(
    <>
      <Container>
          
      <Button style={{marginLeft:"1050px",marginTop:"10px"}} variant="outline-dark"  onClick={()=>{navigate("/home")}} >Home</Button>

        <h1 style={{marginLeft:"400px",marginBottom:"50px"}}>Cybrom Student Data</h1>
        <Table striped bordered hover>
        <thead>
        <tr>
          <th>Roll No</th>
          <th>Name</th>
          <th>City</th>
          <th>Fees</th>
        </tr>
        {result}
      </thead>
        </Table>

      </Container>
    </>
  )
}
export default Display;