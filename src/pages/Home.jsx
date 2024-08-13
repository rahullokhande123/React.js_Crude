import { useState } from "react";
import Search from "./Search";

const Home=()=>{

  const [val,setVal]=useState("");
    return(
        <>
        <div id="homeCSS">
          <h1 style={{marginLeft:"400px",marginBottom:"50px"}}> Welcome To Home Page </h1>
           



           <Search/>
          {/* <div style={{marginLeft:"400px"}}>
          <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}} />
          <button >Search</button>
          </div> */}
        </div>
        </>
    )
}

export default Home;