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
      <h2 style={{marginLeft:"50px"}}>Over Courses -</h2>
      <section id="cart" >
      <div id="homeCart">

      <Card style={{ width: '15rem',marginRight:"20px" }}>
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
           + 2 Month Internship
          </b>
        </Card.Text>
        <Card.Text>
          <b>Fees : 45,000 Rs.</b>
        </Card.Text>
        <Button variant="dark">Purchase</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '15rem',marginRight:"20px" }}>
      <Card.Img variant="top" src="/public/java.webp" style={{width:"100%",height:"160px"}}/>
      <Card.Body>
        <Card.Title>Java</Card.Title>
        <Card.Text>
          <b style={{fontSize:"13px"}}>
          Fullstack Java
          </b>
          <br />
          <b style={{fontSize:"13px"}}>
          Duration: 8 Months 
          </b>
          <b style={{fontSize:"13px"}}>
           + 2 Month Internship
          </b>
        </Card.Text>
        <Card.Text>
          <b>Fees : 50,000 Rs.</b>
        </Card.Text>
        <Button variant="dark">Purchase</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="/public/mern.jpg" style={{width:"100%",height:"160px"}}/>
      <Card.Body>
        <Card.Title>MERN Stack</Card.Title>
        <Card.Text>
          <b style={{fontSize:"13px"}}>
          MongoDB, Express, React, Node.
          </b>
          <br />
          <b style={{fontSize:"13px"}}>
          Duration: 6 Months 
          </b>
          <b style={{fontSize:"13px"}}>
           + 2 Month Internship
          </b>
        </Card.Text>
        <Card.Text>
          <b>Fees : 42,000 Rs.</b>
        </Card.Text>
        <Button variant="dark">Purchase</Button>
      </Card.Body>
    </Card>
      </div>

      <div id="cartSide">
        <h2 style={{fontSize:"25px",textAlign:"center",margin:"10px"}}>Total Course</h2>
        <b style={{fontSize:'25px',color:"blue",marginLeft:"20px"}}>100+</b>
        <img src="/public/books.png" width="50px" style={{margin:'10px'}} />
        </div>

        <div id="cartSide1">
        <h2 style={{fontSize:"25px",textAlign:"center",margin:"10px"}}>Hours Spend</h2>
        <b style={{fontSize:'25px',color:"blue",marginLeft:"20px"}}>245+</b>
        <img src="/public/books.png" width="50px" style={{margin:'10px'}} />
        </div>
        
      </section>
    </div>
        </>
    )
}

export default Home;