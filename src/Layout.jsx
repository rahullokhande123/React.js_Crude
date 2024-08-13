
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link,Outlet } from 'react-router-dom';



const Layout=()=>{
     return(
      <>
      <section style={{display:"flex"}}>
      <div style={{width:"300px",height:"800px"}}>
        <Navbar bg="dark" data-bs-theme="dark" >
        <Container>
          <Nav className="me-auto" style={{display:"block",height:"758px",fontSize:"20px",width:'120px'}}>
            <h1>Cybrom</h1>
            <div id='sidenav'>
            <Nav.Link as={Link} to="home" style={{marginTop:"50px",marginBottom:"25px"}}>Home</Nav.Link>
            <Nav.Link as={Link} to="insert" style={{marginBottom:"25px"}}>Insert</Nav.Link>
            <Nav.Link as={Link} to="display" style={{marginBottom:"25px"}}>Display</Nav.Link>
            <Nav.Link as={Link} to="search" style={{marginBottom:"25px"}}>Search</Nav.Link>
            <Nav.Link as={Link} to="update" style={{marginBottom:"25px"}}>Update</Nav.Link>
            <Nav.Link as={Link} to="contact" style={{marginBottom:"25px"}}>Contact</Nav.Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
      </div>
      <div className='midsection'></div>
      
         <Outlet/>
      
      </section>
      </>
     )
}
export default Layout;

