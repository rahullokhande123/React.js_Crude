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

      <Card style={{ width: '10rem' }}>
      <Card.Img variant="top" src="/public/python.jpeg" style={{width:"100%"}}/>
      <Card.Body>
        <Card.Title>Python</Card.Title>
        <Card.Text>
          Fullstack Python 
        </Card.Text>
        <Card.Text>
          <b>Fees : 45,000 Rs.</b>
        </Card.Text>
        <Button variant="dark">Purchase</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '10rem' }}>
      <Card.Img variant="top" src="/public/python.jpeg" style={{width:"100%"}}/>
      <Card.Body>
        <Card.Title>Java</Card.Title>
        <Card.Text>
          Fullstack Java 
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
        MongoDB, Express, React, and Node. 
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