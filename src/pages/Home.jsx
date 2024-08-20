import { useState } from "react";
import Search from "./Search";
import Login from "./Login";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { CiLogin } from "react-icons/ci";

const Home=()=>{

  const [val,setVal]=useState("");
  
    return(
        <>
        <div id="homeCSS">
          <h1> Welcome To Cybrom Pvt. Ltd. Bhopal </h1>

           <Search/>

           {/* ========================= Cart Section ======================= */}

      <div id="homeCart">

      <Card style={{ width: '15rem',marginRight:"10px" }}>
      <Card.Img variant="top" src="/public/python.jpeg" style={{width:"100%"}}/>
      <Card.Body>
        <Card.Title>Python</Card.Title>
        <Card.Text>
          <b style={{fontSize:"13px"}}>
          Fullstack Python
          </b>
          <br />
          <b style={{fontSize:"13px"}}>
          Duration: 6 Months 
          </b>
          <b style={{fontSize:"13px"}}>
           + 2 Month Intrenship
          </b>
        </Card.Text>
        <Card.Text>
          <b>Fees : 45,000 Rs.</b>
        </Card.Text>
        <Button variant="dark">Purchase</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '10rem',marginRight:"10px" }}>
      <Card.Img variant="top" src="/public/java.webp" style={{width:"100%",height:"110px"}}/>
      <Card.Body>
        <Card.Title>Java</Card.Title>
        <Card.Text>
          <b style={{fontSize:"13px"}}>
          Fullstack Java
          </b>
        </Card.Text>
        <Card.Text>
          <b>Fees : 50,000 Rs.</b>
        </Card.Text>
        <Button variant="dark">Purchase</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '10rem' }}>
      <Card.Img variant="top" src="/public/python.jpeg" style={{width:"100%"}}/>
      <Card.Body>
        <Card.Title>MERN Stack</Card.Title>
        <Card.Text>
          <b style={{fontSize:"13px"}}>
          MongoDB, Express, React, and Node.
          </b>
         
        </Card.Text>
        <Card.Text>
          <b>Fees : 42,000 Rs.</b>
        </Card.Text>
        <Button variant="dark">Purchase</Button>
      </Card.Body>
    </Card>
      </div>
      
        </div>
        </>
    )
}

export default Home;