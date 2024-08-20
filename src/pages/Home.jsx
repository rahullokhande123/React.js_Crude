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

      <Card style={{ width: '12rem' }}>
      <Card.Img variant="top" src="/public/python.jpeg" style={{width:"190px"}}/>
      <Card.Body>
        <Card.Title>Python</Card.Title>
        <Card.Text>
          Fullstack Python 
        </Card.Text>
        <Button variant="primary">Purchase</Button>
      </Card.Body>
    </Card>
      </div>
      
        </div>
        </>
    )
}

export default Home;