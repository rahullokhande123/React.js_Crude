import { useState } from "react";
import Search from "./Search";

const Home=()=>{

  const [val,setVal]=useState("");
    return(
        <>
        <div id="homeCSS">
          <h1 style={{marginLeft:"230px",marginBottom:"50px",fontFamily:"Anton SC sans-serif"}}> Welcome To Cybrom Student Dashboard </h1>
           



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