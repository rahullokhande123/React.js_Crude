import { useState } from "react";
import Search from "./Search";
import Login from "./Login";
import { Navigate, useNavigate } from "react-router-dom";

import { CiLogin } from "react-icons/ci";

const Home=()=>{

  const [val,setVal]=useState("");
  
    return(
        <>
        <div id="homeCSS">
          <h1> Welcome To Cybrom Pvt. Ltd. Bhopal </h1>

           <Search/>
           
        </div>
        </>
    )
}

export default Home;