 
import axios from "axios";
import { useState } from "react";
import Table from 'react-bootstrap/Table';

import React from 'react';
import { Button, message } from 'antd';

import { useNavigate } from "react-router-dom";


const Search=()=>{

  const holdNavigate=useNavigate();
  const gotoDisplay=()=>{
    holdNavigate("/display")
  }

  const back=()=>{
    holdNavigate(-1)
  }
  

  const [rno,setrno]=useState("")
  const [mydata,setmydata]=useState([])

  const handlesearch=()=>{
    let url=`http://localhost:3000/Student/?rollno=${rno}`
    axios.get(url).then((res)=>{
      setmydata(res.data)
    })
  }

  let ans;
  if(mydata.length>0){
   ans=mydata.map((key)=>{
    return(
      <>
      <tr>
        <td>
          Roll No.
        <td>{key.rollno}</td>
        </td>

        <th>
          Name
          <td>{key.name}</td>
        </th>
        <th>
          City
        <td>{key.city}</td>
        </th>
        
        <th>
          Fees
        <td>{key.fees}</td>
        </th>
        
      </tr>
      </>
    )
  })}
  // else{
  //    ans= <h1>Do data Found</h1>
  // }

  return(
    <>
    <section style={{display:"block"}}>
    <div style={{display:"block"}}>
     {/* <h1 style={{marginLeft:"400px"}}>Search My Data</h1> */}
     <input style={{marginLeft:"400px"}} type="text" value={rno} onChange={(e)=>{setrno(e.target.value)}} />
     <button onClick={handlesearch} style={{marginLeft:"10px",borderRadius:"10px",backgroundColor:"gray",color:"white",marginBottom:"20px"}}>Search</button>
     </div> 
     <div style={{marginLeft:"250px",width:"50%"}}> 
     <Table striped bordered hover >
      <thead >
        <tr >
          {/* <th>Roll No</th>
          <th>Name</th>
          <th>City</th>
          <th>Fees</th> */}
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>
      </div>
      </section>

      {/* <button onClick={()=>{gotoDisplay()}}>Go TO Display</button>
      <button onClick={back}>Back</button> */}

    </>
  )
}
export default Search;