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

           <Card style={{ width: '12rem' }}>
      <Card.Img variant="top" src="/public/Logo2.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
           
        </div>
        </>
    )
}

export default Home;