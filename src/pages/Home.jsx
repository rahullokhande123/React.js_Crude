import { useState } from "react";
import Search from "./Search";
import Login from "./Login";
import Profile from "./Profile";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { CiLogin } from "react-icons/ci";
import { Navigate, useNavigate } from "react-router-dom";


const Home=()=>{

  const [val,setVal]=useState("");
  const navigate=useNavigate();
  
    return(
        <>
        <div id="homeCSS">
          <h1> Welcome To Cybrom Pvt. Ltd. Bhopal </h1>

          {/* ================= Profile =============== */}

          <a href="#" style={{textDecoration:"none",color:"black"}}>
          <img src="/public/r1.jpg" width="50px" height="50px" onClick={()=>{navigate("/profile")}} 
          style={{border:"1px solid white",borderRadius:"50%",marginLeft:"20px"}} />
          
          <b style={{marginLeft:"10px"}} onClick={()=>{navigate("/profile")}} >Mr. Rahul Lokhande</b>
          </a>

           <Search/>

           {/* ========================= Cart Section ======================= */}
      <h2 style={{marginLeft:"50px"}}>Over Courses -</h2>
      <section id="cart"  >
      <div id="homeCart">

      <Card style={{ width: '15rem',marginRight:"20px" }}>
      <Card.Img variant="top" src="/public/python.jpeg" style={{width:"100%",height:"130px"}}/>
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
      <Card.Img variant="top" src="/public/java.webp" style={{width:"100%",height:"130px"}}/>
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
      <Card.Img variant="top" src="/public/mern.jpg" style={{width:"100%",height:"130px"}}/>
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
        
      <div id="homeCart2">
      <div style={{display:"flex"}}>
        <div  style={{display:"flex"}}>
        <div id="cartSide">
        <h2 style={{fontSize:"25px",textAlign:"center",margin:"10px"}}>Total Course</h2>
        <b style={{fontSize:'25px',color:"blue",marginLeft:"20px"}}>100+</b>
        <img src="/public/books.png" width="50px" style={{margin:'10px'}} />
        </div>

        <div id="cartSide1">
        <h2 style={{fontSize:"25px",textAlign:"center",margin:"10px"}}>Hours Spend</h2>
        <b style={{fontSize:'25px',color:"blue",marginLeft:"20px"}}>245+</b>
        <img src="/public/alarm2.png" width="55px" style={{margin:'10px'}} />
        </div>
        </div>

        </div>
        <div id="achive" style={{display:"block"}}>
          <b style={{fontSize:"20px",margin:"10px"}}> Achievements - </b> <br />
          <img src="/public/medal2.png" width="60px" style={{margin:"20px"}} />
          <img src="/public/medal1.png" width="60px" style={{margin:"20px"}} />
          <img src="/public/medal3.png" width="60px" style={{margin:"20px"}} />
          <div style={{marginBottom:"5px",marginLeft:"10px",color:"green"}}>
            <b style={{fontSize:"15px"}}>Complete Full Course And </b> <br />
            <b style={{fontSize:"15px"}}>Clear All Exams </b>
          </div>

        </div>
        

        </div>
      </section>

      <b style={{paddingLeft:"200px",fontSize:"25px"}}>Students Growth - </b>
      <section style={{display:"flex"}}>

        <div>
            <img src="/public/new.png" width="700px" height="232px" style={{marginLeft:"50px"}} />
        </div>
              
        <div style={{display:"block"}}>
            <b></b>
            <img nkjjkkhkjh src="/public/new4.png" width="300px" height="240px" style={{marginLeft:"0px"}} />
        </div>
             
      </section>
      
      
    </div>
        </>
    )
}

export default Home;